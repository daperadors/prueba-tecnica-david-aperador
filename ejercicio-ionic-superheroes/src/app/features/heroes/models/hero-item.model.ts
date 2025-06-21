export abstract class HeroItem {
    private _available: number;
    
    constructor(data: any) {
        this._available = data.available;
    }
    
    public get available(): number {
        return this._available;
    }
}