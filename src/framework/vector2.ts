export default class Vector2{

    X:number;
    Y:number;
    
    constructor(x:number=0,y:number=0){
        this.X = x;
        this.Y = y;
    }

    public static get Zero(){
        return new Vector2();
    }
    public static get Left(){
        return new Vector2(-1,0);
    }
    public static get Right(){
        return new Vector2(1,0);
    }
    public static get Up(){
        return new Vector2(0,-1);
    }
    public static get Down(){
        return new Vector2(0,1);
    }
}