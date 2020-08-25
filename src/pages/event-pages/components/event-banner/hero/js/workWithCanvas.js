import {SVG} from "@svgdotjs/svg.js"
import {getBgColor, getPath} from "./resources"


export function createCanvas(eventObj, isEventPage) {
    // Создам SVG
    let canvas = SVG().addTo('#hero-container').size('100%', '100%')

    // Создам область просмотра
    canvas.viewbox(0, 0, 770, 750)

    // Создам путь
    let path = getPath()

    // Создам яйцо, залью его цветом и отрисую на холсте
    let eggPath = canvas.path(path)
    eggPath.fill(getBgColor(eventObj.bgColor))
    // eggPath.transform({origin: 'center center'})


    // Если нахожусь на странице события, то увеличу яйцо в два раза
    if(isEventPage) eggPath.scale(2)

    return {
        canvas,
        path,
        eggPath
    }
}

export function createImage(eventObj, isEventPage, canvas, path) {

    // Создать и нарисовать на холсте изображение
    let image = canvas.image(eventObj.coverImage)

    // Поместить изображение в обтравочную маску
    let imagePath = canvas.path(path)
    // imagePath.transform({origin: 'center center'})

    // Если нахожусь на странице события, то увеличу путь в два раза
    if(isEventPage) imagePath.scale(2)

    // Сделаю маску из пути
    image.clipWith(imagePath)

    // Нарисовать верхнее изображение
    let topImage = canvas.image(eventObj.coverImage)

    // Поместить верхнее изображение в прямоугольную обтравочную маску
    let topRect = canvas.rect(730, 360)
    topImage.clipWith(topRect)


    return {
        imagePath,
        image,
        topImage
    }
}


// Если в последний раз новую картинку загружали в первое изображение, то теперь загрузить во второе.
export function loadNewImage(lastUsedImg, firstHeroImg, firstTopHeroImg, secondHeroImg, secondTopHeroImg, newEvent) {
    if(lastUsedImg === 1) {
        secondHeroImg.load(newEvent.coverImage)
        secondTopHeroImg.load(newEvent.coverImage)
    }
    // В противном случае новую картинку загрузить в первое изображение
    else {
        firstHeroImg.load(newEvent.coverImage)
        firstTopHeroImg.load(newEvent.coverImage)
    }
}


export function setImagesToStartPosition(direction, lastUsedImg, firstHeroImg, firstTopHeroImg, secondHeroImg, secondTopHeroImg, moveDist) {

    if( direction === 'left' ) setStartPos(moveDist)
    else setStartPos(-moveDist)

    function setStartPos(dist) {
        if( lastUsedImg === 1 ) {
            secondHeroImg.move( dist, 0 )
            secondTopHeroImg.move( dist, 0 )
        }
        else {
            firstHeroImg.move( dist, 0 )
            firstTopHeroImg.move( dist, 0 )
        }
    }
}


export function setImagesToEndPosition(direction, lastUsedImg, firstImg, firstTopImg, secondImg, secondTopImg, duration, moveDist) {

    if(direction === 'left') {
        if(lastUsedImg === 1) {
            setProps(firstImg, -moveDist, 0)
            setProps(firstTopImg, -moveDist, 0)
            setProps(secondImg, 0, 1)
            setProps(secondTopImg, 0, 1)
        }
        else {
            setProps(secondImg, -moveDist, 0)
            setProps(secondTopImg, -moveDist, 0)
            setProps(firstImg, 0, 1)
            setProps(firstTopImg, 0, 1)
        }
    }
    else {
        if(lastUsedImg === 1) {
            setProps(firstImg, moveDist, 0)
            setProps(firstTopImg, moveDist, 0)
            setProps(secondImg, 0, 1)
            setProps(secondTopImg, 0, 1)
        }
        else {
            setProps(secondImg, moveDist, 0)
            setProps(secondTopImg, moveDist, 0)
            setProps(firstImg, 0, 1)
            setProps(firstTopImg, 0, 1)
        }
    }

    function setProps(image, dist, opacity) {
        image
            .animate(duration)
            .move(dist, 0)
            .opacity(opacity)
    }
}


// method: reduce или grow
export function scalePathes(method, eggPath, firstPath, secondPath, duration) {
    const scaleVal = method === 'reduce' ? 1 : 2

    eggPath.animate(duration).transform({origin: 'center center', scale: scaleVal})
    firstPath.animate(duration).transform({origin: 'center center', scale: scaleVal})
    secondPath.animate(duration).transform({origin: 'center center', scale: scaleVal})

    // Думаю этот код можно удалить потому что тут появляются ошибки при масштабировании
    // eggPath.animate(duration).scale(scaleVal)
    // firstPath.animate(duration).scale(scaleVal)
    // secondPath.animate(duration).scale(scaleVal)
}