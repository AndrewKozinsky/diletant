import {createStore} from 'redux'
import {
    changeEventId,
    changeCurrentScheduleMonth,
    changeCurrentScheduleCity,
} from "./reducers";

import img1 from '../pages/event-pages/components/event-banner/hero/img/shulman.png'
import img2 from '../pages/event-pages/components/event-banner/hero/img/pelageya.png'
import img3 from '../pages/event-pages/components/event-banner/hero/img/grape.png'
import img4 from '../pages/event-pages/components/event-banner/hero/img/horseman.png'
import img5 from '../pages/event-pages/components/event-banner/hero/img/kortnev.png'
import img6 from '../pages/event-pages/components/event-banner/hero/img/levis.png'
import img7 from '../pages/event-pages/components/event-banner/hero/img/pavel.png'

const color1 ='255 225 218',
    color2 ='255 233 213',
    color3 ='255 245 213',
    color4 ='245 251 203',
    color5 ='225 251 209',
    color6 ='205 251 234',
    color7 ='210 245 252',
    color8 ='218 238 255',
    color9 ='236 228 255',
    color10 ='255 228 247'



const inicialState = {
    events: [
        {
            id: 1,
            slug: 'what-kind-of-russia-did-the-decembrists-want-to-see',
            speaker: 'Ekaterina Shulman',
            theme: 'What kind of Russia did the Decembrists want to see',
            coverImage: img1,
            bgColor: color1,
            city: 'Saint-Petersburg',
            address: 'Naberezhnaya reki Mojki st., 110',
            mapLink: '',
            date: '12.05.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 2,
            slug: 'russian-folk-songs-as-a-commercial-product',
            speaker: 'Polina Smirnova',
            theme: 'Russian folk songs as a commercial product',
            coverImage: img2,
            bgColor: color2,
            city: 'Saint-Petersburg',
            address: 'Naberezhnaya reki Mojki st., 110',
            mapLink: '',
            date: '21.05.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 3,
            slug: 'the-fall-of-the-berlin-wall',
            speaker: 'Leonid Parfyonov',
            theme: 'The fall of the Berlin Wall',
            coverImage: img3,
            bgColor: color3,
            city: 'Saint-Petersburg',
            address: 'Pirogova line, 12',
            mapLink: '',
            date: '30.05.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 4,
            slug: 'the-winged-knights-of-Stephen-bathory',
            speaker: 'Elena Feigin',
            theme: '4 The winged knights of Stephen Bathory',
            coverImage: img4,
            bgColor: color4,
            city: 'Moscow',
            address: 'Neglinnaya st. 29, building 1, Moscow Theatre «School of Modern Drama»',
            mapLink: '',
            date: '07.05.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 5,
            slug: '5-dictators-in-the-russian-history',
            speaker: 'Alexey Kortnev',
            theme: '5 dictators in the Russian history',
            coverImage: img5,
            bgColor: color5,
            city: 'Moscow',
            address: 'Parchomenko st., 117',
            mapLink: '',
            date: '15.05.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 6,
            slug: 'alexander-blok-the-history-of-the-revolution',
            speaker: 'Kat Maddox',
            theme: 'Alexander Blok. The history of the revolution.',
            coverImage: img6,
            bgColor: color6,
            city: 'Ufa',
            address: 'Parchomenko st., 117',
            mapLink: '',
            date: '11.05.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 7,
            slug: 'suffragettes-and-terror',
            speaker: 'Maxim Kournikov',
            theme: 'Suffragettes and Terror',
            coverImage: img7,
            bgColor: color7,
            city: 'Ekaterinburg',
            address: 'Starovskogo st., block 552',
            mapLink: '',
            date: '06.05.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 8,
            slug: 'marina-tsvetaeva-a-difficult-teenager-of-the-silver-age',
            speaker: 'Ekaterina Shulman',
            theme: 'Marina Tsvetaeva: «a difficult teenager» of the Silver Age.',
            coverImage: img1,
            bgColor: color8,
            city: 'Saint-Petersburg',
            address: 'Oplesnina st., 58а',
            mapLink: '',
            date: '05.06.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 9,
            slug: 'a-power-collector',
            speaker: 'Polina Smirnova',
            theme: 'A power collector',
            coverImage: img2,
            bgColor: color9,
            city: 'Saint-Petersburg',
            address: 'Starovskogo st., block 552',
            mapLink: '',
            date: '07.06.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 10,
            slug: 'marina-tsvetaeva-a-difficult-teenager-of-the-silverage',
            speaker: 'Vlad Yakupov',
            theme: 'Marina Tsvetaeva: «a difficult teenager» of the Silver Age.',
            coverImage: img3,
            bgColor: color10,
            city: 'Moscow',
            address: 'Oplesnina st., 58а',
            mapLink: '',
            date: '04.06.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 11,
            slug: 'about-the-fate-of-the-protagonist-of-the-cuban-revolution',
            speaker: 'Maxim Kournikov',
            theme: 'About the fate of the protagonist of the Cuban revolution',
            coverImage: img4,
            bgColor: color1,
            city: 'Moscow',
            address: 'Parchomenko st., 117',
            mapLink: '',
            date: '11.06.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 12,
            slug: 'karl-brullov-chief-romanticist-of-russian-painting',
            speaker: 'Alexey Kortnev',
            theme: 'Karl Brullov: chief romanticist of Russian painting.',
            coverImage: img5,
            bgColor: color2,
            city: 'Moscow',
            address: 'Parchomenko st., 117',
            mapLink: '',
            date: '15.06.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 13,
            slug: 'singapore-s-economic-miracle-of-the-20th-century',
            speaker: 'Kat Maddox',
            theme: 'Singapore\'s economic miracle of the 20th century',
            coverImage: img6,
            bgColor: color3,
            city: 'Moscow',
            address: 'Parchomenko st., 117',
            mapLink: '',
            date: '31.06.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 14,
            slug: 'emigration-of-albert-einstein',
            speaker: 'Mikhail Efremov',
            theme: 'Emigration of Albert Einstein',
            coverImage: img7,
            bgColor: color4,
            city: 'Orenburg',
            address: 'Orskaya st., 9 block 5',
            mapLink: '',
            date: '03.06.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 15,
            slug: 'the-whole-truth-about-the-templars',
            speaker: 'Ekaterina Shulman',
            theme: 'The whole truth about the Templars',
            coverImage: img1,
            bgColor: color5,
            city: 'Novgorod',
            address: 'Pirogova line, 12',
            mapLink: '',
            date: '17.06.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 16,
            slug: 'production-of-greatness-in-the-modern-russia',
            speaker: 'Polina Smirnova',
            theme: 'Production of greatness in the modern Russia',
            coverImage: img2,
            bgColor: color6,
            city: 'Saint-Petersburg',
            address: 'Starovskogo st., block 552',
            mapLink: '',
            date: '11.07.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 17,
            slug: 'why-and-who-benefited-from-the-molotov-ribbentrop-pact',
            speaker: 'Elena Feigin',
            theme: 'Why and who benefited from the Molotov-Ribbentrop Pact...',
            coverImage: img3,
            bgColor: color7,
            city: 'Saint-Petersburg',
            address: 'Sergeya Makeeva st., 9 block 5',
            mapLink: '',
            date: '13.07.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 18,
            slug: 'ussr-spy-powers-exchange',
            speaker: 'Leonid Parfyonov',
            theme: 'USSR: spy Powers exchange',
            coverImage: img4,
            bgColor: color8,
            city: 'Moscow',
            address: 'Pirogova line, 12',
            mapLink: '',
            date: '09.07.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 19,
            slug: 'tsar-ivan-the-terrible-his-insults-and-cunning',
            speaker: 'Polina Smirnova',
            theme: 'Tsar Ivan the Terrible, his insults and cunning...',
            coverImage: img5,
            bgColor: color9,
            city: 'Moscow',
            address: 'Starovskogo st., block 552',
            mapLink: '',
            date: '14.07.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 20,
            slug: 'thaw-a-generation-of-geniuses',
            speaker: 'Kat Maddox',
            theme: 'Thaw: a generation of geniuses',
            coverImage: img6,
            bgColor: color10,
            city: 'Moscow',
            address: 'Starovskogo st., block 552',
            mapLink: '',
            date: '28.07.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 21,
            slug: 'churchill-is-the-prime-minister-of-warring-britain',
            speaker: 'Polina Smirnova',
            theme: 'Churchill is the prime minister of warring Britain',
            coverImage: img7,
            bgColor: color1,
            city: 'Novosibirsk',
            address: 'Naberezhnaya reki Mojki st., 110',
            mapLink: '',
            date: '20.07.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 22,
            slug: 'dilettantish-readings-with-andrew-makarevich',
            speaker: 'Ekaterina Shulman',
            theme: 'Dilettantish readings with Andrew Makarevich',
            coverImage: img1,
            bgColor: color2,
            city: 'Moscow',
            address: 'Naberezhnaya reki Mojki st., 110',
            mapLink: '',
            date: '12.08.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 23,
            slug: 'carthage-the-war-of-destruction',
            speaker: 'Polina Smirnova and Renat Karimov',
            theme: 'Carthage. The war of destruction.',
            coverImage: img2,
            bgColor: color3,
            city: 'Moscow',
            address: 'Sergeya Makeeva st., 9 block 5',
            mapLink: '',
            date: '26.08.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 24,
            slug: 'boogie-woogie-and-rock-n-roll-fun-during-the-thaw',
            speaker: 'Mikhail Efremov',
            theme: 'Boogie-woogie and rock-n-roll: fun during the thaw',
            coverImage: img3,
            bgColor: color4,
            city: 'Sochi',
            address: 'Parchomenko st., 117',
            mapLink: '',
            date: '04.08.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
        {
            id: 25,
            slug: 'recent-years-of-lenin',
            speaker: 'Leonid Parfyonov',
            theme: 'Recent years of Lenin',
            coverImage: img4,
            bgColor: color5,
            city: 'Sochi',
            address: 'Parchomenko st., 117',
            mapLink: '',
            date: '12.08.2020',
            time: '7:00 pm',
            about: [
                'The genesis of USA Today was on February 29, 1980, when a company task force known as "Project NN" met with Gannett chairman Al Neuharth in Cocoa Beach, Florida to develop a national newspaper.',
                'Early regional prototypes included East Bay Today, an Oakland, California-based publication published in the late 1970s to serve as the morning edition of the Oakland Tribune, an afternoon newspaper which Gannett owned at the time.'
            ]
        },
    ],
    eventsInfo: {
        currentEventId: null,
        animationDuration: 330
    },
    scheduleInfo: {
        currentScheduleMonth: 4,
        currentScheduleCity: 'Saint-Petersburg'
    }

}

function reducer(state = inicialState, action) {
    switch (action.type) {
        case 'CHANGE_EVENT_ID':
            return changeEventId(state, action)
        case 'CHANGE_CURRENT_SCHEDULE_MONTH':
            return changeCurrentScheduleMonth(state, action)
        case 'CHANGE_CURRENT_SCHEDULE_CITY':
            return changeCurrentScheduleCity(state, action)
        default: return state
    }
}


export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)