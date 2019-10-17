import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Banner from '../../commonTools/Banner';
import BackgroundImage from '../../../assets/img/event.jpg';
class Press extends Component {
    render() {
        return (
            <div className="press">
            <Nav />
            <Banner id="PressBanner" backgroundImage={BackgroundImage} />
            <section className="cv-form">
                
            </section>
            <Footer />
        </div >
        )
    }
}

export default Press;