const readline = require('readline-sync')
const lodash = require('lodash')
const fs = require('fs')

main()

function main() {
    var i, j, t
    var pupil
    var journal = []
    var gradesInput
    var gSum, gCount

    var count = 3

    for (i=0; i < count; i++) {
        console.log('Registering ' + (i+1) + ' pupil')
        pupil = {}

        //pupil.name = readline.question('Enter name: ')
        pupil.name = lodash.random(15)

        //gradesInput = readline.question(('Enter grades: '))  // '1 2 5'
        t = lodash.random(10)

        pupil.grades = []
        for (j = 0; j < t; j++) {
            pupil.grades.push(1+lodash.random(4))
        }

        journal.push(pupil)
        console.log(count)
    }

    console.log(journal)

    gSum = 0
    gCount = 0
    for (i=0; i < journal.length; i++) {
        pupil = journal[i]
        gCount += pupil.grades.length

        for (j=0; j < pupil.grades.length; j++) {
            gSum += parseInt(pupil.grades[j])
        }
    }

    console.log('Average grade: ' + (gSum/gCount))






}

