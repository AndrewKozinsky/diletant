import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom"
import SlideButtons from "../slide-buttons";
import setNextEventId from "./js/setNextEventId"
import {getEventIdBySlug, getEventSlug} from "../../../../../utils/urlHelper"
import s from "./css/BannerControlBtns.module.scss"




let isFirstRender = true, // Это первая отрисовка страницы?
    rightEventId, // id страницы события полученный из адресной строки во время первой отрисовки страницы
    prevId,
    nextId,
    leftDisabled,
    rightDisabled


function BannerControlBtns() {
    let location = useLocation()

    const dispatch = useDispatch()

    // Получу массив всех событий и ID текущего события.
    const {events} = useSelector(store => store)
    const {currentEventId, animationDuration} = useSelector(store => store.eventsInfo)


    useEffect(() => {
        if(!currentEventId) {
            // Получу слизня события из адресной строки
            const eventSlug = getEventSlug(location)

            if(eventSlug) {
                // Если слизень события есть, то получу id этого события
                rightEventId = getEventIdBySlug(events, eventSlug)
            }
            // В противном случае поставлю id первого события
            else rightEventId = events[0].id
        }
    }, [])


    useEffect(() => {
        // Если это не первая отрисовка страницы, то поставить в rightEventId значение currentEventId
        if(isFirstRender) { isFirstRender = false }
        else { rightEventId = currentEventId }

        if(!rightEventId) rightEventId = events[0].id

        // Получу индекс текущего события в массиве всех событий
        const idx = events.findIndex(obj => obj.id === rightEventId)

        // Получу id предыдущего и следующего события
        prevId = events[idx - 1] ? events[idx - 1].id : null
        nextId = events[idx + 1] ? events[idx + 1].id : null

        leftDisabled = !prevId
        rightDisabled = !nextId
    }, [currentEventId])


    // Обработчик щелчка по кнопке
    function onBtnClick(id, direction) {
        setNextEventId(events, animationDuration + 50, id, direction, dispatch)
    }


    return (
        <SlideButtons
            specialClasses={s.slideButtons}
            leftClick={ () => onBtnClick(prevId, 'left') }
            rightClick={ () => onBtnClick(nextId, 'right') }
            leftDisabled={leftDisabled}
            rightDisabled={rightDisabled}
        />
    )
}


export default BannerControlBtns