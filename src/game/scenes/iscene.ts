export default interface IScene{
    update(delta:number):void;
    draw(context:CanvasRenderingContext2D):void;
}