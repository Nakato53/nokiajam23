export class Camera{

    X:number;
    Y:number;
    public constructor(x:number=0, y:number=0){
        this.X=x;
        this.Y=y;
    }

}

const CAMERA:Camera = new Camera();
export default CAMERA;