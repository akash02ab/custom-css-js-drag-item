const box = document.querySelector(".box");
const container = document.querySelector(".inner-container");

let [x, y] = [0, 0];

const isInside = (x, y) => {
    return x >= 0 && x + box.offsetWidth < container.offsetWidth &&
    y >= 0 && y + box.offsetHeight < container.offsetHeight;
}

const moveBox = (e) => {
    let dx = e.clientX - x;
    let dy = e.clientY - y;
    
    if(isInside(box.offsetLeft + dx, box.offsetTop + dy)) {
        box.style.left = box.offsetLeft + dx + "px";
        box.style.top = box.offsetTop + dy + "px";
    }
        
    x = e.clientX;
    y = e.clientY;
}
    
const triggerBoxMove = (e) => {
    x = e.clientX;
    y = e.clientY;
    document.addEventListener("mousemove", moveBox);
    document.addEventListener("mouseup", triggerBoxFreeze);
}

const triggerBoxFreeze = (e) => {
    document.removeEventListener("mousemove", moveBox);
    document.removeEventListener("mousedown", triggerBoxMove);
}

box.addEventListener("mousedown", triggerBoxMove);