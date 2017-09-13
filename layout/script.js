function main() {
    const CONTAINER = {
        width: 600,
        height: 400
    }

    const DIRECTIONS = {
        37: 'LEFT',
        38: 'UP',
        39: 'RIGHT',
        40: 'DOWN',
    }

    var container
    var head
    var x, y
    var tX, tY
    var oX, oY
    var direction
    var snakeBody
    var doGrow = false

    container = document.getElementById('wrapper')
    head = document.getElementById('snake-head')
    snakeBody = []

    x = CONTAINER.width/2
    head.style.top = CONTAINER.height/2
    y = CONTAINER.height/2
    head.style.left = CONTAINER.width/2

    setInterval(move, 300)
    document.addEventListener('keydown', handleKeyPress)

    function move() {
        //if (direction) {
        //    console.log('started')
        //}

        oX = x
        oY = y

        switch (direction) {
            case 'LEFT':
                x -= 20
                break
            case 'UP':
                y -= 20
                break
            case 'RIGHT':
                x += 20
                break
            case 'DOWN':
                y += 20
                break
        }

        head.style.left = x
        head.style.top = y

        if (snakeBody.length) {
            tX = snakeBody[snakeBody.length-1].style.left
            tY = snakeBody[snakeBody.length-1].style.top
        } else {
            tX = x
            tY = y
        }

        if (snakeBody.length > 0) {
            snakeBody[0].style.left = oX
            snakeBody[0].style.top = oY
        }

        for (var i = 1; i < snakeBody.length; i++) {
            snakeBody[i].style.left = snakeBody[i-1].style.left
            snakeBody[i].style.top = snakeBody[i-1].style.top
        }

        if (doGrow) {
            addBody()
        }

    }

    function addBody() {
        var el

        el = document.createElement('div')
        el.className = 'snake-body'

        container.appendChild(el)

        el.style.left = tX
        el.style.top = tY

        snakeBody.push(el)

        doGrow = false
    }

    function handleKeyPress(event) {
        if (event.keyCode >= 37 && event.keyCode <= 40) {
            direction = DIRECTIONS[event.keyCode]
            return
        }

        if (event.keyCode = 32) {
            doGrow = true
            return
        }

        console.log(event.keyCode)

    }
}




document.addEventListener('DOMContentLoaded', main, false);
