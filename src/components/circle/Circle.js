import React, {useEffect, useRef, useState} from 'react'
import {useSelector} from "react-redux"
import { SVG } from '@svgdotjs/svg.js'
import {useLocation} from "react-router-dom"

import {
    getEventIdBySlug,
    getEventSlug,
    isEventPageFunc, isMainPageFunc
} from "../../utils/urlHelper"
import {clearPage, fillPageByColor} from "./js/resources"

import s from './css/Circle.module.scss'


let canvas, // Ссылка на холст
    circle, // Круг на холсте
    isFirstRender = true, // Это первая отрисовка страницы?
    rightEventId


export default function Circle() {
    let location = useLocation()

    // Получу массив всех событий и ID текущего события.
    const {events} = useSelector(store => store)
    const {currentEventId, animationDuration} = useSelector(store => store.eventsInfo)

    const containerRef = useRef(null)


    useEffect(() => {
        // Создам SVG
        canvas = SVG().addTo('#circle-container').size('100%', '100%')
        circle = canvas.circle(100).opacity(0)

        // Получу слизня события из адресной строки
        const eventSlug = getEventSlug(location)

        // Если слизень события есть, то получу id этого события
        if(eventSlug) rightEventId = getEventIdBySlug(events, eventSlug)

        // Нахожусь на странице с подробным описанием события?
        const isEventPage = isEventPageFunc(location)

        if(isEventPage && eventSlug) fillPageByColor(events, rightEventId, circle, false)
    }, [])


    useEffect(() => {
        // Если это первая отрисовка страницы, то ничего не делать
        if(isFirstRender) {
            isFirstRender = false
            return
        }

        // Получить id показываемого события...
        if(!currentEventId) {
            // Получу слизня события из адресной строки
            const eventSlug = getEventSlug(location)

            // Если слизень события есть, то получу id этого события
            if(eventSlug) rightEventId = getEventIdBySlug(events, eventSlug)
        } else {
            // В противном случае у rightEventId будет значение currentEventId
            rightEventId = currentEventId
        }

        // Нахожусь на странице с подробным описанием события?
        const isEventPage = isEventPageFunc(location)

        // Если это страница события и есть rightEventId, то увеличить круг и залить страницу цветом
        if(isEventPage && rightEventId) fillPageByColor(events, rightEventId, circle, true)

        // Если это главная страница, то анимированно убрать круг
        else if(isMainPageFunc(location)) clearPage(circle, true)
        // В противном случае резко убрать круг
        else clearPage(circle, false)

    }, [location])


    return <div id='circle-container' className={s.container} ref={containerRef} />
}