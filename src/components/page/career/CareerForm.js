import React, { Component, Fragment } from 'react'
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Banner from '../../commonTools/Banner';
import { Link } from "react-router-dom";
import $ from 'jquery';
// import Accordion from '../../commonTools/Accordion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
class CareerForm extends Component {
    componentDidMount(){
        $('.rul-btn').each(function(){

            var text = $(this).text().split(' ');
            if(text.length < 2)
                return;
            text[0] = '<span class="firstWord">'+text[0]+'</span>';
            $(this).html( text.join(' ') );
        
        });
    }
    render() {
        return (
            <div className="page career">
                <Nav />
                <Banner />
                <section className="cv-form">
                    <div className="container">
                        <form>
                            <div className="row">
                                <div className="col-lg-3">
                                    <h3>Demo Title</h3>
                                    <p>Description</p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Example label</label>
                                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
                                            </div>
                                            <div className="form-group">
                                                <label>Another label</label>
                                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                                            </div>
                                            <div className="form-group">
                                                <label>Another label</label>
                                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                                            </div>
                                            <div className="form-group">
                                                <label>Photo</label>
                                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-3">
                                    <h3>CV / Resume</h3>
                                    <p>Description</p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Photo</label>
                                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-3">
                                    <h3>Cover Letter</h3>
                                    <p>Description</p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Example label</label>
                                                <textarea className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 d-block text-center">
                                    <button type="submit" className="rul-btn">Submit Application</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <Footer />
            </div >
        )
    }
}
export default CareerForm;