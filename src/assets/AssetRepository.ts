import { DrawableObjectTemplate } from "../model/world/drawable/DrawableObjectTemplate";

export class AssetRepository {
  private audioContext: AudioContext;

  private numberOfAssets: number;

  private imageConfig: Array<any>;
  private audioConfig: Array<any>;
  private drawableObjectTemplates: Array<DrawableObjectTemplate>;

  private images: Map<string, HTMLImageElement>;
  private audios: Map<string, AudioBuffer>;

  constructor(
    imageConfig: Array<any>,
    audioConfig: Array<any>,
    drawableObjectTemplates: Array<DrawableObjectTemplate>
  ) {
    this.audioContext = new AudioContext();

    this.imageConfig = imageConfig;
    this.audioConfig = audioConfig;
    this.drawableObjectTemplates = drawableObjectTemplates;

    this.images = new Map();
    this.audios = new Map();

    this.numberOfAssets =
      this.imageConfig.length +
      this.audioConfig.length +
      this.drawableObjectTemplates.length;
  }

  public getImage(id: string): HTMLImageElement {
    return this.images.get(id);
  }

  public getAudio(id: string): AudioBuffer {
    return this.audios.get(id);
  }

  public getProgress(): number {
    return (this.images.size + this.audios.size) / this.numberOfAssets;
  }

  public async fetchAssets(): Promise<boolean> {
    try {
      let promises = [];
      this.imageConfig.forEach((image) => {
        promises.push(this.fetchBasicImage(image.id, image.imagePath));
      });
      this.drawableObjectTemplates.forEach((template) => {
        promises.push(this.fetchDrawableObjectTemplateImage(template));
      });
      this.audioConfig.forEach((audio) => {
        promises.push(this.fetchBasicAudio(audio.id, audio.imagePath));
      });

      await Promise.all(promises);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  private async fetchBasicImage(id: string, path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      // image.crossOrigin = "Anonymous"; // is this
      image.src = path;
      image.onload = () => {
        this.images.set(id, image);
        resolve(image);
      };
      image.onerror = (e) => {
        reject(e);
      };
    });
  }

  private async fetchDrawableObjectTemplateImage(
    drawableObjectTemplate: DrawableObjectTemplate
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      // image.crossOrigin = "Anonymous"; // is this
      image.src = drawableObjectTemplate.imagePath;
      image.onload = () => {
        this.images.set(drawableObjectTemplate.id, image);
        drawableObjectTemplate.image = image;
        resolve(image);
      };
      image.onerror = (e) => {
        reject(e);
      };
    });
  }

  // Todo does not work when accessing file from file system instead of basic server
  private async fetchBasicAudio(id: string, path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(path)
        .then((response) => {
          return response.arrayBuffer();
        })
        .then((arrayBuffer) => this.audioContext.decodeAudioData(arrayBuffer))
        .then((audio) => {
          this.audios.set(id, audio);
          resolve(audio);
        })
        .catch((err) => reject(err));
    });
  }
}
