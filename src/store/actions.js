export function changeEventId(id) {
    return {
        type: 'CHANGE_EVENT_ID',
        id
    }
}

export function changeCurrentScheduleMonth(monthIndex) {
    return {
        type: 'CHANGE_CURRENT_SCHEDULE_MONTH',
        monthIndex
    }
}

export function changeCurrentScheduleCity(city) {
    return {
        type: 'CHANGE_CURRENT_SCHEDULE_CITY',
        city
    }
}