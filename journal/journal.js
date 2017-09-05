const lodash = require ('lodash')
const fs = require('fs')

main()

function main() {
    var i, j
    var grade
    var input
    var inputLines
    var pupil
    var gradesTemp
    var journal
    var sum
    var count

    input = fs.readFileSync('input.txt', { encoding: 'utf-8' })
    inputLines = input.split('\n')
    journal = []

    for (i=0; i < inputLines.length; i += 2) {
        pupil = {}
        pupil.name = inputLines[i]
        pupil.grades = []

        gradesTemp = inputLines[i+1]
        gradesTemp = gradesTemp.split(' ')
        for (j=0; j < gradesTemp.length; j++) {
            grade = parseInt(gradesTemp[j])
            pupil.grades.push(grade)
        }

        journal.push(pupil)
    }

    console.log(journal)

    for (i = 0; i < journal.length; i++){
        pupil = journal[i]

        sum = 0
        count = pupil.grades.length
        for (j = 0; j < pupil.grades.length; j++) {
            sum += pupil.grades[j]
        }

        pupil.avgGrade = sum/count
    }

    console.log(journal)



}
