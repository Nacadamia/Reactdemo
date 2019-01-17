import React, {Component} from "react";

class WelcomeClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        }
    }

    render() {
        return (
            <div>
            <h1> Welcome, {this.props.name} </h1>
            <h2> Heute ist {this.state.date.toLocaleString()} </h2>
            </div>
        ) }

}

export default WelcomeClass;