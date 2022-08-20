import { convertFile } from 'convert-svg-to-webp';

export class WebpProvider {
  async convert(file: string): Promise<string> {
    return convertFile(file);
  }
}
