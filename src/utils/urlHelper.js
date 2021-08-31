
// Функция возвращает слизня названия события
export function getEventSlug(location) {
    const patchesArr = location.pathname.split('/')

    const eventsDirIdx = patchesArr.findIndex(dir => dir === 'events')
    if(eventsDirIdx < 0) return null

    return patchesArr[eventsDirIdx + 1] || null
}

// Функция возвращает id события по переданному слизню события
export function getEventIdBySlug(events, eventSlug) {
    const event = events.find(event => event.slug === eventSlug)

    return event ? event.id : null
}

// Функция возвращает является ли страница страницей события
export function isEventPageFunc(location) {
    const pathNameArr = location.pathname.split('/')

    const eventsDirIdx = pathNameArr.findIndex(dir => dir === 'events')
    if(eventsDirIdx < 0) return false

    return !!(pathNameArr[eventsDirIdx + 1])
}

// Функция возвращает является ли переданная страница главной страницей
export function isMainPageFunc(location) {
    return location.pathname === '/'
}