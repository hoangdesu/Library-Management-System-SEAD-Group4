import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment } from "../redux/reducers/counter";

export default function Counter() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter</h2>
            <div>
                <button onClick={() => dispatch(Decrement(1))}>-</button>
                <span>{counter.count}</span>
                <button onClick={() => dispatch(Increment(1))}>+</button>
            </div>
        </div>
    )
}