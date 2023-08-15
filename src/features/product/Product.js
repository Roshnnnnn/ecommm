import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "./ProductSlice";
import styles from "./Counter.module.css";

export function Counter() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();

	return <div></div>;
}
