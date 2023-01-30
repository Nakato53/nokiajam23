import { GAME_HEIGHT, GAME_WIDTH } from "../config";
import Color from "../framework/color";
import Keyboard from "../framework/keyboard";
import Vector2 from "../framework/vector2";
import Kuru from "./kuru";

export default class Game{

    x:number = 30;
    y:number = 30;
    kuru:Kuru;

    constructor(){
        this.kuru = new Kuru();
        this.kuru._position = new Vector2(100,100);
    }

    update(delta:number){
       const keyboardstate = Keyboard.getState();
       if(keyboardstate.keys[68]){
        this.kuru._position.X+=delta/3;
       }
       if(keyboardstate.keys[65]){
        this.kuru._position.X-=delta/3;
       }if(keyboardstate.keys[87]){
        this.kuru._position.Y-=delta/3;
       }
       if(keyboardstate.keys[83]){
        this.kuru._position.Y+=delta/3;
       }
       this.kuru.update(delta);
    }

    draw(context:CanvasRenderingContext2D){
        this.clear(context);
        this.kuru.draw(context);
    }

    clear(context:CanvasRenderingContext2D){
        const previousfill = context.fillStyle;
        context.fillStyle = Color.LightSkyBlue.ToHEX();
        context.fillRect(0,0,GAME_WIDTH,GAME_HEIGHT)
        context.fillStyle = previousfill;
    }
}