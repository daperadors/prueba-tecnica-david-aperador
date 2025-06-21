import { Hero } from "./hero.model";

export class MarvelApiData {
    private _count: number;
    private _limit: number;
    private _offset: number;
    private _total: number;
    private _results: Hero[];

    constructor(data: any) {
        this._count = data.count;
        this._limit = data.limit;
        this._offset = data.offset;
        this._total = data.total;
        this._results = data.results ? data.results.map((hero: any) => new Hero(hero)) : [];
    }

    get count(): number {
        return this._count;
    }

    get limit(): number {
        return this._limit;
    }

    get offset(): number {
        return this._offset;
    }

    get total(): number {
        return this._total;
    }

    get results(): Hero[] {
        return this._results;
    }
}