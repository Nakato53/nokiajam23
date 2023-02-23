import Keyboard from "../../framework/keyboard";
import Vector2 from "../../framework/vector2";
import { InsidePolygon } from "../../utils/Polygon";
import CAMERA from "../entities/camera";
import Kuru from "../kuru";
import LEVELMANAGER from "../managers/levelmanager";
import PARTICLEMANAGER from "../managers/particlemanager";
import SCENEMANAGER from "../managers/scenemanager";
import GameOverScene from "./gameoverscene";
import IScene from "./iscene";

export default class GameScene implements IScene{

    invinsible:number=0;
    speed = 0.02;
    multiplier = 1;
    kuru:Kuru;

    constructor(){

        LEVELMANAGER.load("test");

        this.kuru = new Kuru();
        this.kuru._position = new Vector2(LEVELMANAGER.getStart().x,LEVELMANAGER.getStart().y);
    }

    restart(){
        this.kuru._position = new Vector2(LEVELMANAGER.getStart().x,LEVELMANAGER.getStart().y);
        this.kuru._rotation = 0;
        this.kuru._life = 3;
    }
    
    update(delta:number){
        this.invinsible--;
        const keyboardstate = Keyboard.getState();
        if(keyboardstate.keys[16]){
            this.multiplier = 2;
        }else{
            this.multiplier = 1;
        }
        if(keyboardstate.keys[68]){
         this.kuru._position.X+=delta*this.speed*this.multiplier;
        }
        if(keyboardstate.keys[65]){
         this.kuru._position.X-=delta*this.speed*this.multiplier;
        }if(keyboardstate.keys[87]){
         this.kuru._position.Y-=delta*this.speed*this.multiplier;
        }
        if(keyboardstate.keys[83]){
         this.kuru._position.Y+=delta*this.speed*this.multiplier;
        }
        this.kuru.update(delta);

        CAMERA.X = this.kuru._position.X - 42;
        CAMERA.Y = this.kuru._position.Y - 24;

        this.checkCollision();

        PARTICLEMANAGER.update(delta);

     }

     caTouche(){
        this.kuru._rotation -= this.kuru._rotationSpeed * 1000;
        if(this.invinsible < 0){
            this.kuru._life--;
            
            if(this.kuru._life <= 0){
                this.restart();
                SCENEMANAGER.pushScene(new GameOverScene());
            }
            this.invinsible = 20;
        }
     }

     checkCollision(){
        //check inner
        var inner = LEVELMANAGER.getInner();
        if(InsidePolygon(this.kuru.getExternPoints()[0],inner)){
            PARTICLEMANAGER.createExplosion(this.kuru.getExternPoints()[0].x,this.kuru.getExternPoints()[0].y,50);
            this.caTouche();
        }
            
        if(InsidePolygon(this.kuru.getExternPoints()[1],inner)){
            PARTICLEMANAGER.createExplosion(this.kuru.getExternPoints()[1].x,this.kuru.getExternPoints()[1].y,50);
            this.caTouche();
            
        }

        var outer = LEVELMANAGER.getOuter();
        if(!InsidePolygon(this.kuru.getExternPoints()[0],outer)){
            PARTICLEMANAGER.createExplosion(this.kuru.getExternPoints()[0].x,this.kuru.getExternPoints()[0].y,50);
            this.caTouche();
        }
            
        if(!InsidePolygon(this.kuru.getExternPoints()[1],outer)){
            PARTICLEMANAGER.createExplosion(this.kuru.getExternPoints()[1].x,this.kuru.getExternPoints()[1].y,50);
            this.caTouche();
        }
            
      

     }
 
     draw(context:CanvasRenderingContext2D){
         
        LEVELMANAGER.draw(context);
        this.kuru.draw(context);
        
        PARTICLEMANAGER.draw(context);
        /*
        context.fillStyle = Color.NokiaColorTwo.ToHEX();
        context.font = "8px pixel";
        context.fillText("Hello world", 10.5, 10.5);
        */
     }
 
}