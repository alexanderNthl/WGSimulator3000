import { AssetRepository } from "../assets/AssetRepository";
import { Sound } from "./Sound";

export class AudioPlayer {
  private audioContext: AudioContext;

  private soundsByKey: Map<string, Array<Sound>>;

  private assetRepository: AssetRepository;

  private playbackIsPaused: boolean;
  private isMuted: boolean;

  constructor(assetRepository: AssetRepository) {
    this.audioContext = new AudioContext();
    this.assetRepository = assetRepository;
    this.soundsByKey = new Map();
    this.playbackIsPaused = false;
    this.isMuted = false;
  }

  public playSound(
    key: string,
    loop: boolean = false,
    useExistingIfExist: boolean = false
  ): boolean {
    this.checkSuspended();
    const soundBuffer = this.assetRepository.getAudio(key);
    if (soundBuffer === undefined) {
      return false;
    }

    let sound = undefined;

    if (useExistingIfExist) {
      sound = this.soundsByKey.get(key)?.[0];
    }

    if (sound === undefined) {
      sound = new Sound(
        key,
        this.audioContext,
        soundBuffer,
        loop,
        this.isMuted,
        this.cleanUpSound.bind(this)
      );

      if (!this.soundsByKey.has(key)) {
        this.soundsByKey.set(key, []);
      }

      this.soundsByKey.get(key).push(sound);
    }

    if (!this.playbackIsPaused) {
      sound.resume();
    }
  }

  public stopSound(key, stopAll: boolean = true): boolean {
    const sounds = this.soundsByKey.get(key);

    if (sounds === undefined || sounds.length == 0) return false;

    if (stopAll) {
      sounds.forEach((sound) => sound.stop());
    } else {
      sounds[0].stop();
    }
    return true;
  }

  public pausePlayback() {
    if (this.playbackIsPaused) return;

    this.playbackIsPaused = true;
    this.soundsByKey.forEach((sounds) =>
      sounds.forEach((sound) => sound.pause())
    );
  }

  public resumePlayback() {
    if (!this.playbackIsPaused) return;

    this.playbackIsPaused = false;
    this.soundsByKey.forEach((sounds) =>
      sounds.forEach((sound) => sound.resume())
    );
  }

  public setMute(muteSound: boolean) {
    this.isMuted = muteSound;
    if (muteSound) {
      this.soundsByKey.forEach((sounds) =>
        sounds.forEach((sound) => sound.mute())
      );
    } else {
      this.soundsByKey.forEach((sounds) =>
        sounds.forEach((sound) => sound.unmute())
      );
    }
  }

  public activate() {
    this.checkSuspended();
  }

  private checkSuspended() {
    if (this.audioContext.state === "suspended") {
      this.audioContext.resume();
    }
  }

  private cleanUpSound(sound: Sound) {
    const array = this.soundsByKey.get(sound.getKey());

    if (array === undefined) return;

    const index = array.indexOf(sound);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
}
