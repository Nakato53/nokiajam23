import { GAME_HEIGHT, GAME_SCALE, GAME_WIDTH } from "../config";
import Keyboard from "./keyboard";
import Mouse from "./mouse";

export default class gameCanvas {

    _context:CanvasRenderingContext2D;
    _secondsPassed:number = 0;
    _oldTimeStamp:number = 0;
    _fps:number = 0;
    _running:boolean = false;
    _update:Function;

    _test:number = 0;

    constructor(canvas:HTMLCanvasElement, update: (context:CanvasRenderingContext2D, timeStamp:number) => any){
        canvas.style.width = Math.floor(GAME_WIDTH*GAME_SCALE) + "px";
        canvas.style.height = Math.floor(GAME_HEIGHT*GAME_SCALE) + "px";
        
        canvas.style.imageRendering = 'pixelated';
        canvas.style.textRendering = 'geometricPrecision';
        canvas.width = GAME_WIDTH;
        canvas.height = GAME_HEIGHT;

        this._context = canvas.getContext('2d') as CanvasRenderingContext2D;
        this._context.imageSmoothingEnabled = false;
        
        this._context.translate(0, 0);
        this._update = update
        
        Mouse.bindEvent(canvas);
        Keyboard.bindEvents();
    }

    private loop(timeStamp:number=0) {
        // Calculate the number of seconds passed since the last frame
        this._secondsPassed = (timeStamp - this._oldTimeStamp);
        this._oldTimeStamp = timeStamp;

        this._update(this._context, this._secondsPassed);

        // The loop function has reached it's end. Keep requesting new frames
        window.requestAnimationFrame(this.loop.bind(this));
    }

    run(){
        if(!this._running)
            this.loop();
    }
}