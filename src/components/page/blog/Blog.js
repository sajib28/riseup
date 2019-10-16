import React, { Component } from 'react'
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Banner from '../../commonTools/Banner';
import BackgroundImage from '../../../assets/img/app.jpg';
class Blog extends Component {
    render() {
        return (
            <div className="blog">
               <Nav/>
               <Banner id="blogBanner" backgroundImage={BackgroundImage}/>
               <div className="demo">
                   demo

               </div>
               <Footer/>
            </div>
        )
    }
}
export default Blog;