import React, { Component } from 'react';
// import intialCount from './index';

export default class Bomb extends Component{

    state = {
        secondsLeft: this.props.initialCount
    }
    
    


    render(){
        let secondsLeft = this.state.secondsLeft
        // console.log(this.props)
        if (secondsLeft !== 0) {
        return (<div>
            {secondsLeft} seconds left before I go boom!
        </div>)
        } else {
            return (<div>
                Boom!
            </div>)
        }
    }
}

