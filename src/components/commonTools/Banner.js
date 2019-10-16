import React, { Component } from 'react';
// style={{ backgroundImage: "url(" + bannerBg + ")" }}
export default class Banner extends Component {
    render() {
        return (
            <section id={this.props.id} className="banner middle-content" style={{ backgroundImage: `url(${this.props.backgroundImage})` }}>
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
