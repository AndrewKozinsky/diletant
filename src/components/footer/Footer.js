import React from "react"
import ContentWrapper from "../content-wrapper"
import SocialBtn from "../social-btn"
import sTop from './css/TopFooter.module.scss'
import sBot from './css/BottomFooter.module.scss'
import TwoColumnGrid from "../two-column-grid"
import SubscribeForm from "./components/subscribe-form"



function Footer() {
    return (
        <ContentWrapper specialClasses={sTop.footerWrapper}>
            <TwoColumnGrid left={ <TopFooter/> }/>
            <BottomFooter />
        </ContentWrapper>
    )
}


function TopFooter() {
    return (
        <section className={sTop.sectionWrapper}>
            <h3 className={sTop.header}>Share</h3>
            <div className={sTop.socialButtons}>
                <SocialBtn type='facebook' specialClasses={sTop.socialBtn} style='light' />
                <SocialBtn type='instagram' specialClasses={sTop.socialBtn} style='light' />
                <SocialBtn type='vk' specialClasses={sTop.socialBtn} style='light' />
                <SocialBtn type='twitter' specialClasses={sTop.socialBtn} style='light' />
                <SocialBtn type='telegram' specialClasses={sTop.socialBtn} style='light' />
            </div>
            <div className={sTop.grid}>
                <div className={sTop.grid__leftCell}>
                    <p className={sTop.newsDescriptionText}>
                        Subscribe to our news and find out about new readings in your city.
                    </p>
                </div>
                <div className={sTop.grid__rightCell}>
                    <SubscribeForm />
                </div>
            </div>
        </section>
    )
}

function BottomFooter() {
    return (
        <footer className={sBot.wrapper}>
            <p className={ sBot.textBlock }>
                Dilettantish readings 2020
            </p>
            <p className={ sBot.textBlock }>
                <a href="https://google.com">Personal data processing policy</a>
            </p>
            <p className={ sBot.btnsBlock }>
                <SocialBtn type='facebook' specialClasses={sBot.socialBtn} style='dark' />
                <SocialBtn type='instagram' specialClasses={sBot.socialBtn} style='dark' />
                <SocialBtn type='vk' specialClasses={sBot.socialBtn} style='dark' />
                <SocialBtn type='twitter' specialClasses={sBot.socialBtn} style='dark' />
                <SocialBtn type='telegram' specialClasses={sBot.socialBtn} style='dark' />
            </p>
        </footer>
    )
}

export default Footer;