import { GAME_HEIGHT, GAME_WIDTH } from "../config";
import Color from "../framework/color";
import SCENEMANAGER from "./managers/scenemanager";
import GameOverScene from "./scenes/gameoverscene";
import GameScene from "./scenes/gamescene";
export default class Game{


    constructor(){       
        SCENEMANAGER.pushScene(new GameScene());
        SCENEMANAGER.pushScene(new GameOverScene());
    }

    update(delta:number){
        SCENEMANAGER.update(delta);
    }

    draw(context:CanvasRenderingContext2D){
        this.clear(context);
        SCENEMANAGER.draw(context);
    }

    clear(context:CanvasRenderingContext2D){
        const previousfill = context.fillStyle;
        context.fillStyle = Color.NokiaColorOne.ToHEX();
        context.fillRect(0,0,GAME_WIDTH,GAME_HEIGHT)
        context.fillStyle = previousfill;
    }
}