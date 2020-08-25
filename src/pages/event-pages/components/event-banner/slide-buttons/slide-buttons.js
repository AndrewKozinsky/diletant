import React from 'react';
import s from "./SlideButtons.module.scss";


function SlideButtons({specialClasses, leftClick, rightClick, leftDisabled, rightDisabled}) {

    // Составлю классы обёртки
    let wrpCls = s.wrapper
    if(specialClasses) wrpCls += ' ' + specialClasses

    // Составлю классы кнопок
    const leftBtnCls = s.btn + ' ' + s.btn_left
    const rightBtnCls = s.btn + ' ' + s.btn_right

    return (
        <div className={wrpCls}>
            <button className={leftBtnCls} onClick={leftClick} disabled={leftDisabled} />
            <button className={rightBtnCls} onClick={rightClick} disabled={rightDisabled} />
        </div>
    )
}

export default SlideButtons;