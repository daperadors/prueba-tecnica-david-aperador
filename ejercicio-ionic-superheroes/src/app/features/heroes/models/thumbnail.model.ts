export class Thumbnail {
  private _path: string;
  private _extension: string;

  constructor(data: any) {
    this._path = data.path || '';
    this._extension = data.extension || '';
  }

  get path(): string {
    return this._path;
  }

  get extension(): string {
    return this._extension;
  }

  get fullPath(): string {
    return `${this._path}.${this._extension}`;
  }
}