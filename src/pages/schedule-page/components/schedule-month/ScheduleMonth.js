import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import ContentWrapper from "../../../../components/content-wrapper"
import {createCityEventsMarkup, prepareSitiesData, createVisibilityButton} from "./js/resources"
import s from "./css/ScheduleMonth.module.scss"


export default function ScheduleMonth() {

    const {events, scheduleInfo} = useSelector(store => store)
    const {currentScheduleMonth, currentScheduleCity} = scheduleInfo

    const [citiesEvents, setCitiesEvents] = useState(null)

    useEffect(() => {
        // Получу данные для отрисовки компонента
        setCitiesEvents(
            prepareSitiesData(events, currentScheduleMonth, currentScheduleCity)
        )
    }, [currentScheduleCity, currentScheduleMonth])


    if(!citiesEvents) return null

    return (
        <ContentWrapper specialClasses={s.generalWrapper}>
            <Markup citiesEvents={citiesEvents} />
        </ContentWrapper>
    )
}


function Markup({citiesEvents}) {

    const dispatch = useDispatch()

    const markup = []

    for(let cityName in citiesEvents) {
        if(cityName === 'currentCity') continue

        const isCurrentCity = citiesEvents.currentCity === cityName

        let cityHeaderWrapperCls = s.cityHeaderWrapper
        if(isCurrentCity) {
            cityHeaderWrapperCls += ' ' + s['cityHeaderWrapper--opened'] + ' ' + s['cityHeaderWrapper__' + cityName]
        }

        const cityEventsArr = citiesEvents[cityName]

        const cityMarkup = <section className={s.cityWrapper} key={cityName}>
            <div className={cityHeaderWrapperCls}>
                <h2 className={s.cityHeader}>{cityName}</h2>
                {createVisibilityButton(isCurrentCity, cityEventsArr.length, dispatch, cityName)}
            </div>

            {createCityEventsMarkup(cityEventsArr, isCurrentCity)}
        </section>

        markup.push(cityMarkup)
    }

    return markup
}