import { newRectangle, Rectangle } from "./shapes/rectangle.js";

function newRenderer(rectangle: Rectangle) {
    return {
        draw() {
            const area: number = rectangle.area()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }