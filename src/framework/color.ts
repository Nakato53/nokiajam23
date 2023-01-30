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

    private static FromHEXXNA = (hex:String, alpha = 1) => {
        const [b, g, r] = (hex.match(/\w\w/g) as RegExpMatchArray).map((x:string) => parseInt(x, 16));
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

    public static readonly Transparent = Color.FromHEXXNA("#000000",0);
	public static readonly AliceBlue = Color.FromHEXXNA("#fff8f0",1);
    public static readonly AntiqueWhite = Color.FromHEXXNA("#d7ebfa",1);
	public static readonly Aqua = Color.FromHEXXNA("#ffff00",1);
	public static readonly Aquamarine = Color.FromHEXXNA("#d4ff7f",1);
	public static readonly Azure = Color.FromHEXXNA("#fffff0",1);
	public static readonly Beige = Color.FromHEXXNA("#dcf5f5",1);
	public static readonly Bisque = Color.FromHEXXNA("#c4e4ff",1);
	public static readonly Black = Color.FromHEXXNA("#000000",1);
	public static readonly BlanchedAlmond = Color.FromHEXXNA("#cdebff",1);
	public static readonly Blue = Color.FromHEXXNA("#ff0000",1);
	public static readonly BlueViolet = Color.FromHEXXNA("#e22b8a",1);
	public static readonly Brown = Color.FromHEXXNA("#2a2aa5",1);
	public static readonly BurlyWood = Color.FromHEXXNA("#87b8de",1);
	public static readonly CadetBlue = Color.FromHEXXNA("#a09e5f",1);
	public static readonly Chartreuse = Color.FromHEXXNA("#00ff7f",1);
	public static readonly Chocolate = Color.FromHEXXNA("#1e69d2",1);
	public static readonly Coral = Color.FromHEXXNA("#507fff",1);
	public static readonly CornflowerBlue = Color.FromHEXXNA("#ed9564",1);
	public static readonly Cornsilk = Color.FromHEXXNA("#dcf8ff",1);
	public static readonly Crimson = Color.FromHEXXNA("#3c14dc",1);
    public static readonly Cyan = Color.FromHEXXNA("#ffff00",1);
    public static readonly DarkBlue = Color.FromHEXXNA("#8b0000",1);
    public static readonly DarkCyan = Color.FromHEXXNA("#8b8b00",1);
    public static readonly DarkGoldenrod = Color.FromHEXXNA("#0b86b8",1);
    public static readonly DarkGray = Color.FromHEXXNA("#a9a9a9",1);
    public static readonly DarkGreen = Color.FromHEXXNA("#006400",1);
    public static readonly DarkKhaki = Color.FromHEXXNA("#6bb7bd",1);
    public static readonly DarkMagenta = Color.FromHEXXNA("#8b008b",1);
    public static readonly DarkOliveGreen = Color.FromHEXXNA("#2f6b55",1);
    public static readonly DarkOrange = Color.FromHEXXNA("#008cff",1);
    public static readonly DarkOrchid = Color.FromHEXXNA("#cc3299",1);
    public static readonly DarkRed = Color.FromHEXXNA("#00008b",1);
    public static readonly DarkSalmon = Color.FromHEXXNA("#7a96e9",1);
    public static readonly DarkSeaGreen = Color.FromHEXXNA("#8bbc8f",1);
    public static readonly DarkSlateBlue = Color.FromHEXXNA("#8b3d48",1);
    public static readonly DarkSlateGray = Color.FromHEXXNA("#4f4f2f",1);
    public static readonly DarkTurquoise = Color.FromHEXXNA("#d1ce00",1);
    public static readonly DarkViolet = Color.FromHEXXNA("#d30094",1);
    public static readonly DeepPink = Color.FromHEXXNA("#9314ff",1);
    public static readonly DeepSkyBlue = Color.FromHEXXNA("#ffbf00",1);
    public static readonly DimGray = Color.FromHEXXNA("#696969",1);
    public static readonly DodgerBlue = Color.FromHEXXNA("#ff901e",1);
    public static readonly Firebrick = Color.FromHEXXNA("#2222b2",1);
    public static readonly FloralWhite = Color.FromHEXXNA("#f0faff",1);
    public static readonly ForestGreen = Color.FromHEXXNA("#228b22",1);
    public static readonly Fuchsia = Color.FromHEXXNA("#ff00ff",1);
    public static readonly Gainsboro = Color.FromHEXXNA("#dcdcdc",1);
    public static readonly GhostWhite = Color.FromHEXXNA("#fff8f8",1);
    public static readonly Gold = Color.FromHEXXNA("#00d7ff",1);
    public static readonly Goldenrod = Color.FromHEXXNA("#20a5da",1);
    public static readonly Gray = Color.FromHEXXNA("#808080",1);
    public static readonly Green = Color.FromHEXXNA("#008000",1);
    public static readonly GreenYellow = Color.FromHEXXNA("#2fffad",1);
    public static readonly Honeydew = Color.FromHEXXNA("#f0fff0",1);
    public static readonly HotPink = Color.FromHEXXNA("#b469ff",1);
    public static readonly IndianRed = Color.FromHEXXNA("#5c5ccd",1);
    public static readonly Indigo = Color.FromHEXXNA("#82004b",1);
    public static readonly Ivory = Color.FromHEXXNA("#f0ffff",1);
    public static readonly Khaki = Color.FromHEXXNA("#8ce6f0",1);
    public static readonly Lavender = Color.FromHEXXNA("#fae6e6",1);
    public static readonly LavenderBlush = Color.FromHEXXNA("#f5f0ff",1);
    public static readonly LawnGreen = Color.FromHEXXNA("#00fc7c",1);
    public static readonly LemonChiffon = Color.FromHEXXNA("#cdfaff",1);
    public static readonly LightBlue = Color.FromHEXXNA("#e6d8ad",1);
    public static readonly LightCoral = Color.FromHEXXNA("#8080f0",1);
    public static readonly LightCyan = Color.FromHEXXNA("#ffffe0",1);
    public static readonly LightGoldenrodYellow = Color.FromHEXXNA("#d2fafa",1);
    public static readonly LightGray = Color.FromHEXXNA("#d3d3d3",1);
    public static readonly LightGreen = Color.FromHEXXNA("#90ee90",1);
    public static readonly LightPink = Color.FromHEXXNA("#c1b6ff",1);
    public static readonly LightSalmon = Color.FromHEXXNA("#7aa0ff",1);
    public static readonly LightSeaGreen = Color.FromHEXXNA("#aab220",1);
    public static readonly LightSkyBlue = Color.FromHEXXNA("#face87",1);
    public static readonly LightSlateGray = Color.FromHEXXNA("#998877",1);
    public static readonly LightSteelBlue = Color.FromHEXXNA("#dec4b0",1);
    public static readonly LightYellow = Color.FromHEXXNA("#e0ffff",1);
    public static readonly Lime = Color.FromHEXXNA("#00ff00",1);
    public static readonly LimeGreen = Color.FromHEXXNA("#32cd32",1);
    public static readonly Linen = Color.FromHEXXNA("#e6f0fa",1);
    public static readonly Magenta = Color.FromHEXXNA("#ff00ff",1);
    public static readonly Maroon = Color.FromHEXXNA("#000080",1);
    public static readonly MediumAquamarine = Color.FromHEXXNA("#aacd66",1);
    public static readonly MediumBlue = Color.FromHEXXNA("#cd0000",1);
    public static readonly MediumOrchid = Color.FromHEXXNA("#d355ba",1);
    public static readonly MediumPurple = Color.FromHEXXNA("#db7093",1);
    public static readonly MediumSeaGreen = Color.FromHEXXNA("#71b33c",1);
    public static readonly MediumSlateBlue = Color.FromHEXXNA("#ee687b",1);
    public static readonly MediumSpringGreen = Color.FromHEXXNA("#9afa00",1);
    public static readonly MediumTurquoise = Color.FromHEXXNA("#ccd148",1);
    public static readonly MediumVioletRed = Color.FromHEXXNA("#8515c7",1);
    public static readonly MidnightBlue = Color.FromHEXXNA("#701919",1);
    public static readonly MintCream = Color.FromHEXXNA("#fafff5",1);
    public static readonly MistyRose = Color.FromHEXXNA("#e1e4ff",1);
    public static readonly Moccasin = Color.FromHEXXNA("#b5e4ff",1);
    public static readonly NavajoWhite = Color.FromHEXXNA("#addeff",1);
    public static readonly Navy = Color.FromHEXXNA("#800000",1);
    public static readonly OldLace = Color.FromHEXXNA("#e6f5fd",1);
    public static readonly Olive = Color.FromHEXXNA("#008080",1);
    public static readonly OliveDrab = Color.FromHEXXNA("#238e6b",1);
    public static readonly Orange = Color.FromHEXXNA("#00a5ff",1);
    public static readonly OrangeRed = Color.FromHEXXNA("#0045ff",1);
    public static readonly Orchid = Color.FromHEXXNA("#d670da",1);
    public static readonly PaleGoldenrod = Color.FromHEXXNA("#aae8ee",1);
    public static readonly PaleGreen = Color.FromHEXXNA("#98fb98",1);
    public static readonly PaleTurquoise = Color.FromHEXXNA("#eeeeaf",1);
    public static readonly PaleVioletRed = Color.FromHEXXNA("#9370db",1);
    public static readonly PapayaWhip = Color.FromHEXXNA("#d5efff",1);
    public static readonly PeachPuff = Color.FromHEXXNA("#b9daff",1);
    public static readonly Peru = Color.FromHEXXNA("#3f85cd",1);
    public static readonly Pink = Color.FromHEXXNA("#cbc0ff",1);
    public static readonly Plum = Color.FromHEXXNA("#dda0dd",1);
    public static readonly PowderBlue = Color.FromHEXXNA("#e6e0b0",1);
    public static readonly Purple = Color.FromHEXXNA("#800080",1);
    public static readonly Red = Color.FromHEXXNA("#0000ff",1);
    public static readonly RosyBrown = Color.FromHEXXNA("#8f8fbc",1);
    public static readonly RoyalBlue = Color.FromHEXXNA("#e16941",1);
    public static readonly SaddleBrown = Color.FromHEXXNA("#13458b",1);
    public static readonly Salmon= Color.FromHEXXNA("#7280fa",1);
    public static readonly SandyBrown = Color.FromHEXXNA("#60a4f4",1);
    public static readonly SeaGreen = Color.FromHEXXNA("#578b2e",1);
    public static readonly SeaShell = Color.FromHEXXNA("#eef5ff",1);
    public static readonly Sienna = Color.FromHEXXNA("#2d52a0",1);
    public static readonly Silver = Color.FromHEXXNA("#c0c0c0",1);
    public static readonly SkyBlue = Color.FromHEXXNA("#ebce87",1);
    public static readonly SlateBlue= Color.FromHEXXNA("#cd5a6a",1);
    public static readonly SlateGray= Color.FromHEXXNA("#908070",1);
    public static readonly Snow= Color.FromHEXXNA("#fafaff",1);
    public static readonly SpringGreen= Color.FromHEXXNA("#7fff00",1);
    public static readonly SteelBlue= Color.FromHEXXNA("#b48246",1);
    public static readonly Tan= Color.FromHEXXNA("#8cb4d2",1);
    public static readonly Teal= Color.FromHEXXNA("#808000",1);
    public static readonly Thistle= Color.FromHEXXNA("#d8bfd8",1);
    public static readonly Tomato= Color.FromHEXXNA("#4763ff",1);
    public static readonly Turquoise= Color.FromHEXXNA("#d0e040",1);
    public static readonly Violet= Color.FromHEXXNA("#ee82ee",1);
    public static readonly Wheat= Color.FromHEXXNA("#b3def5",1);
    public static readonly White= Color.FromHEXXNA("#ffffff",1);
    public static readonly WhiteSmoke= Color.FromHEXXNA("#f5f5f5",1);
    public static readonly Yellow = Color.FromHEXXNA("#00ffff",1);
    public static readonly YellowGreen = Color.FromHEXXNA("#32cd9a",1);
    
}