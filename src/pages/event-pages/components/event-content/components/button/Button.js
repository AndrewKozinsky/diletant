import React from 'react'
import s from './css/Button.module.scss'


export default function Button() {
    return (
        <a href='https://www.concert.ru' className={s.wrapper}>
            <div className={s.topRect}>
                <span className={s.text}>Tickets</span>
                <span className={s.arrow} />
            </div>
            <div className={s.bottomRect} />
        </a>
    )
}




/*
function SubscribeForm() {
    return (
        <div className={s.wrapper}>
            <div className={s.topRect}>
                <input type='email' className={s.emailInput} placeholder='Your email' />
                <div className={s.verticalHr} />
                <button type='submit' className={s.submitBtn}/>
            </div>
            <div className={s.bottomRect} />
        </div>
    );
}*/
