import CAMERA from "./camera";

export default class Particle {

    x:number;
    y:number;
    lifetime:number;
    vx:number;
    vy:number;

    
    constructor(x:number,y:number,vx:number,vy:number,lifetime:number){
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.lifetime = lifetime;
    }

    public update(delta:number){
        this.lifetime--;
        this.x += this.vx;
        this.y += this.vy;
    }

    public get dead(){
        return this.lifetime <= 0;
    }

    public draw(context:CanvasRenderingContext2D){
        context.fillRect(Math.floor(this.x)-CAMERA.X, Math.floor(this.y)-CAMERA.Y, 1, 1);
    }


}