import './style.css'
import gameCanvas from './framework/gameCanva';
import Game from './game/game';

const game = new Game();

const canvasElement = document.querySelector<HTMLCanvasElement>('#game')!;

const canvas = new gameCanvas(canvasElement, (context:CanvasRenderingContext2D, timeStamp:number) => {
    game.update(timeStamp);
    game.draw(context);
});

canvas.run();