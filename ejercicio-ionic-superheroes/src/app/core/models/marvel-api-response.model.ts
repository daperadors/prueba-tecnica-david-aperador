import { Hero } from "@/app/features/heroes/models/hero.model";
import { MarvelApiData } from "./marvel-api-data.model";

export class MarvelApiResponse<T> {
    private _code: number;
    private _status: string;
    private _data: MarvelApiData<T>;

    constructor(apiData: any, data: MarvelApiData<T>) {
        this._code = apiData.code;
        this._status = apiData.status;
        this._data = data;
    }

    get code(): number {
        return this._code;
    }

    get status(): string {
        return this._status;
    }

    get data(): MarvelApiData<T> {
        return this._data;
    }

    static createHeroResponse(apiData: any): MarvelApiResponse<Hero> {
        const data = new MarvelApiData<Hero>(apiData.data, (item) => new Hero(item));
        return new MarvelApiResponse<Hero>(apiData, data);
    }
}