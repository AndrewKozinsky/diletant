import React, {useEffect, useState} from 'react';
import ContentWrapper from "../../../../components/content-wrapper"
import TwoColumnGrid from "../../../../components/two-column-grid"
import {getEventIdBySlug, getEventSlug} from "../../../../utils/urlHelper"
import {useSelector} from "react-redux"
import {useLocation} from "react-router-dom"
import s from './css/EventContent.module.scss'
import {createEventTextContent, digitTimeToHumanTime} from "./js/resources"
import Button from "./components/button"
import Map from "./components/map"





function EventContent() {
    let location = useLocation()

    // Получу массив всех событий и ID текущего события.
    const {events} = useSelector(store => store)
    const {currentEventId, animationDuration} = useSelector(store => store.eventsInfo)

    const [eventData, setEventData] = useState(null)

    useEffect(() => {
        // Получу слизня события из адресной строки
        const eventSlug = getEventSlug(location)

        // Вычисленный id текущего события
        let rightEventId

        // Если слизень события есть, то получу id этого события
        if(eventSlug) {
            rightEventId = getEventIdBySlug(events, eventSlug)
        }
        // В противном случае поставлю id из currentEventId или из первого события
        else rightEventId = currentEventId || events[0].id

        const rightEventData = events.find(event => event.id === rightEventId)

        setEventData(rightEventData)
    }, [])

    return (
        <ContentWrapper tagName='section' specialClasses={s.generalWrapper}>
            <TwoColumnGrid
                left={ <LeftContent eventData={eventData} /> }
                right={<RightContent eventData={eventData} />}
            />
        </ContentWrapper>
    )
}


function LeftContent({eventData}) {
    if(!eventData) return null

    return (
        <>
            <p className={s.city}>{eventData.city}</p>
            <p className={s.speaker}>{eventData.speaker}</p>
            <p className={s.theme}>{eventData.theme}</p>
            <div className={s.textContent}>
                {createEventTextContent(eventData.about)}
            </div>
            <div className={s.mapWrapper}>
                <Map />
            </div>
        </>
    )
}

function RightContent({eventData}) {
    if(!eventData) return null

    const data = digitTimeToHumanTime(eventData.date)

    return (
        <>
            <p className={s.date}>{data}<br />{eventData.time}</p>
            <p className={s.address}>{eventData.address}</p>
            <Button />
        </>
    )
}

export default EventContent;