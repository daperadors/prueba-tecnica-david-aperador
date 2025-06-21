import { MarvelApiData } from "./marvel-api-data.model";

export class MarvelApiResponse {
    private _code: number;
    private _status: string;
    private _data: MarvelApiData;

    constructor(apiData: any) {
        this._code = apiData.code;
        this._status = apiData.status;
        this._data = new MarvelApiData(apiData.data);
    }

    get code(): number {
        return this._code;
    }

    get status(): string {
        return this._status;
    }

    get data(): MarvelApiData {
        return this._data;
    }
}