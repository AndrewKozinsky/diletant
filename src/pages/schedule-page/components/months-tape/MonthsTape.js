import React, {useEffect, useState} from 'react';

import ContentWrapper from "../../../../components/content-wrapper"
import Months from "./components/months"
import MoveButtons from "./components/move-buttons"
import s from './css/MonthsTape.module.scss'

export default function MonthsTape() {


    return (
        <>
            <div className={s.componentWrapper} id='monthsComponentWrapper'>
                <ContentWrapper>
                    <p className={s.yearWrapper}>2020</p>
                </ContentWrapper>
                <Months />
            </div>
            <MoveButtons />
        </>
    )
}

