import React from "react";
import s from './css/ContentWrapper.module.scss';

/**
 * Обёрточный компонент для шапки, подвала и баннера.Он нужен чтобы чтобы у шапки, подвала и баннера были определённые ширины на странице.
 * @param {String} tagName — тег обёртки. По умолчанию <div>
 * @param {String} specialClasses — дополнительные классы добавляемые обёртке
 * @param {String} type — тип обёртки: page или event-banner. В зависимости от типа обёртка будет иметь различную ширину.
 * @param {JSX} children — компоненты вставляемые в обёрточный компонент
 * @constructor
 */
function ContentWrapper({tagName, specialClasses, type, children}) {

    // Тег обёртки
    const Tag = tagName || 'div';

    // Составлю классы обёртки
    let classes;
    if(!type || type === 'page') classes = s.pageWrapper;
    else if(type === 'event-banner') classes = s.eventBannerWrapper;


    if(specialClasses) classes += ' ' + specialClasses;

    return (
        <Tag className={classes}>
            {children}
        </Tag>
    )
}

export default ContentWrapper;















