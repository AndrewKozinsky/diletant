import React from 'react';
import {Provider} from 'react-redux'
import store from '../../store/store'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Header from "../header";
import Footer from "../footer";
import EventPages from "../../pages/event-pages";
import AboutPage from "../../pages/about-page";
import SchedulePage from "../../pages/schedule-page";
import Circle from "../../components/circle"

import './css/reset.css';
import './css/variables.scss'
import './css/general.scss'
import s from './css/App.module.scss';


function App() {
    return (
        <Provider store={store}>
            <Router basename="/p/diletant">
                <div className={s.pageWrapper}>

                    <Header />
                    <Circle />

                    <div className={s.pageContent}>
                        <Switch>
                            <Route path='/about'>
                                <AboutPage />
                            </Route>
                            <Route path='/schedule'>
                                <SchedulePage />
                            </Route>
                            <EventPages />
                        </Switch>
                    </div>

                    <Footer />
                </div>
            </Router>
        </Provider>
    )
}

export default App