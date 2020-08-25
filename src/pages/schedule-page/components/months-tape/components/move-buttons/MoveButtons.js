import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useWindowWidth} from "@react-hook/window-size"

import ContentWrapper from "../../../../../../components/content-wrapper"
import SlideButtons from "../../../../../event-pages/components/event-banner/slide-buttons"

import {getEventsMonths} from "../months/js/resources"
import {onBtnClick, fixMonthVisibility} from "./js/resources"
import s from './css/MoveButtons.module.scss'


export default function MoveButtons() {

    const dispatch = useDispatch()

    // Получу данные по событиям и выбраный месяц
    const {events} = useSelector(store => store)
    const {currentScheduleMonth} = useSelector(store => store.scheduleInfo)

    // В этой переменной будет храниться массив с данными о месяцах
    const [eventsMonths, setEventsMonths] = useState(null)

    // В этой переменной будет храниться idx текущего месяца в массиве eventsMonths
    const [currentMonthIdx, setCurrentMonthIdx] = useState(null)

    // Заблокированы ли кнопки
    const [leftDisabled, setLeftDisabled] = useState(false)
    const [rightDisabled, setRightDisabled] = useState(false)

    // Хук срабатывающий при изменении ширины экрана
    const windowWidth = useWindowWidth({wait: 500});


    useEffect(() => {
        // Получу список месяцев и поставлю в Местное состояние
        setEventsMonths(
            getEventsMonths(events)
        )
    }, [])


    // Запускать функцию при изменении массива eventsMonths и выделении другого месяца
    useEffect(() => {
        // Ничего не делать если в eventsMonths еще не загружен массив с данными по месяцам
        if(!eventsMonths) return

        // Выяснить idx объекта с данными текущего месяца в массиве eventsMonths
        const currentMonthIdx = eventsMonths.findIndex(monthObj => {
            return monthObj.index === currentScheduleMonth
        })

        // Поставить значение в currentMonthIdx
        setCurrentMonthIdx(currentMonthIdx)

        // Если текущий объект в массиве eventsMonths является первым, то заблокировать кнопку перехода к предыдущему месяцу
        if(currentMonthIdx === 0) setLeftDisabled(true)
        else setLeftDisabled(false)

        // Если текущий объект в массиве eventsMonths является последним, то заблокировать кнопку перехода к следующему месяцу
        if(currentMonthIdx === eventsMonths.length - 1) setRightDisabled(true)
        else setRightDisabled(false)

        // Поправить расположение блока с кнопками и сделать чтобы выделенная кнопка была видна
        fixMonthVisibility(currentMonthIdx)
    }, [currentScheduleMonth, eventsMonths])


    useEffect(() => {
        // Ничего не делать если в eventsMonths еще не загружен массив с данными по месяцам
        if(!eventsMonths) return

        // Поправить расположение блока с кнопками и сделать чтобы выделенная кнопка была видна
        fixMonthVisibility(currentMonthIdx)
    }, [windowWidth])


    return (
        <ContentWrapper>
            <div className={s.wrapper}>
                <SlideButtons
                    specialClasses={s.moveButtons}
                    leftClick={ () => onBtnClick('prev', eventsMonths, currentScheduleMonth, dispatch) }
                    rightClick={ () => onBtnClick('next', eventsMonths, currentScheduleMonth, dispatch) }
                    leftDisabled={leftDisabled}
                    rightDisabled={rightDisabled}
                />
            </div>
        </ContentWrapper>
    )
}


