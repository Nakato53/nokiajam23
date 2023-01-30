export function Clone<T>(value:T):T{
    return JSON.parse(JSON.stringify(value));
}