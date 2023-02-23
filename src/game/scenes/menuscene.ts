import Keyboard from "../../framework/keyboard";
import Vector2 from "../../framework/vector2";
import Kuru from "../kuru";
import IScene from "./iscene";

export default class MenuScene implements IScene{

    x:number = 30;
    y:number = 30;
    kuru:Kuru;


    constructor(){
        this.kuru = new Kuru();
        this.kuru._position = new Vector2(24,24);
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
         
         this.kuru.draw(context);
     }
 
}