import { GAME_SCALE } from "../config";
import { Clone } from "../utils/Clone";

class _Mouse{


    _x:number;
    _y:number;
    _buttons:[boolean,boolean,boolean];

    constructor(){
        this._x = 0;
        this._y = 0;
        this._buttons = [false,false,false];
    }

    pressEventHandler(e:MouseEvent){
        this._buttons[e.button] = true;
    }
    releaseEventHandler(e:MouseEvent){
        this._buttons[e.button] = false;
    }
    moveEventHandler(e:MouseEvent){
        if(e.target){
            this._x = (e.offsetX ) / GAME_SCALE;
            this._y = (e.offsetY ) / GAME_SCALE;
        }
    }
    cancelEventHandler(){
        
    }

    getState():MouseState{
        const mousestate = new MouseState();
        mousestate.x = Clone(this._x);
        mousestate.y = Clone(this._y);
        mousestate.buttons = Clone(this._buttons);
        return mousestate;
    }

    bindEvent(canvasElement:HTMLCanvasElement){
        canvasElement.addEventListener("mousedown", this.pressEventHandler.bind(this));
        canvasElement.addEventListener("mousemove", this.moveEventHandler.bind(this));
        canvasElement.addEventListener("mouseup", this.releaseEventHandler.bind(this));
        canvasElement.addEventListener("mouseout", this.cancelEventHandler.bind(this));
    }
}

export class MouseState{
    x:number = 0;
    y:number = 0;
    buttons:[boolean,boolean,boolean] = [false,false,false];
}

const Mouse = new _Mouse();
export default Mouse;