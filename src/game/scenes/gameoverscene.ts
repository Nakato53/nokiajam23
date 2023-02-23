import Color from "../../framework/color";
import Keyboard, { KeyboardState } from "../../framework/keyboard";
import PARTICLEMANAGER from "../managers/particlemanager";
import SCENEMANAGER from "../managers/scenemanager";
import IScene from "./iscene";

export default class GameOverScene implements IScene{

    x:number = 4.5;
    y:number = 28.5;
    step:number = 0;
    _previousKeyboard:KeyboardState;

    constructor(){
        this._previousKeyboard = Keyboard.getState();
    }

    update(delta:number){

        let keyboardstate = Keyboard.getState();
       this.step++;
       if(this.step%5==0){
        this.x = Math.random()*2-1;
        this.y = Math.random()*2-1;
       }
       if(this.step>30){
        if(keyboardstate.keys[13]){
            SCENEMANAGER.popScene();
        }
            
       }


       PARTICLEMANAGER.update(delta);
    }
 
    draw(context:CanvasRenderingContext2D){
         
         context.fillStyle = Color.NokiaColorTwo.ToHEX();
         context.beginPath();
         context.fillRect(0,15,84,18);

            context.font = "12.5px pixel";
         context.fillStyle = Color.NokiaColorOne.ToHEX();
         context.fillText("GAME-OVER",4.5+this.x,28.5+this.y);
         context.closePath();

    }
 
}