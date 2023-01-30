import { Clone } from "../utils/Clone";

class _Keyboard{

    _keys:Array<Boolean>;

    constructor(){
      this._keys = [];
    }

    keydownEventHandler(e:KeyboardEvent){
        this._keys[e.keyCode] = true;
    }
    
    keyupEventHandler(e:KeyboardEvent){
        this._keys[e.keyCode] = false;
    }

    bindEvents(){
        document.body.addEventListener("keydown", this.keydownEventHandler.bind(this));
        document.body.addEventListener("keyup", this.keyupEventHandler.bind(this));
    }

    getState():KeyboardState{
        const keyboardstate = new KeyboardState();
        keyboardstate.setKeys(Clone(this._keys));
        return keyboardstate;
    }
}

export class KeyboardState{
    keys:Array<Boolean> = [];

    setKeys(keys:Array<Boolean>){
        this.keys = keys;
    }
}

const Keyboard = new _Keyboard();
export default Keyboard;