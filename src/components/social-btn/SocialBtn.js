import React from 'react';
import s from './SocialBtn.module.scss';

/**
 * Компонент социальных кнопок
 * @param {String} type — тип кнопки.
 * @param {String} style — стиль кнопки. Если значения нет или dark, то кнопка будет тёмной. В остальных случаях светлой.
 * @param {String} specialClasses — дополнительные классы, которые можно поставить на кнопку
 * @return {*}
 * @constructor
 */
function SocialBtn({type, style, specialClasses}) {

    // Определю подсказку при наведении на кнопку
    let title = getButtonTitle(type)

    // Составлю классы
    let classes = s.btn += ' ';
    classes +=
        (!style || style === 'dark')
        ? s[type]
        : s[type + '-light']

    if(specialClasses) classes += ' ' + specialClasses

    return <button className={ classes } title={title} />
}

function getButtonTitle(type) {
    switch (type) {
        case 'facebook':
            return 'Share on Facebook'
        case 'instagram':
            return 'Share on Instagram'
        case 'vk':
            return 'Share on VK'
        case 'twitter':
            return 'Share on Twitter'
        case 'telegram':
            return 'Share on Telegram'
        default: return ''
    }
}

export default SocialBtn;