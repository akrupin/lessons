const readline = require('readline-sync')
const lodash = require('lodash')
const fs = require('fs')

main()

function main() {
    var i
    var flag
    var str
    var l

    str = readline.question('enter a string: ')
    l = str.length
    flag = true
    for (i=0; (i<l/2) && (flag = true);i++){
        if (str[i]!=str[l-i-1]){
            flag = false
        }
    }

    if (flag == true) {
        console.log('palindrome')
    } else {
        console.log('not a palindrome')
    }
}

