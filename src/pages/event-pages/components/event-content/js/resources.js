import React from 'react';

export function createEventTextContent(paragraphsArr) {
    return paragraphsArr.map((paragraph, i) => {
        return <p key={i}>{paragraph}</p>
    })
}

// Функция переводит строку вида '05.06.2020' в 5 may 2020
// В timeStr будет строка вида '05.06.2020'
export function digitTimeToHumanTime(timeStr) {
    const strPartsArr = timeStr.split('.')

    // Преобразую строки в числа
    const numPartsArr = strPartsArr.map(part => {
        return parseInt(part)
    })

    const fixedPartsArr = numPartsArr.map((part, i) => {
        if(i !== 1) return part

        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        return months[part - 1]
    })

    return fixedPartsArr.join(' ')
}