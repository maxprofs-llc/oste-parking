import moment from 'moment'

export const spots = []

for(let i=1; i <= 3; i++){
    spots.push({
        number: i,
        owner: 'Besitzer' + i,
        freeOn: [moment(300)],
        taken: [{
            takenOn: moment(400),
            takenBy:'Egal'
        }]
    })
}

export const filters = {
    actualDate: moment(2000),
    freeDates: [moment(3000), moment(4000)],
    takenDates: [moment(300), moment(400)]
}