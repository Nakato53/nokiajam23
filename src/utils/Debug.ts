const DEBUG:boolean = true;

export function FPS(delta:number){
    return Math.round(1 / (delta/1000));
}