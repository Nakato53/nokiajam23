import IScene from "../scenes/iscene";

export class SceneManager {
    _scenes:Array<IScene> = [];
    

    public constructor(){

    }

    public pushScene(scene:IScene){
        this._scenes.push(scene);
    }

    public popScene(){
        this._scenes.pop();
    }

    public clear(){
        this._scenes = [];
    }

    public update(delta:number){
        this._scenes[this._scenes.length-1].update(delta);
    }

    public draw(context:CanvasRenderingContext2D){
        for (let index = 0; index < this._scenes.length; index++) {
            this._scenes[index].draw(context);
        }
    }
}

const SCENEMANAGER:SceneManager = new SceneManager();

export default SCENEMANAGER;