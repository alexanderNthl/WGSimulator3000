export class Sound {
  private MILLIS_IN_SECOND: number = 1000;

  private key: string;

  private audioContext: AudioContext;
  private audioBuffer: AudioBuffer;
  private bufferSource: AudioBufferSourceNode;

  private loopAudio: boolean;

  private isMuted: boolean;
  private isPlaying: boolean;
  private lastResumeTime: number;
  private elapsedPlayingTime: number;

  private audioConcludedCallback: (sound: Sound) => void;
  private callBackTimeout;

  constructor(
    key: string,
    audioContext: AudioContext,
    audioBuffer: AudioBuffer,
    loopAudio: boolean = false,
    isMuted: boolean = false,
    audioConcludedCallback?: (sound: Sound) => void
  ) {
    this.key = key;
    this.audioContext = audioContext;
    this.audioBuffer = audioBuffer;

    this.loopAudio = loopAudio;
    this.elapsedPlayingTime = 0;
    this.isPlaying = false;
    this.isMuted = isMuted;

    this.audioConcludedCallback = audioConcludedCallback;
  }

  public getKey(): string {
    return this.key;
  }

  public resume() {
    if (this.isPlaying) return;

    this.lastResumeTime = Date.now();
    this.isPlaying = true;

    /*
     * We can only call buffersource.start() once. That is why we have to reinitialize
     * the buffersource for each call to play().
     */
    this.bufferSource = this.audioContext.createBufferSource();
    this.bufferSource.loop = this.loopAudio;
    this.bufferSource.buffer = this.audioBuffer;
    if (!this.isMuted) {
      this.bufferSource.connect(this.audioContext.destination);
    }
    if (this.audioConcludedCallback !== undefined && !this.loopAudio) {
      const timeToPlay =
        this.audioBuffer.duration * this.MILLIS_IN_SECOND -
        this.elapsedPlayingTime;
      this.callBackTimeout = setTimeout(
        () => this.audioConcludedCallback(this),
        timeToPlay
      );
    }

    const startTime =
      this.elapsedPlayingTime == 0
        ? 0
        : this.elapsedPlayingTime / this.MILLIS_IN_SECOND;
    this.bufferSource.start(0, startTime);
  }

  public pause() {
    if (!this.isPlaying) return;

    this.isPlaying = false;
    this.elapsedPlayingTime =
      this.elapsedPlayingTime + (Date.now() - this.lastResumeTime);

    if (this.loopAudio) {
      this.elapsedPlayingTime =
        this.elapsedPlayingTime %
        (this.audioBuffer.duration * this.MILLIS_IN_SECOND);
    }
    clearTimeout(this.callBackTimeout);

    this.bufferSource.stop();
  }

  public stop() {
    this.elapsedPlayingTime = 0;
    this.isPlaying = false;
    this.bufferSource.stop();
    clearTimeout(this.callBackTimeout);
    if (this.audioConcludedCallback !== undefined)
      this.audioConcludedCallback(this);
  }

  public mute() {
    this.isMuted = true;
    try {
      this.bufferSource.disconnect(this.audioContext.destination);
    } catch (DOMException) {}
  }

  public unmute() {
    this.isMuted = false;
    try {
      this.bufferSource.connect(this.audioContext.destination);
    } catch (DOMException) {}
  }
}
