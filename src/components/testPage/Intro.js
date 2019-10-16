import React, { Component } from 'react';
import poster from '../../assets/img/intechnic.jpg';
import src1 from '../../assets/media/intechnic.mp4';
class Intro extends Component {
    render() {
        return (
            <div className="home">
                <section id="intro">
                    <div className="background-video">
                        <video autoPlay muted loop playsInline preload="none" poster={poster}>
                            <source src={src1} type="video/mp4" />
                        </video>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="intro-title">
                                    <h1>Beyond Reality<br />Drinving into<br /><span className="red-text">Technology</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="service">
                    <div className="container">
                        <div className="col-lg-12">
                                <div className="section-title">
                                    <div className="title text-center">
                                        <h2><span className="red-text">Riseup</span> Service</h2>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Intro;
