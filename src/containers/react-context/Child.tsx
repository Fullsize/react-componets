/*
 * @Author: Fullsize
 * @Date: 2021-09-16 10:13:13
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-16 10:33:03
 * @FilePath: /react-context/src/containers/react-context/Child.tsx
 */
import React, { useContext, useEffect } from "react";
import { MyContext } from "./my-context";
import { Button } from 'antd';
interface Props {
	step: number;
	number: number;
	count: number;
}
const Child: React.FC<Props> = (props) => {
	const { setStep, setCount, setNumber, fetchData } = useContext(MyContext);
	useEffect(() => {
		fetchData().then((res: any) => {
			console.log(`FETCH DATA: ${res}`);
		})
	}, [fetchData])
	return (
		<div>
			<p>step is : {props.step}</p>
			<p>number is : {props.number}</p>
			<p>count is : {props.count}</p>
			<br />
			<Button onClick={() => setStep(props.step + 1)}>step++</Button>
			<Button onClick={() => setNumber(props.number + 1)}>number++</Button>
			<Button onClick={() => setCount(props.count + 1)}>count++</Button>
		</div>
	)
}
export default Child;