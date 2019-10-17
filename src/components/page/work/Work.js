import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Banner from '../../commonTools/Banner';
import BackgroundImage from '../../../assets/img/event.jpg';

class Work extends Component {
    render() {
        return (
            <div className="work">
                <Nav />
                <Banner id="workBanner" backgroundImage={BackgroundImage} />
                <section className="cv-form">
work
                </section>
                <Footer />
            </div >
        )
    }
}
export default Work;