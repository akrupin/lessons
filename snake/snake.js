const lodash = _

document.addEventListener('DOMContentLoaded', main)

function main() {
    var $canvas, $headSnake
    var direction
    var x, y
    var cx, cy
    var flag
    var apples

    apples = []
    $canvas = document.getElementById('canvas')
    $headSnake = document.getElementById('snake-head')
    x = 100
    y = 100
    cx = 400
    cy = 400
    flag = false
    document.addEventListener('keydown', handleKeyPress)

    setInterval(move, 100)

    function handleKeyPress(event) {
        if (event.keyCode >= 37 && event.keyCode <= 40) {
            direction = event.key
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
        //console.log(event.key)
    }

    function move() {
        if (flag == true) {
            return
        }

        switch (direction){
            case 'ArrowUp':
                y -= 20
                break
            case 'ArrowDown':
                y += 20
                break
            case 'ArrowLeft':
                x -= 20
                break
            case 'ArrowRight':
                x += 20
                break
        }

        checkCollisions()
        checkApples()

        $headSnake.style.top = y + 'px'
        $headSnake.style.left = x + 'px'
    }

    function resumeGame() {
        x = 200
        y = 200
        $headSnake.style.left = x + 'px'
        $headSnake.style.top = y + 'px'

        flag = false
        direction = ''
    }

    function checkCollisions() {
        if (y+20 >= cy) {
            flag = true
        }
        if (y <= 0) {
            flag = true
        }
        if (x <= 0) {
            flag = true
        }
        if (20+x >= cx) {
            flag = true
        }
    }

    function checkApples() {
        var i, apple
        var flag = false

        for(i=0; i < apples.length;i++){
            apple = apples[i]
            if (x == apple.x && y == apple.y) {
                apple.$el.remove()
                apples.splice(i, 1)
                flag = true
            }
        }

        if (flag) {
            placeApple()
        }

    }

    function placeApple(){
        var $apple
        var x, y

        $apple = document.createElement('div')
        $apple.className = 'apple'

        $canvas.appendChild($apple)

        x = lodash.random(1, 18) * 20
        y = lodash.random(1, 18) * 20
        $apple.style.top = y + 'px'
        $apple.style.left = x + 'px'
        apples.push({
            x: x,
            y: y,
            $el: $apple
        })
    }


}
