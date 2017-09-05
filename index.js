const readline = require('readline-sync')
const lodash = require('lodash')
const setCharAt = require('./lib').setCharAt
const fs = require('fs')

main()

function main() {

    //var str = '1,2,3'
    //var arr = str.split(',')
    //
    //console.log('ab\ncd')

    //console.log(arr)

    var file1, file2
    var lines1, lines2
    var minLength
    var result
    var i

    file1 = fs.readFileSync('./input.txt-1.txt', { encoding: 'utf-8' })
    lines1 = file1.split('\n')

    file2 = fs.readFileSync('./input.txt-2.txt', { encoding: 'utf-8' })
    lines2 = file2.split('\n')

    if (lines1.length < lines2.length) {
        minLength = lines1.length
    } else {
        minLength = lines2.length
    }

    result = ''
    for (i = 0; i < minLength; i++){
        result = result + lines1[i] + ' ' +lines2[i] +'\n'
    }

    console.log(result)
}

function wrap (str, w, f) {
    var wrapper
    var i

    wrapper = ''
    for (i = 0; i < f; i++){
        wrapper = wrapper + w

    }
    return wrapper + str + wrapper
}


function switchElements(arr, i, j) {
    var t

    t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}