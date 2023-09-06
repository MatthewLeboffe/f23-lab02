import { Shape } from "./shape"

function newSquare(sideLen: number): Shape{
    return {
        area: function (): number {
            return sideLen * sideLen
        }
    }
}

export {newSquare }