import React, {Component} from "react";

class welcomeClass extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <h1> Welcome, {this.props.name} </h1>
        ) }

}

export default welcomeClass;