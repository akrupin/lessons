document.addEventListener('DOMContentLoaded', main)

function main() {
    var headSnake
    var direction
    var x, y
    var cx, cy
    var flag

    headSnake = document.getElementById('snake-head')
    x = 100
    y = 100
    cx = 400
    cy = 400
    flag = false
    document.addEventListener('keydown', handleKeyPress)

    setInterval(move,50)

    function handleKeyPress(event) {
        if (event.keyCode >= 37 && event.keyCode <= 40) {
            direction = event.key
        }

        if (event.key == 'Enter') {
            resumeGame()
        }
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

        headSnake.style.top = y + 'px'
        headSnake.style.left = x + 'px'
    }

    function resumeGame() {
        x = 200
        y = 200
        headSnake.style.left = x + 'px'
        headSnake.style.top = y + 'px'

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


}
