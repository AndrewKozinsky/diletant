import sTop from "../css/TopPart.module.scss"





export function setFirstRenderClasses(newDirection, isEventPage, setBannerCls, setGeneralWrapperCls, sTop) {

    // Если нахожусь на странице события, то добавлю обёртке дополнительный класс
    if(isEventPage) setGeneralWrapperCls(sTop.generalWrapper +  ' eventPage')

    setBannerCls('_2_hide__1_show')
}


export function setAnimationRenderClasses(newDirection, newLastWrapper, setBannerCls, animationDuration, isEventPage, sTop, setGeneralWrapperCls) {

    // Если нахожусь на странице события, то добавлю обёртке дополнительный класс
    if(isEventPage) setGeneralWrapperCls(sTop.generalWrapper +  ' eventPage')
    else setGeneralWrapperCls(sTop.generalWrapper)


    // Вычислю классы главной обёртки чтобы расставить объекты для начала анимации
    if(newDirection === 'left') {
        if(newLastWrapper === 'first') setBannerCls('_2_show__1_hide')
        else setBannerCls('_1_show__2_hide')
    }

    if(newDirection === 'right') {
        if(newLastWrapper === 'first') setBannerCls('_1_hide__2_show')
        else setBannerCls('_2_hide__1_show')
    }


    // Применю анимационный класс чтобы в дальнейшем слайды перемещались плавно
    setTimeout(() => {
        if(newDirection === 'left') {
            if(newLastWrapper === 'first') setBannerCls('_2_show__1_hide trn')
            else setBannerCls('_1_show__2_hide trn')
        }

        if(newDirection === 'right') {
            if(newLastWrapper === 'first') setBannerCls('_1_hide__2_show trn')
            else setBannerCls('_2_hide__1_show trn')
        }
    }, 20)

    // Применю классы чтобы слайды переместились в конечное положение
    setTimeout(() => {
        if(newDirection === 'left') {
            if(newLastWrapper === 'first') setBannerCls('_2_hide__1_show trn')
            else setBannerCls('_1_hide__2_show trn')
        }

        if(newDirection === 'right') {
            if(newLastWrapper === 'first') setBannerCls('_1_show__2_hide trn')
            else setBannerCls('_2_show__1_hide trn')
        }
    }, 35)

    setTimeout(() => {
        if(newDirection === 'left') {
            if(newLastWrapper === 'first') setBannerCls('_2_hide__1_show')
            else setBannerCls('_1_hide__2_show')
        }

        if(newDirection === 'right') {
            if(newLastWrapper === 'first') setBannerCls('_1_show__2_hide')
            else setBannerCls('_2_show__1_hide')
        }
    }, animationDuration + 45)
}