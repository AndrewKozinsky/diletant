// Обработчик щелчка по кнопке
import {changeCurrentScheduleMonth} from "../../../../../../../store/actions"

export function onBtnClick(direction, eventsMonths, currentScheduleMonth, dispatch) {
    const currentMonthIdx = eventsMonths.findIndex(monthObj => {
        return monthObj.index === currentScheduleMonth
    })

    const nextMonthObj =
        direction === 'prev'
            ? eventsMonths[currentMonthIdx - 1]
            : eventsMonths[currentMonthIdx + 1]

    if(nextMonthObj) {
        dispatch(
            changeCurrentScheduleMonth(nextMonthObj.index)
        )
    }
}


export function fixMonthVisibility(currentMonthIdx) {

    // Получу внешнюю обёртку видимой части компонента и обёртку кнопок с месяцами
    const generalEl = document.getElementById('monthsComponentWrapper')
    const btnsInner = document.getElementById('monthsBtnsWrapper')

    // 1) Если есть пространство справа, то узнать на сколько нужно изменить левый оступ, чтобы закрыть дыру
    let leftFixVal = getOffsetToCloseRightGap(btnsInner, generalEl, btnsInner)

    // Получу новое значение левого отступа
    let newLeftValue = parseInt(btnsInner.style.left) + leftFixVal

    // Получу координаты обёртки компонента
    let generalElMetrics = generalEl.getBoundingClientRect()
    // {x: 0, y: 141, width: 496, height: 86, top: 141, bottom: 227, left: 0, right: 496}

    generalElMetrics = {
        x: generalElMetrics.x,
        width: generalElMetrics.width,
        left: generalElMetrics.left,
        right: generalElMetrics.right
    }

    // Получу выделенную кнопку
    const button = btnsInner.querySelectorAll('button')[currentMonthIdx]

    // Получу координаты кнопки
    let buttonMetrics = button.getBoundingClientRect()

    buttonMetrics = {
        x: buttonMetrics.x + leftFixVal,
        width: buttonMetrics.width,
        left: buttonMetrics.left + leftFixVal,
        right: buttonMetrics.right + leftFixVal
    }


    // Если кусочек кнопки не виден с левой стороны
    if(generalElMetrics.x > buttonMetrics.x) {
        newLeftValue = moveBtnLefter(generalElMetrics, buttonMetrics, btnsInner, newLeftValue)
    }
    // Если кусочек кнопки не виден с правой стороны
    else if(generalElMetrics.right < buttonMetrics.right) {
        newLeftValue = moveBtnRighter(generalElMetrics, buttonMetrics, btnsInner, newLeftValue)
    }

    // Поставлю новое значение левого оступа
    btnsInner.style.left = newLeftValue + 'px'
}

// Функция передвигает кнопку у которой не виден левый край
function moveBtnLefter(outerElMetrics, buttonMetrics, btnsInner, newLeftValue) {
    // Узнать на сколько она отстаёт от левого края
    let leftOffset = outerElMetrics.x - buttonMetrics.x

    return newLeftValue + leftOffset
}

// Функция передвигает кнопку у которой не виден правый край
function moveBtnRighter(outerElMetrics, buttonMetrics, btnsInner, newLeftValue) {
    // Узнать на сколько кнопка заходит за правый край
    let rightOffset = outerElMetrics.right - buttonMetrics.right

    // Задам новое значение свойства left обёртке кнопок
    return newLeftValue + rightOffset
}


// Если справа есть незанятое пространство между внешней обёткой и обёрткой кнопок,
// то функция узнаёт на сколько нужно изменить левый отступ чтобы максимально закрыть это пространство.
function getOffsetToCloseRightGap(btnsWrapper, generalEl, btnsInner) {

    // Получу метрики внешней обёртки и обёртки кнопок
    const generalElMetrics = generalEl.getBoundingClientRect()
    const btnsWrapperMetrics = btnsWrapper.getBoundingClientRect()
    // {x: 0, y: 141, width: 496, height: 86, top: 141, bottom: 227, left: 0, right: 496}

    // Узнаю доходит ли обёртка кнопок до правого края внешней обёртки
    const gapWidth = generalElMetrics.right - btnsWrapperMetrics.right

    // Если обёртка кнопок доходит до правого края внешней обёртки, то вернуть ноль потому что дыры справа нет.
    if(gapWidth <= 0) return 0

    let leftDist = parseInt(btnsInner.style.left)

    return (gapWidth > leftDist)
        ? -leftDist || 0
        : gapWidth
}