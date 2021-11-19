
function trackMouse(event) {
    document.documentElement.style.setProperty(
        "--cursorXPos",
        `${event.clientX}px`
        //마우스 x 좌표
    );
    function trackMouse(event)
    document.documentElement.style.setProperty(
        "--cursorYPos",
        `${event.clientY}px`
        //마우스 y 좌표
    );
    document.addEventListener('mousemove',trackMouse);
    //마우스가 움직일 때마다 트랙마우스 호출
}