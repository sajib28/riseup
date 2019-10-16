import React, { Component } from 'react'

class DemoState extends Component {
    constructor(props){
        super(props)
        this.state = {
            number:0
        }

    }
    counter(){
        this.setState({
            number:this.state.number+1
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.number}</h2>
                <button onClick ={()=>this.counter()} className="btn">Submit</button>
            </div>
        )
    }
}
export default DemoState;
