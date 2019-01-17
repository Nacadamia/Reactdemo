import React, {Component} from "react";

class WelcomeClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        }
    }

    componentWillMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
            <h1> Welcome, {this.props.name} </h1>
            <h2> Heute ist der {this.state.date
                                .toLocaleString('de-de', {day:'numeric', month: 'long', year:'numeric'})}
                                {this.state.date.toLocaleTimeString()} Uhr! </h2>
            </div>
        ) }

}

export default WelcomeClass;