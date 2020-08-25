

export function changeEventId(state, action) {

    // Скопировать объект Хранилища.
    const copyState = {...state}

    // Скопировать данные по событиям
    const eventsInfoCopy = {...copyState.eventsInfo}

    // Поменять id текущего события
    eventsInfoCopy.currentEventId = action.id

    // Запихнуть данные по событиям в состояние
    copyState.eventsInfo = eventsInfoCopy

    // Возвратить обновлённый объект Хранилища.
    return copyState
}

export function changeCurrentScheduleMonth(state, action) {

    // Скопировать объект Хранилища.
    const copyState = {...state}

    // Скопировать ОБЪЕКТ scheduleInfo
    const scheduleInfoCopy = {...copyState.scheduleInfo}

    // Поменять idx текущего месяца
    scheduleInfoCopy.currentScheduleMonth = action.monthIndex

    // Запихнуть данные по событиям в состояние
    copyState.scheduleInfo = scheduleInfoCopy

    // Возвратить обновлённый объект Хранилища.
    return copyState
}

export function changeCurrentScheduleCity(state, action) {
    // Скопировать объект Хранилища.
    const copyState = {...state}

    // Скопировать ОБЪЕКТ scheduleInfo
    const scheduleInfoCopy = {...copyState.scheduleInfo}

    // Поставить новый город
    scheduleInfoCopy.currentScheduleCity = action.city

    // Запихнуть данные по событиям в состояние
    copyState.scheduleInfo = scheduleInfoCopy

    // Возвратить обновлённый объект Хранилища.
    return copyState
}