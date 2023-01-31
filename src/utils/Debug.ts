const DEBUG:boolean = true;

export function FPS(delta:number){
    if(DEBUG)
        return Math.round(1 / (delta/1000));
    return 60;
}