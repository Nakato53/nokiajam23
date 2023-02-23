import Particle from "../entities/particle";

export class ParticleManager {

    _particles:Array<Particle>;

    constructor(){
        this._particles = [];
    }
    
    public update(delta:number){
       for (let index = this._particles.length-1; index > -1; index--) {
            try {
                this._particles[index].update(delta);
                if(this._particles[index].dead){
                    this._particles.splice(index,1);
                }
            } catch (error) {
                console.log(index,this._particles.length);
            }
          
       }
    }

    public draw(context:CanvasRenderingContext2D){
        this._particles.forEach(p => {
            p.draw(context);
        });
    }

    public add(x:number,y:number,vx:number,vy:number,lifetime:number){
        let p = new Particle(x,y,vx,vy,lifetime);
        this._particles.push(p);
    }

    public createExplosion(x:number,y:number,count:number){
        //create 'count' explosion particles
        for (let index = 0; index < count; index++) {
            let angle =  Math.random()*(2*Math.PI);

            this.add(x,y,Math.cos(angle),Math.sin(angle),100);
        }
    }
}

const PARTICLEMANAGER:ParticleManager = new ParticleManager();
export default PARTICLEMANAGER;