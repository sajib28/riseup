import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import BackgroundImage from '../../../assets/img/event.jpg';
import Banner from '../../commonTools/Banner';
import Accordion from '../../commonTools/Accordion';

class Service extends Component {
    render() {
        return (
<div className="career">
                <Nav />
                <Banner id="serviceBanner" backgroundImage={BackgroundImage} />
                <Accordion/>
                <section className="cv-form">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                test 1 3 33
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                2 2
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                4534
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div >
        )
    }
}
export default Service;