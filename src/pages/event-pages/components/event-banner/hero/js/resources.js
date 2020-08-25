const imgAddressBegin = 'http://andrewkozinsky.ru/samples/dil/data-provider/img/'
const img1 = imgAddressBegin + 'makarevich.png'
const img2 = imgAddressBegin + 'pelageya.png'
const img3 = imgAddressBegin + 'grape.png'
const img4 = imgAddressBegin + 'pavel.png'
const img5 = imgAddressBegin + 'horseman.png'


let lastRandomInt

// Функция создаёт случайный путь
export function getPath() {
    let arr = [
        'M506.258416,212.459993 C328.09462,125.448158 178.95298,204.403342 77.7785169,341.366415 C-23.3959467,478.329489 -2.43550009,567.758319 226.920156,662.423973 C456.275813,757.089627 648.547602,752.255636 725.940021,550.033686 C803.332439,347.811737 684.422213,299.471828 506.258416,212.459993 Z',
        'M547,183 C421,116 193,175.5 110.5,341.5 C28,507.5 106,644.5 238.5,710.5 C371,776.5 641.107582,749.72195 718.5,547.5 C795.892418,345.27805 673,250 547,183 Z',
        'M521.5,186.5 C343.336204,99.488165 163.557034,182.232831 77.7785169,346.366415 C-8,510.5 19.5,620.5 231.5,707 C443.5,793.5 631,736.5 676,539 C721,341.5 699.663796,273.511835 521.5,186.5 Z',
        'M494.5,176.5 C307.741584,168.540007 187.5,198 114.5,358.5 C41.5,519 34,712 288.5,726.5 C543,741 643.607582,722.72195 721,520.5 C798.392418,318.27805 681.258416,184.459993 494.5,176.5 Z'
    ]
    /*let arr = [
        'M501.5,185.5 C323.336204,98.488165 143.557034,181.232831 57.7785169,345.366415 C-28,509.5 -0.5,619.5 211.5,706 C423.5,792.5 611,735.5 656,538 C701,340.5 679.663796,272.511835 501.5,185.5 Z',
        'M527,182 C401,115 173,174.5 90.5,340.5 C8,506.5 86,643.5 218.5,709.5 C351,775.5 621.107582,748.72195 698.5,546.5 C775.892418,344.27805 653,249 527,182 Z',
        'M474.5,175.5 C287.741584,167.540007 167.5,197 94.5,357.5 C21.5,518 14,711 268.5,725.5 C523,740 623.607582,721.72195 701,519.5 C778.392418,317.27805 661.258416,183.459993 474.5,175.5 Z',
        'M486.258416,211.459993 C308.09462,124.448158 158.95298,203.403342 57.7785169,340.366415 C-43.3959467,477.329489 -22.4355001,566.758319 206.920156,661.423973 C436.275813,756.089627 628.547602,751.255636 705.940021,549.033686 C783.332439,346.811737 664.422213,298.471828 486.258416,211.459993 Z'
    ]*/

    let randInt = randomInt(0, 3)

    do {
        if(lastRandomInt === randInt) {
            randInt = randomInt(0, 3)
        } else {
            lastRandomInt = randInt
            break
        }
    } while(true)

    return arr[randInt]
}

// Функция возвращает случайное число в заданном диапазоне
export function randomInt(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand)
}


export function getBgColor(colorStr) {
    if(!colorStr || colorStr === '') return 'rgb(240, 230, 200)'

    const arr = colorStr.split(' ')
    let str = arr.join(', ')

    return `rgb(${str})`
}

export function changeAnimate(eggPath, firstHeroPath, secondHeroPath) {
    const newPath = getPath()

    eggPath.animate(1000).plot(newPath)
    firstHeroPath.animate(1000).plot(newPath)
    secondHeroPath.animate(1000).plot(newPath)
}

export function preloadPrevAndNextEventImage(events, eventId) {

    // Получу idx текущего события в массиве всех событий
    const eventIdx = events.findIndex(event => event.id === eventId)

    let prevEventObj = {coverImage: ''},
        nextEventObj = {coverImage: ''}

    if(eventIdx !== 0) {
        prevEventObj = events[eventIdx - 1]
    }
    if(eventIdx < events.length - 1) {
        nextEventObj = events[eventIdx + 1]
    }

    const prevImage = document.createElement('img')
    prevImage.src = prevEventObj.coverImage

    const nextImage = document.createElement('img')
    nextImage.src = nextEventObj.coverImage
}