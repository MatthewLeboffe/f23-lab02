import { Shape } from "./shape"

interface Square extends Shape {
    sideLen: number;
}

function newSquare(sideLen: number): Square {
    return {
        sideLen,
        area: function (): number {
            return sideLen * sideLen
        }
    }
}

export { Square, newSquare }