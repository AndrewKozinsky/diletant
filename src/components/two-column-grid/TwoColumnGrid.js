import React from 'react';
import s from './css/TwoColumnGrid.module.scss'


function TwoColumnGrid({left = null, right = null}) {
    return (
        <div className={s.wrapper}>
            <div className={s.left}>
                {left}
            </div>
            <div className={s.right}>
                {right}
            </div>
        </div>
    );
}

export default TwoColumnGrid;