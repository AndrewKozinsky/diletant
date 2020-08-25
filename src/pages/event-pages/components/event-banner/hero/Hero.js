import React, {useEffect, useRef, useState} from 'react'
import {useSelector} from "react-redux"
import {useLocation} from "react-router-dom"
import { SVG } from '@svgdotjs/svg.js'

import {changeAnimate, getBgColor, getPath, preloadPrevAndNextEventImage} from "./js/resources"
import {
    createCanvas,
    createImage,
    loadNewImage,
    scalePathes,
    setImagesToEndPosition,
    setImagesToStartPosition
} from "./js/workWithCanvas"
import {getEventIdBySlug, getEventSlug, isEventPageFunc} from "../../../../../utils/urlHelper"
import s from './css/Hero.module.scss'


let canvas,              // Холст на котором рисуется SVG
    path,
    eggPath,

    firstHeroPath,
    firstHeroImg,        // Первое изображение
    firstTopHeroImg,     // Верхняя часть первого изображения

    secondHeroPath,
    secondHeroImg,       // Второе изображение
    secondTopHeroImg,    // Верхняя часть второго изображения
    isFirstRender = true,         // Была ли уже первая отрисовка изображений

    pathesAreScaled = false,    // Масштабированы ли пути
    
    lastUsedImg = 1,     // Последнее использованное изображение для загрузки нового персонажа (1 или 2)
    lastEventId = 1,     // Последний id события, который был отрисован. Это нужно для определения направления.

    rightEventId,        // id страницы события полученный из адресной строки во время первой отрисовки страницы
    intervalId



export default function Hero() {
    let location = useLocation()

    // Получу массив всех событий, ID текущего события и продолжительность анимации.
    const {events} = useSelector(store => store)
    const {currentEventId, animationDuration} = useSelector(store => store.eventsInfo)

    const containerRef = useRef(null)


    useEffect(() => {

        if(!currentEventId) {
            // Получу слизня события из адресной строки
            const eventSlug = getEventSlug(location)

            // Если слизень события есть, то получу id этого события
            if(eventSlug) rightEventId = getEventIdBySlug(events, eventSlug)
            // В противном случае поставлю id первого события
            else rightEventId = events[0].id
        } else {
            rightEventId = currentEventId
        }

        // Нахожусь на странице события?
        const isEventPage = isEventPageFunc(location)
        
        // Если нахожусь на странице события, то пути будут масштабированы.
        // Поэтому сразу поставлю соответствующий флаг.
        if(isEventPage) pathesAreScaled = true

        // Получу данные о событии
        const eventObj = events.find(event => event.id === rightEventId)

        // Создать холст и путь яйца
        const canvasDetails = createCanvas(eventObj, isEventPage)
        canvas = canvasDetails.canvas
        path = canvasDetails.path
        eggPath = canvasDetails.eggPath

        // Создать первое изображение
        const firstImageDetails = createImage(eventObj, isEventPage, canvas, path)
        firstHeroPath = firstImageDetails.imagePath
        firstHeroImg = firstImageDetails.image
        firstTopHeroImg = firstImageDetails.topImage

        // Создать второе изображение
        const secondImageDetails = createImage(eventObj, isEventPage, canvas, path)
        secondHeroPath = secondImageDetails.imagePath
        secondHeroImg = secondImageDetails.image
        secondTopHeroImg = secondImageDetails.topImage

        // Добавить второму изображению прозрачность
        secondHeroImg.opacity(0)
        secondTopHeroImg.opacity(0)

        // Анимировать пути
        changeAnimate(eggPath, firstHeroPath, secondHeroPath)
        intervalId = setInterval(() => {
            changeAnimate(eggPath, firstHeroPath, secondHeroPath)
        }, 1100)

        // Предзагрузить предыдущую и следующую картинку события
        preloadPrevAndNextEventImage(events, rightEventId)
    }, [])

    useEffect(() => {
        return () => {
            clearInterval(intervalId)
            isFirstRender = true
        }
    }, [])


    useEffect(() => {

        // Если это первая отрисовка, то завершить функцию
        if(isFirstRender) {
            isFirstRender = false
            return;
        }
        else {
            rightEventId = currentEventId
        }

        if(!rightEventId) rightEventId = events[0].id


        // Определю направление движения слайдера
        const direction = (lastEventId <= rightEventId) ? 'left' : 'right'

        // Поставлю id нового события как текущий id
        lastEventId = rightEventId

        // Получу данные о новом событии
        const newEvent = events.find(event => event.id === rightEventId)

        // Залью яйцо цветом фона события
        eggPath.animate(animationDuration).attr({ fill: getBgColor(newEvent.bgColor) })

        // Поставить новый адрес картинки в изображение, которое должно подъехать на место старого
        loadNewImage(lastUsedImg, firstHeroImg, firstTopHeroImg, secondHeroImg, secondTopHeroImg, newEvent)

        // Дистанция на которую передвигаются изображения
        const moveDist = 180

        // В зависимости от направления движения поставить картинки с изображениями на стартовую позицию
        setImagesToStartPosition(direction, lastUsedImg, firstHeroImg, firstTopHeroImg, secondHeroImg, secondTopHeroImg, moveDist)

        // В зависимости от направления движения анимированно поставить картинки с изображениями на финишную позицию
        setImagesToEndPosition(direction, lastUsedImg, firstHeroImg, firstTopHeroImg, secondHeroImg, secondTopHeroImg, animationDuration, moveDist)

        // Поменять номер последнего используемого контейнера изображения
        lastUsedImg = (lastUsedImg === 1) ? 2 : 1

        // Предзагрузить предыдущую и следующую картинку события
        preloadPrevAndNextEventImage(events, rightEventId)

    }, [currentEventId])


    useEffect(() => {
        const isEventPage = isEventPageFunc(location)

        if(isEventPage && !pathesAreScaled) {
            // Увеличу все пути
            scalePathes('grow', eggPath, firstHeroPath, secondHeroPath, animationDuration)
            // Поставлю флаг что пути увеличины
            pathesAreScaled = true
        }

        if(!isEventPage && pathesAreScaled) {
            // Уменьшу все пути
            // setTimeout(function () {
                scalePathes('reduce', eggPath, firstHeroPath, secondHeroPath, animationDuration)
            // }, 0)

            // Поставлю флаг что пути уменьшены
            pathesAreScaled = false
        }
    }, [location])



    return <div id='hero-container' className={s.container} ref={containerRef} />
}