export default class Color{
    private _r:number;
    private _g:number;
    private _b:number;
    private _a:number;

    constructor(R:number, G:number, B:number, A:number = 255){
        this._r = Math.floor(R);
        this._g = Math.floor(G);
        this._b = Math.floor(B);
        this._a = Math.floor(A);
    }

    public get R() : number {
        return this._r;
    }
    public get G() : number {
        return this._g;
    }
    public get B() : number {
        return this._b;
    }
    public get A() : number {
        return this._a;
    }

    
    public ToHEXWithA(alpha:number):string{

            return Color.RGBAtoHEX(this._r, this._g, this.B, alpha);

    }

    public ToHEX(transparency:boolean=false):string{
        if(transparency)
            return Color.RGBAtoHEX(this._r, this._g, this.B, this.A);
        else
            return Color.RGBtoHEX(this._r, this._g, this.B);
    }

    public static FromHEX = (hex:String, alpha = 1) => {
        const [r, g, b] = (hex.match(/\w\w/g) as RegExpMatchArray).map((x:string) => parseInt(x, 16));
        return new Color(r,g,b,parseInt((alpha*255).toString()));
    };

    public static RGBtoHEX = (r:number, g:number, b:number) => {
        let rgb = r+","+g+","+b;
        let result = rgb.match(/^[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (result && result.length === 4) ? "#" +
            ("0" + parseInt(result[1],10).toString(16)).slice(-2) +
            ("0" + parseInt(result[2],10).toString(16)).slice(-2) +
            ("0" + parseInt(result[3],10).toString(16)).slice(-2) : '';
    }

    public static RGBAtoHEX = (r:number, g:number, b:number, a:number) => {
        let rgba = r+","+g+","+b+","+a;
        let result = rgba.match(/^[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (result && result.length === 5) ? "#" +
            ("0" + parseInt(result[1],10).toString(16)).slice(-2) +
            ("0" + parseInt(result[2],10).toString(16)).slice(-2) +
            ("0" + parseInt(result[3],10).toString(16)).slice(-2) +
            ("0" + parseInt(result[4],10).toString(16)).slice(-2) : '';
    }

    public static readonly NokiaColorOne = Color.FromHEX("#c7f0d8");
    public static readonly NokiaColorTwo = Color.FromHEX("#43523d");
    
}