const readline = require('readline-sync')
const lodash = require('lodash')
const setCharAt = require('./lib').setCharAt
const fs = require('fs')

main()

function main() {
    var i
    var length
    var arr
    var min,max

    length = readline.question('enter array length:\n')

    arr = []
    for(i=0; i<length; i++){
     arr[i]=lodash.random(100)
    }
    console.log(arr)

    min = arr[0]
    max = arr[0]
    for (i=1; i < length;  i++){
        if (arr[i] < min){
            min = arr[i]
        }
        if (arr[i]>max){
            max = arr[i]
        }
    }
    console.log(min, max)
}
