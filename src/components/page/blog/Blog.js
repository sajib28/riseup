import React, { Component } from 'react'
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Banner from '../../commonTools/Banner';
class Blog extends Component {
    render() {
        return (
            <div className="blog">
               <Nav/>
               <Banner/>
               <div className="demo">
                   demo

               </div>
               <Footer/>
            </div>
        )
    }
}
export default Blog;