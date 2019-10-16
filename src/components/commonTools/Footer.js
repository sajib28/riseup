import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <form className="form-inline center">
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                           <h1>Company logo</h1>
                           <p>&copy; Riseup Labs. All Rights Reserved</p>
                        </div>
                        <div className="col-lg-3">
                            <h3>Goto</h3>
                            <ul className="list-unstyled">
                                <li><a href="">Home</a></li>
                                <li><a href="">Service</a></li>
                                <li><a href="">Work</a></li>
                                <li><a href="">Press</a></li>
                                <li><a href="">About</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                        <h3>Enterprise</h3>
                        <ul className="list-unstyled">
                            <li><a href="">Home</a></li>
                            <li><a href="">Service</a></li>
                            <li><a href="">Work</a></li>
                            <li><a href="">Press</a></li>
                            <li><a href="">About</a></li>
                        </ul>
                        </div>
                        <div className="col-lg-2">
                        <h3>Social</h3>
                        <ul className="list-unstyled">
                            <li><a href="">Facebook</a></li>
                            <li><a href="">Twitter</a></li>
                            <li><a href="">Linkedin</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;