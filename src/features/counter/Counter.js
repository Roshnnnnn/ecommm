import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	decrement,
	increment,
	incrementByAmount,
	incrementAsync,
	incrementIfOdd,
	selectCount,
} from "./counterSlice";

export function Counter() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState("2");

	const incrementValue = Number(incrementAmount) || 0;

	return <div></div>;
}
