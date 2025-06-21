export class MarvelApiData<T> {
    private _count: number;
    private _limit: number;
    private _offset: number;
    private _total: number;
    private _results: T[];

    constructor(data: any, createInstance: (item: any) => T) {
        this._count = data.count;
        this._limit = data.limit;
        this._offset = data.offset;
        this._total = data.total;
        this._results = data.results ? data.results.map(createInstance) : [];
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

    get results(): T[] {
        return this._results;
    }
}