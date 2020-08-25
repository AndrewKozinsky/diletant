import React, {useEffect} from 'react';
import { Route } from 'react-router-dom'
import EventBanner from "./components/event-banner/event-banner";
import EventContent from "./components/event-content"
import GhostlyContent from "../../components/ghostly-content"
import ContentWrapper from "../../components/content-wrapper"


function EventPages() {

    return (
        <>
            <EventBanner />
            <Route path='/' exact>
                <ContentWrapper>
                    <GhostlyContent />
                </ContentWrapper>
            </Route>
            <Route path='/events/:eventSlug'>
                <EventContent />
            </Route>
        </>
    )
}

export default EventPages;