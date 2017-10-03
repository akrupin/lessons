const lodash = _

document.addEventListener('DOMContentLoaded', main)

function main() {
    var $canvas, $counter, $lostMessage
    var snake
    var direction
    var cx, cy
    var hasLost
    var doGrow
    var apples
    var counter
    var i

    apples = []
    $canvas = document.getElementById('canvas')
    $counter = document.getElementById('counter')
    $lostMessage = document.getElementById('lost-message')

    $lostMessage.style.display ='none'
    initSnake(3)
    placeApple()


    cx = 30
    cy = 30
    counter = 0
    hasLost = false
    doGrow = false
    document.addEventListener('keydown', handleKeyPress)

    setInterval(move, 100)

    function initSnake(length) {
        snake = []

        var i
        var t = {}

        t.$el = document.createElement('div')
        t.$el.id = 'snake-head'
        $canvas.appendChild(t.$el)
        t.x = 15
        t.y = 15


        console.log(t)
        snake.push(t)

        placeElement(t.$el, t.x, t.y)

        for (i = 0; i < length; i++) {
            var part = {}
            part.$el = document.createElement('div')
            part.$el.className = 'snake-body'
            $canvas.appendChild(part.$el)

            part.y = 15
            part.x = 15 - (i+1)

            placeElement(part.$el, part.x, part.y)

            snake.push(part)
        }

        console.log(snake)
    }

    function cleanupSnake() {
        var bodyPart

        while (snake.length >= 1) {
            bodyPart = snake.pop()
            bodyPart.$el.remove()
        }
    }

    function handleKeyPress(event) {
        if (event.keyCode >= 37 && event.keyCode <= 40) {
            if (!direction && event.keyCode != 37) {

                direction = event.key
            }

            if (['ArrowDown', 'ArrowUp'].includes(direction)
                    && event.keyCode % 2 == 1){
                direction = event.key

            }
            if (['ArrowLeft', 'ArrowRight'].includes(direction) &&
                    event.keyCode % 2 == 0) {
                direction = event.key
            }
        }

        if (event.key == 'Enter') {
            resumeGame()
        }
        if (event.key == ' ') {
            placeApple()
        }

        if (event.key == 'Escape') {
            var $apple
            $apple = apples.shift()
            $apple.remove()
        }

    }

    function move() {
        var i
        var tx, ty

        if (!direction || (hasLost == true)) {
            return
        }


        tx = snake[snake.length-1].x
        ty = snake[snake.length-1].y

        for (i = snake.length - 1; i >= 1; i--) {
            snake[i].x = snake[i-1].x
            snake[i].y = snake[i-1].y
            placeElement(snake[i].$el, snake[i].x, snake[i].y)
        }

        if (doGrow) {
            var part = {}
            part.$el = document.createElement('div')
            part.$el.className = 'snake-body'
            $canvas.appendChild(part.$el)

            part.x = tx
            part.y = ty

            snake.push(part)
            placeElement(part.$el, tx, ty)

            doGrow = false
        }

        switch (direction) {
            case 'ArrowUp':
                snake[0].y--
                break
            case 'ArrowDown':
                snake[0].y++
                break
            case 'ArrowLeft':
                snake[0].x--
                break
            case 'ArrowRight':
                snake[0].x++
                break
        }
        placeElement(snake[0].$el, snake[0].x, snake[0].y)

        checkBorderCollisions()
        checkBodyCollisions()
        checkApples()

        if (hasLost){
            $lostMessage.style.display = 'block'
        }
    }

    function resumeGame() {
        cleanupSnake()
        initSnake(3)
        hasLost = false
        direction = null
        $lostMessage.style.display = 'none'
    }

    function checkBorderCollisions() {
        if (snake[0].y >= cy) {
            hasLost = true
        }
        if (snake[0].y <= 1) {
            hasLost = true
        }
        if (snake[0].x <= 1) {
            hasLost = true
        }
        if (snake[0].x >= cx) {
            hasLost = true
        }
    }

    function checkBodyCollisions() {
        var i

        for (i = 1; i < snake.length - 1; i++) {
            if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
                hasLost = true
            }
        }
    }

    function checkApples() {
        var i, apple

        for(i=0; i < apples.length;i++){
            apple = apples[i]
            if (snake[0].x == apple.x && snake[0].y == apple.y) {
                apple.$el.remove()
                apples.splice(i, 1)
                doGrow = true
            }
        }

        if (doGrow) {
            placeApple()
            counter++

            $counter.innerHTML = 'Apples eaten: ' + counter
        }
    }

    function placeApple(){
        var $apple
        var x, y

        $apple = document.createElement('div')
        $apple.className = 'apple'

        $canvas.appendChild($apple)

        x = lodash.random(2, 29)
        y = lodash.random(2, 29)

        placeElement($apple, x, y)
        apples.push({
            x: x,
            y: y,
            $el: $apple
        })
    }

    function placeElement($el, x, y) {
        $el.style.top = (y - 1)  * 20 + 'px'
        $el.style.left = (x - 1)  * 20 + 'px'
    }
}
