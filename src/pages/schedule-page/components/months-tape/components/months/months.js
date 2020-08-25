import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getEventsMonths} from "./js/resources"
import s from "./css/Months.module.scss"
import {changeCurrentScheduleMonth} from "../../../../../../store/actions"


export default function Months() {
    const {events} = useSelector(store => store)

    const [eventsMonths, setEventsMonths] = useState(null)

    useEffect(() => {
        // Получу список месяцев и поставлю в Местное состояние
        setEventsMonths(
            getEventsMonths(events)
        )
    }, [])


    if( !eventsMonths ) return null

    const btns = eventsMonths.map(monthObj => <Btn monthObj={monthObj} key={monthObj.name} />)

    return (
        <div className={s.cuttingRectangle}>
            <div className={s.section}>
                <div className={s.wrapper} id='monthsBtnsWrapper' style={{left: '0'}}>
                    {btns}
                </div>
            </div>
        </div>
    )
}


function Btn({monthObj}) {
    const dispatch = useDispatch()

    const {currentScheduleMonth} = useSelector(store => store.scheduleInfo)

    const monthIndex = monthObj.index
    const monthName = monthObj.name

    function onButtonClick(monthIndex) {
        dispatch(
            changeCurrentScheduleMonth(monthIndex)
        )
    }

    // Классы кнопки
    let cls = s.btn
    if(monthIndex === currentScheduleMonth) cls += ' ' + s['btn--selected']

    return (
        <button
            className={cls}
            onClick={() => onButtonClick(monthIndex)}
        >
            {monthName}
        </button>
    )
}