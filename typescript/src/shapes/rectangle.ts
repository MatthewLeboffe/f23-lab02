import { Shape } from "./shape"

function newRectangle(width: number, height: number): Shape{
    return {

        area: function (): number {
            return width * height
        }
    }
}

export {newRectangle }
