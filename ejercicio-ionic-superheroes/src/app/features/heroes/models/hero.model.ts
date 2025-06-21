import { Comic } from "./comic.model";
import { Serie } from "./serie.model";
import { Storie } from "./storie.model";
import { Thumbnail } from "./thumbnail.model";

export class Hero {
  private _id: number;
  private _name: string;
  private _description: string;
  private _thumbnail: Thumbnail;
  private _comics: Comic;
  private _series: Serie;
  private _stories: Storie;

  constructor(data: any) {
    this._id = data.id;
    this._name = data.name || '';
    this._description = data.description || '';
    this._thumbnail = new Thumbnail(data.thumbnail);
    this._comics = new Comic(data.comics);
    this._series = new Serie(data.series);
    this._stories = new Storie(data.stories);
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get thumbnail(): Thumbnail {
    return this._thumbnail;
  }

  get comics(): Comic {
    return this._comics;
  }

  get series(): Serie {
    return this._series;
  }

  get stories(): Storie {
    return this._stories;
  }
}