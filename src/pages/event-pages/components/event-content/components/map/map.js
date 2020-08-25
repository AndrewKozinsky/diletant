import React, {useEffect} from 'react'
import DG from '2gis-maps'
import s from './css/Map.module.scss'


export default function Map() {


    useEffect(() => {

        const myMap = new DG.Map('event-map', {
            'center': [54.98, 82.89],
            'zoom': 12,
            scrollWheelZoom: false
        })

        myMap.scrollWheelZoom = false

        DG.marker(
            [54.98, 82.89],
            {
                interactive: false,
                title: 'Hello',
                alt: 'Hello',

            }
        ).addTo(myMap);

    }, [])


    return (
        <div id="event-map" className={s.container}>
            Map
        </div>
    );
}