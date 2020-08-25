import React, {useEffect} from 'react';
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import ContentWrapper from "../content-wrapper";
import SocialBtn from "../social-btn";

import s from './Header.module.scss';


function Header() {
    /*let location = useLocation()

    useEffect(() => {
        console.log(location.pathname)
    }, [location])*/


    return (
        <ContentWrapper tagName='header' specialClasses={s.wrapper}>
            <LogoBlock />
            <NavBlock />
            <p className={s.btnsBlock}>
                <SocialBtn type='facebook' />
                <SocialBtn type='instagram' />
                <SocialBtn type='vk' />
            </p>
        </ContentWrapper>
    )
}


function LogoBlock() {

    let match = useRouteMatch({
        path: '/',
        exact: true
    })

    let cls = s.logoBlock
    if(match) cls += ' ' + s['logoBlock--active']

    return (
        <p className={cls}>
            <Link to='/'>Dilettantish readings</Link>
        </p>
    )
}

function NavBlock() {
    return (
        <nav className={s.navBlock}>
            <NavLinks />
        </nav>
    )
}

function NavLinks() {
    let location = useLocation()

    const linksParamsArr = [
        {to: '/about', title: 'About'},
        {to: '/schedule', title: 'Schedule'}
    ]

    return linksParamsArr.map((linkParams, i) => {


        let cls = s.navLink
        if(location.pathname === linkParams.to)
            cls += ' ' + s['navLink--active']

        return <Link to={linkParams.to} className={cls} key={i}>
            {linkParams.title}
        </Link>
    })
}


export default Header;