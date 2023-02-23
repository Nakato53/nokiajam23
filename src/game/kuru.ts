import Color from "../framework/color";
import Vector2 from "../framework/vector2";
import CAMERA from "./entities/camera";

export default class Kuru{

    _position:Vector2 = Vector2.Zero;
    _rotation:number = 17;
    _rotationSpeed:number = 0.05;
    _longeur = 10;
    _life:number = 3;

    update(delta:number){
        this._rotation = this._rotation + this._rotationSpeed*delta;
        if(this._rotation > 360) this._rotation -= 360;
        if(this._rotation < 0) this._rotation += 360;
    }

    draw(context:CanvasRenderingContext2D){
        let angleRad = this._rotation * Math.PI / 180;

        let xDest:number = Math.cos(angleRad);
        let yDest:number = Math.sin(angleRad);

        context.strokeStyle = Color.NokiaColorTwo.ToHEX();
        context.lineWidth = 3;
        context.beginPath();
        context.moveTo(this._position.X-(xDest*this._longeur)-CAMERA.X,this._position.Y-(yDest*this._longeur)-CAMERA.Y);
        context.lineTo(this._position.X+(xDest*this._longeur)-CAMERA.X,this._position.Y+(yDest*this._longeur)-CAMERA.Y)
        context.stroke();
        context.closePath();

        context.beginPath();
        context.arc(this._position.X-CAMERA.X,this._position.Y-CAMERA.Y,1,0,2*Math.PI);
        context.stroke();
        context.closePath();

        //UI
        context.beginPath();

        context.fillStyle = Color.NokiaColorTwo.ToHEX();
        for (let index = 0; index < this._life; index++) {
            context.fillRect(2+index*4,2,2,2);   
        }
        context.closePath();
    }

    public getExternPoints():Array<{x:number,y:number}>
    {
        let angleRad = this._rotation * Math.PI / 180;

        let xDest:number = Math.cos(angleRad);
        let yDest:number = Math.sin(angleRad);

        var point1 = {
            x:this._position.X-(xDest*this._longeur),
            y:this._position.Y-(yDest*this._longeur)
        }

        var point2 = {
            x:this._position.X+(xDest*this._longeur),
            y:this._position.Y+(yDest*this._longeur)
        }
    
        return [point1,point2];
    }
}