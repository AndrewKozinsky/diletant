import {changeEventId} from "../../../../../../store/actions"


let queue = [],
    lastDirection

/**
 *
 * @param {Array} eventsArr — массив объект с данными каждого события
 * @param {Number} duration — продолжительность анимации перелистывания события
 * @param {Number} id — id предположительно следующего события
 * @param {String} direction — направление листания слайдера (left или right)
 * @param {Function} dispatch
 */
export default function setNextEventId(eventsArr, duration, id, direction, dispatch) {

    // Если массив пуст, то применить особые правила
    if(!queue.length) {
        // Обновить id события в Хранилище
        dispatch(changeEventId(id))

        // Поставить пустой объект в массив queue
        queue.push({ id })

        // Поменять направление анимации
        lastDirection = direction

        // Как только анимация перемещения пройдёт,
        // то проверить наличие заказов на последующие анимации
        setTimeout(runNextEvent, duration)

        return
    }


    // Если поменяли направление листания слайдера, то удалить все анимации кроме первой
    if(direction !== lastDirection) {
        lastDirection = direction
        queue = queue.slice(0, 1)
    }

    // Выясню какой id является последним в очереди
    const nextId = getNextId(eventsArr, direction)

    // Если следующий объект не найден, то завершить функцию
    if(!nextId) return

    queue.push({
        id: nextId,
        setNewEventId() {
            // Обновить id события в Хранилище
            dispatch(changeEventId(nextId))
        },
        timer() {
            return setTimeout(() => {
                runNextEvent()
            }, duration)
        }
    })
}

/**
 * Функция возвращает следующий id показываемого события
 * исходя из последнего id в массиве queue
 * @param {Array} eventsArr — массив объект с данными каждого события
 * @param {String} direction — направление листания слайдера (left или right)
 * @return {*}
 */
function getNextId(eventsArr, direction) {

    // Получу id последнего объекта в массиве queue
    const lastObj = queue[queue.length - 1]

    const lastId = lastObj.id

    // Получу idx объекта в массиве eventsArr
    const idx = eventsArr.findIndex(event => event.id === lastId)
    const nextIdx = direction === 'left' ? idx - 1 : idx + 1

    if(!eventsArr[nextIdx]) return null

    return eventsArr[nextIdx].id
}

/**
 * Функция запускает анимацию следующего события
 */
function runNextEvent() {
    // Удалить первый элемент массива очереди анимаций
    queue.shift()

    // Если есть первый элемент...
    if(queue[0]) {
        queue[0].setNewEventId() // то обновить id события в Хранилище
        queue[0].timer() // как анимация перемещения завершить снова проверить очередь анимаций
    }
}
