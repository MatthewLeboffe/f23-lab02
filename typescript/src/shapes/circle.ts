import { Shape } from "./shape";

function newCircle(radius: number): Shape {
    return {
        area: function (): number {
            return Math.PI * radius * radius
        }
    }
}

export {newCircle }
