document.addEventListener('DOMContentLoaded', function() {
    let ball = document.getElementById('ball');
    //let ball2 = document.getElementById('ball');
    let ballContainer = document.getElementById('div-0');
    let originalPosition = { x: 0, y: 0 };
    let currentDroppable = null;



    ball.onmousedown = function(event) {
        let shiftX = event.clientX - ball.getBoundingClientRect().left;
        let shiftY = event.clientY - ball.getBoundingClientRect().top;

        ball.style.position = 'absolute';
        ball.style.zIndex = 1000;
        ballContainer.append(ball);
        originalPosition.x = event.pageX - shiftX;
        originalPosition.y = event.pageY - shiftY;
        ball.style.width = '18em';


        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            ball.style.left = pageX - shiftX + 'px';
            ball.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);

            ball.hidden = true;
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            ball.hidden = false;

            if (!elemBelow) return;

            let droppableBelow = elemBelow.closest('.droppable');
            if (currentDroppable != droppableBelow) {
                if (currentDroppable) {
                    leaveDroppable(currentDroppable);
                }
                currentDroppable = droppableBelow;
                if (currentDroppable) {
                    originalPosition.x = event.pageX - shiftX;
                    originalPosition.y = event.pageY - shiftY;
                    enterDroppable(currentDroppable);
                }
            }
        }

        document.addEventListener('mousemove', onMouseMove);

        ball.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            ball.onmouseup = null;
            if (currentDroppable) {
                currentDroppable.appendChild(ball);
                ball.style.position = 'static';
                ball.style.left = '';
                ball.style.top = '';
                ball.style.width = '';
                leaveDroppable(currentDroppable);
                currentDroppable = null;
            } else {
                ball.style.left = originalPosition.x + 'px';
                ball.style.top = originalPosition.y + 'px';
                ball.style.width = '18em';
                ball.style.position = 'static';
                ballContainer.appendChild(ball);
                console.log("suelta");
            }
        };
    };

    function enterDroppable(elem) {
        elem.style.background = 'pink';
        let objeto = ball;
        objeto.id = "temp";
        objeto.position = "static";
        objeto.style.zIndex = 1000;
        //ball.style.width = '18em';
        ballContainer = elem;
        let contenedor = ballContainer.children[1];
        console.log(objeto);
        contenedor.appendChild(objeto);
    }

    function leaveDroppable(elem) {
        elem.style.background = '';
    }

    ball.ondragstart = function() {
        return false;
    };
});


