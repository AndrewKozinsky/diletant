import React from 'react';
import s from './css/SubscribeForm.module.scss'


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
}

export default SubscribeForm;