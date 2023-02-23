import Color from '../../framework/color';
import LEVEL1 from '../../levels/test.json';
import CAMERA from '../entities/camera';

export interface ILevel{
    layers:Array<ILayer>;
}

export interface ILayer{
    objects: Array<IObject>;
}

export interface IObject{
    polygon?:Array<{x:number,y:number}>;
    x:number;
    y:number;
    point?:boolean;
    properties: Array<{
        name:string,
        type:string,
        value:string    
    }>
}

export class LevelManager {
    
    _levels:Array<ILevel>;
    _levelIndex = 0;
    public constructor(){
        this._levels = [];
        this._levels.push(LEVEL1 as ILevel);
    }

    public load(level_name:String){
        //var level = require("./../../levels/"+level_name+".json")
        console.log(LEVEL1);
    }

    public getStart():{x:number,y:number}{
        for (var objectElement of this._levels[this._levelIndex].layers[0].objects) {
            if(objectElement.properties[0].value == "start"){
                return {x:objectElement.x,y:objectElement.y}
            }
        }

        return {
            x:0,
            y:0
        }
    }

    public getInner():Array<{x:number,y:number}> {
        for (var objectElement of this._levels[this._levelIndex].layers[0].objects) {
            if(objectElement.polygon && objectElement.properties[0].value == "inner"){
               return objectElement.polygon;
            }
        }
        return [];
    }
    public getOuter():Array<{x:number,y:number}> {
        for (var objectElement of this._levels[this._levelIndex].layers[0].objects) {
            if(objectElement.polygon && objectElement.properties[0].value == "outer"){
               return objectElement.polygon;
            }
        }
        return [];
    }

    public draw(context:CanvasRenderingContext2D){

        context.strokeStyle = Color.NokiaColorTwo.ToHEX();
        context.lineWidth = 1;
        
        context.beginPath();
        for (var objectElement of this._levels[this._levelIndex].layers[0].objects) {
            if(objectElement.polygon && (objectElement.properties[0].value == "inner" || objectElement.properties[0].value == "outer")){
                for (let index = 0; index < objectElement.polygon.length ; index++) {
                    if(index == 0)
                        context.moveTo(Math.floor(objectElement.polygon[index].x)-CAMERA.X,Math.floor(objectElement.polygon[index].y)-CAMERA.Y);
                    else{
                        context.lineTo(Math.floor(objectElement.polygon[index].x)-CAMERA.X,Math.floor(objectElement.polygon[index].y)-CAMERA.Y);
                    }
                  
                    context.stroke();
                }
                context.lineTo(Math.floor(objectElement.polygon[0].x)-CAMERA.X,Math.floor(objectElement.polygon[0].y)-CAMERA.Y);
                context.stroke();
            }
        }
        
        context.closePath();
    }
    
}

const LEVELMANAGER:LevelManager = new LevelManager();

export default LEVELMANAGER;