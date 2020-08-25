import React, {useEffect, useState, useRef} from 'react'
import {useSelector} from "react-redux"
import { Link, useLocation } from "react-router-dom";

import ContentWrapper from "../../../../../components/content-wrapper"
import BannerControlBtns from "../banner-control-btns"
import Hero from "../hero"
import {
    getEventIdBySlug,
    getEventSlug,
    isEventPageFunc
} from "../../../../../utils/urlHelper"
import {
    setFirstRenderClasses,
    setAnimationRenderClasses
} from "./js/resources"
import sTop from "./css/TopPart.module.scss";
import sBot from "./css/BottomPart.module.scss";



// Это первая отрисовка страницы?
let isFirstRender = true
// Вычисленный id текущего события
let rightEventId


function EventBanner() {
    let location = useLocation()

    // Получу массив всех событий и ID текущего события.
    const {events} = useSelector(store => store)
    const {currentEventId, animationDuration} = useSelector(store => store.eventsInfo)

    // ID события, которое открывали последним.
    const [oldEventId, setOldEventId] = useState(null)

    // В какую обёртку последней помещали данные
    const [lastWrapper, setLastWrapper] = useState('second')

    const emptyEvent = {slug: '', city: '', speaker: '', theme: ''}
    const [firstWrpData, setFirstWrpData] = useState(emptyEvent)
    const [secondWrpData, setSecondWrpData] = useState(emptyEvent)

    // Классы главной обёртки баннера
    const [bannerCls, setBannerCls] = useState('_1_show__2_hide')

    // Классы главной обёртки баннера
    const [generalWrapperCls, setGeneralWrapperCls] = useState(sTop.generalWrapper)


    // При загрузке страницы посмотреть нахожусь ли я на странице события и получить правильный id
    useEffect(() => {
        if(!currentEventId) {
            // Получу слизня события из адресной строки
            const eventSlug = getEventSlug(location)

            // Если слизень события есть, то получу id этого события
            if(eventSlug) {
                rightEventId = getEventIdBySlug(events, eventSlug)
            }
            // В противном случае поставлю id первого события
            else rightEventId = events[0].id
        }

    }, [])

    // При удалении компонента привести переменную isFirstRender в начальное значение
    useEffect(() => () => isFirstRender = true, [])


    // Если изменился currentEventId, значит или баннер отрисовался в первый раз
    // или нажали кнопку перехода к другому баннеру. В любом случае поставлю данные в обёртки.
    useEffect(() => {
        // debugger
        if(!isFirstRender) rightEventId = currentEventId
        if(!rightEventId) rightEventId = events[0].id

        // Поставить текущий ID события в качестве последнего ID события.
        setOldEventId(rightEventId)

        // Если есть oldEventId, то значит нажали кнопку перехода к другому баннеру
        // Вычислить направление
        let newDirection = (oldEventId && oldEventId > rightEventId) ? 'right' :'left'

        // Получу idx события к которому нужно перейти
        const nextIdx = events.findIndex(event => event.id === rightEventId)

        // Получу данные о событиях имеющих место в баннере
        // Объект старого события
        let eventObj = (newDirection === 'left')
            ? events[nextIdx - 1] || emptyEvent
            : events[nextIdx + 1]

        // Объект нового показываемого события
        let nextEventObj = events[nextIdx]


        // Загружу новые данные в обёртки
        if(lastWrapper === 'first') {
            setSecondWrpData(nextEventObj)
        } else {
            setFirstWrpData(nextEventObj)
        }


        let newLastWrapper = (lastWrapper === 'first') ? 'second' : 'first'
        setLastWrapper(newLastWrapper)

        // Нахожусь на странице с подробным описанием события?
        const isEventPage = isEventPageFunc(location)

        // Если это первая отрисовка страницы, то сразу поставить конечные классы чтобы не было анимации.
        if(isFirstRender) {
            setFirstRenderClasses(newDirection, isEventPage, setBannerCls, setGeneralWrapperCls, sTop)
            isFirstRender = false
        }
        else {
            setAnimationRenderClasses(newDirection, newLastWrapper, setBannerCls, animationDuration, isEventPage, sTop, setGeneralWrapperCls)
        }

    }, [currentEventId])


    useEffect(() => {
        // Нахожусь на странице с подробным описанием события?
        const isEventPage = isEventPageFunc(location)

        // Если нахожусь на странице события, то добавлю обёртке дополнительный класс
        if(isEventPage) setGeneralWrapperCls(sTop.generalWrapper +  ' eventPage')
        else setGeneralWrapperCls(sTop.generalWrapper)
    }, [location])


    return (
        <section className={generalWrapperCls}>
            <div className={bannerCls}>
                <ContentWrapper tagName='section' type='event-banner'>
                    <ContentWrapper specialClasses={sTop.wrapper}>
                        <div className={sTop.citySectionFirst}>
                            <p className={ sTop.city_1 }>
                                {firstWrpData.city}
                            </p>
                            <p className={ sTop.city_2 }>
                                {secondWrpData.city}
                            </p>
                        </div>

                        <div className={sTop.themeSection}>
                            <Link to={'/events/' + firstWrpData.slug} className={sTop.theme_1}>
                                <p className={sTop.speaker}>
                                    <span>
                                        {firstWrpData.speaker}
                                    </span>
                                </p>
                                <p className={sTop.themeText}>
                                    <span>
                                        {firstWrpData.theme}
                                    </span>
                                </p>
                            </Link>
                            <Link to={'/events/' + secondWrpData.slug} className={sTop.theme_2}>
                                <p className={sTop.speaker}>
                                    <span>
                                        {secondWrpData.speaker}
                                    </span>
                                </p>
                                <p className={sTop.themeText}>
                                    <span>
                                        {secondWrpData.theme}
                                    </span>
                                </p>
                            </Link>
                        </div>

                        <Hero />
                        <BannerControlBtns />
                    </ContentWrapper>

                    <ContentWrapper>
                        <div className={sBot.wrapper}>
                            <Link to={'/events/' + firstWrpData.slug} className={sBot.part_1}>
                                <p className={sBot.city}>{firstWrpData.city}</p>
                                <p className={sBot.speaker}>{firstWrpData.speaker}</p>
                                <p className={sBot.theme}>{firstWrpData.theme}</p>
                            </Link>
                            <Link to={'/events/' + secondWrpData.slug} className={sBot.part_2}>
                                <p className={sBot.city}>{secondWrpData.city}</p>
                                <p className={sBot.speaker}>{secondWrpData.speaker}</p>
                                <p className={sBot.theme}>{secondWrpData.theme}</p>
                            </Link>
                        </div>
                    </ContentWrapper>
                </ContentWrapper>
            </div>
        </section>
    )
}

export default EventBanner