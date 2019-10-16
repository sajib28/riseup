import React, { Component } from 'react'
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
class About extends Component {
    render() {
        return (
            <div className="about">
                <Nav />
                <div>
                    About Page
            </div>
            <Footer/>
            </div>
        )
    }
}
export default About;