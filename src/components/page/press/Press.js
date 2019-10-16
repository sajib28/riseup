import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Banner from '../../commonTools/Banner';
import Accordion from '../../commonTools/Accordion';
class Press extends Component {
    render() {
        return (
            <div className="career">
            <Nav />
            <Banner/>
            <Accordion/>
            <section className="cv-form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                           Press
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

export default Press;