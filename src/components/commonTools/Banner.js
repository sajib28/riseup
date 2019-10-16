import React, { Component } from 'react';
import bannerBg from '../../assets/img/event.jpg';

export default class Banner extends Component {
    render() {
        return (
            <section className="banner middle-content" style={{ backgroundImage: "url(" + bannerBg + ")" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inroText">
                                <h1><span className="red-text">We're</span> hiring</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
