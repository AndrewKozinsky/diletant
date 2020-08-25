
// Функция возвращает слизня названия события
export function getEventSlug(location) {
    const patchesArr = location.pathname.split('/')

    return patchesArr[2] || null
}

// Функция возвращает id события по переданному слизню события
export function getEventIdBySlug(events, eventSlug) {
    const event = events.find(event => event.slug === eventSlug)

    return event ? event.id : null
}

// Функция возвращает является ли страница страницей события
export function isEventPageFunc(location) {
    const pathNameArr = location.pathname.split('/')

    return !!(pathNameArr[1] === 'events' && pathNameArr[2])
}

// Функция возвращает является ли переданная страница главной страницей
export function isMainPageFunc(location) {
    return location.pathname === '/'
}