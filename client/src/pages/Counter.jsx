import React from "react";
import { Component } from "react";
import { connect, useSelector } from "react-redux";
import { Decrement, Increment } from "../redux/reducers/counter";

class Counter extends Component {

    increment = () => {
        this.props.dispatch(Increment(1))
    }

    decrement = () => {
        this.props.dispatch(Decrement(1))
    }
    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.counter.count
    }
}

export default connect(mapStateToProps)(Counter)