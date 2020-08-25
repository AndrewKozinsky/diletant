

export function getEventsMonths(eventsArr) {

    let monthsObjSet = new Set()

    eventsArr.forEach(event => {
        monthsObjSet.add(
            getMonthAndIndexFromDateStr(event.date)
        )
    })

    const monthsObjArr = Array.from(monthsObjSet)

    return monthsObjArr.map(monthsObj => {
        const monthDetails = monthsObj.split('|')

        return {
            index: parseInt(monthDetails[0]),
            name: monthDetails[1]
        }
    })
}

function getMonthAndIndexFromDateStr(dateStr) {
    const dateParts = dateStr.split('.')
    const monthIdx = parseInt(dateParts[1]) - 1

    const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return [monthIdx] + '|' + monthsNames[monthIdx]
}