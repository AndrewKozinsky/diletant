import React, {useEffect, useState} from 'react'
import s from "../css/ScheduleMonth.module.scss"
import {changeCurrentScheduleCity} from "../../../../../store/actions"
import {Link} from "react-router-dom"

export function prepareSitiesData(eventsArr, monthNum, currentCity = null) {

    // Получу все события выбранного месяца
    const eventsInOneMonth = eventsArr.filter(event => {
        const eventMonth = getMonthFromDateStr(event.date)
        return eventMonth === monthNum
    })

    // Сделаю объект где будут события городов
    const eventsInCities = {}

    eventsInOneMonth.forEach(event => {
        const city = event.city

        if(!eventsInCities[city]) {
            eventsInCities[city] = []
        }

        eventsInCities[city].push(event)
    })

    eventsInCities.currentCity = currentCity

    return eventsInCities
}

function getMonthFromDateStr(dateStr) {
    const datePartsArr = dateStr.split('.')
    const monthStr = datePartsArr[1]
    const monthNum = parseInt(monthStr)

    return monthNum - 1
}


export function createVisibilityButton(isCurrentCity, eventsNumber, dispatch, cityName) {

    function onButtonClick(cityName) {
        dispatch(
            changeCurrentScheduleCity(cityName)
        )
    }

    return isCurrentCity
        ? createCloseButton(onButtonClick)
        : createOpenButton(eventsNumber, onButtonClick, cityName)
}

function createCloseButton(onButtonClick) {
    const cls = s.revealBtn + ' ' + s['revealBtn__opened']
    return <button className={cls} onClick={() => onButtonClick(null)} />
}

function createOpenButton(eventsNumber, onButtonClick, cityName) {
    const cls = s.revealBtn

    return <button className={cls} onClick={() => onButtonClick(cityName)}>
        <span className={s.revealBtn__counter}>{eventsNumber}</span>
    </button>
}


export function createCityEventsMarkup(cityEventsArr, isCurrentCity) {

    if(!isCurrentCity) return null


    return cityEventsArr.map((eventObj, i) => {
        const eventPageUrl = '/events/' + eventObj.slug

        return (
            <Link to={eventPageUrl} className={s.cityEventWrapper} key={i}>
                <div className={s.cityEventPartOne}>
                    <div>
                        <p className={s.dayNumber_p1}>{eventObj.date.split('.')[0]}</p>
                        <p className={s.time_p1}>{eventObj.time}</p>
                    </div>
                </div>
                <div className={s.cityEventPartTwo}>
                    <p className={s.speaker_p2}>{eventObj.speaker}</p>
                    <p className={s.theme_p2}>{eventObj.theme}</p>
                    {getFullDate(eventObj)}
                    <p className={s.address_p2}>{eventObj.address}</p>
                </div>
                <div className={s.cityEventPartThree} />
            </Link>
        )
    }
    )
}

function getFullDate(eventObj) {
    // В eventObj.date будет строка вида 12.05.2020
    const datePartsArr = eventObj.date.split('.')

    const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const monthIdx = parseInt(datePartsArr[1]) - 1

    const fillDate = datePartsArr[0] + ' ' + monthsNames[monthIdx]

    return <p className={s.fullDate_p2}>
        <span className={s.date_p2}>{fillDate}</span>
        <span className={s.time_p2}>{eventObj.time}</span>
    </p>
}