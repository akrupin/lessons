const readline = require('readline-sync')
const lodash = require('lodash')
const fs = require('fs')

main()


// sort an array
function main() {
    var i, j
    var arr
    var length
    var f

    length = readline.question('enter length arr ')
   // length = 4
    arr = []
    for (i=0;i<length;i++){
        arr[i] = lodash.random(100)
    }
    console.log(arr)

    // уменьшая последний отсортированный элемент от length до 1
        // проходя по элементам массива от 0го до последнего отсортирвоанного
            // сравниваем iый элемент с i+1ыми и если нужно меняем местами

    for (j = length; j > 0; j--) {
        for(i = 0;i < j  ;i++) {
            if (arr[i]>arr[i+1]) {
               //arr[i+1]=arr[i]
                f= arr[i+1]
                arr[i+1]=arr[i]
                arr[i]=f
            }
        }
    }

    console.log(arr)

}
