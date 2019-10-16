
import React, { Component } from 'react';
import src1 from '../../../assets/media/intechnic.mp4';
import poster from '../../../assets/img/intechnic.jpg';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
class Home extends Component {
    render() {
        return (
            <div className="home">
                <Nav />
                <section className="intro">
                    <div className="background-cover">
                        <video autoPlay muted loop playsInline preload="none" poster={poster}>
                            <source src={src1} type="video/mp4" />
                        </video>
                    </div>
                    <div className="container middle-content">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inroText">
                                    <h1>Beyond Reality<br />Drinvig into<br /><span className="red-text">Technology</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="service">
                    <div className="container">
                        <div className="col-lg-12">
                                <div className="section-title">
                                    <div className="title text-center">
                                        <h2 className="text-center"><span className="red-text">Riseup</span> Service</h2>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}
export default Home;