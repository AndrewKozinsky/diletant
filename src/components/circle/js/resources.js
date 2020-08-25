import {getBgColor} from "../../../pages/event-pages/components/event-banner/hero/js/resources"


export function fillPageByColor(events, currentEventId, circle, withAnimation) {

    // Получу данные о событии
    const eventObj = events.find(event => event.id === currentEventId)

    // Цвет события
    const bgColor = getBgColor(eventObj.bgColor)

    // Получить центр круга
    const [circleXCenter, circleYCenter] = getHeroCenterCoords()

    // Передвинуть круг на стартовую позицию, залить цветом персонажа и увеличить непрозрачность
    circle
        .move(circleXCenter, circleYCenter)
        .fill(bgColor)
        .opacity(1)

    // Получить ширину круга
    const circleWidth = Math.max(window.innerWidth, window.innerHeight) * 2

    if(withAnimation) {
        // Анимированно задать кругу ширину чтобы он покрыл всю страницу
        circle.animate(500).size(circleWidth, circleWidth)
    } else {
        // Задать кругу ширину чтобы он покрыл всю страницу
        circle.size(circleWidth, circleWidth)
    }

    const setTimeoutDuration = withAnimation ? 500 : 0

    // Как только анимация завершилась
    setTimeout(function () {
        // Залью цветом фон страницы
        document.querySelector('#root').style.backgroundColor = bgColor
    }, setTimeoutDuration)
}


function getHeroCenterCoords() {
    // Контейнер с героем
    const heroEl = document.querySelector('#hero-container')

    const heroElCoords = heroEl.getBoundingClientRect()

    return [
        Math.round(heroElCoords.x + heroElCoords.width / 2),
        Math.round(heroElCoords.y + heroElCoords.height / 2)
    ]
}


export function clearPage(circle, withAnimation) {
    // Получить ширину круга
    const circleWidth = Math.max(window.innerWidth, window.innerHeight) * 2

    // Задать кругу ширину чтобы он покрыл всю страницу
    circle.size(circleWidth, circleWidth)

    // Убрать цвет фона страницы
    document.querySelector('#root').style.backgroundColor = ''

    // Уменьшить круг до изначального размера и сделать непрозрачным
    if(withAnimation) {
        circle.animate(600).size(100, 100)
        setTimeout(() => circle.opacity(0), 600)
    }
    else {
        circle.animate(600).size(100, 100)
        circle.opacity(0)
    }
}