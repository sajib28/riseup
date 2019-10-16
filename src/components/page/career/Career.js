import React, { Component, Fragment } from 'react'
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Banner from '../../commonTools/Banner';
import Accordion from '../../commonTools/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
class Career extends Component {
    render() {
        return (
            <div className="career">
                <Nav />
                <Banner />
                <section className="career-position">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Accordion />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div >
        )
    }
}
export default Career;