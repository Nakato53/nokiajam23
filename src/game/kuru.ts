import Color from "../framework/color";
import Vector2 from "../framework/vector2";

export default class Kuru{

    _position:Vector2 = Vector2.Zero;
    _rotation:number = 17;
    _rotationSpeed:number = 1;
    _longeur = 20;

    update(delta:number){
        this._rotation = this._rotation + this._rotationSpeed;
        if(this._rotation > 360) this._rotation -= 360;
        if(this._rotation < 0) this._rotation += 360;
    }

    draw(context:CanvasRenderingContext2D){
        let angleRad = this._rotation * Math.PI / 180;

        let xDest:number = Math.cos(angleRad);
        let yDest:number = Math.sin(angleRad);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.beginPath();
        context.moveTo(this._position.X-(xDest*(this._longeur+2))+0.5,this._position.Y-(yDest*(this._longeur+2))+0.5);
        context.lineTo(this._position.X+(xDest*(this._longeur+2))+0.5,this._position.Y+(yDest*(this._longeur+2))+0.5)
        context.stroke();
        context.closePath();

        context.strokeStyle = "yellow";
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(this._position.X-(xDest*this._longeur)+0.5,this._position.Y-(yDest*this._longeur)+0.5);
        context.lineTo(this._position.X+(xDest*this._longeur)+0.5,this._position.Y+(yDest*this._longeur)+0.5)
        context.stroke();
        context.closePath();


        context.strokeStyle = Color.Indigo.ToHEX();
        context.beginPath();
        context.arc(this._position.X,this._position.Y, 2,0,2*Math.PI);
        context.stroke();

    }

}