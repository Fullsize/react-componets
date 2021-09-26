/*
 * @Author: Fullsize
 * @Date: 2021-09-16 09:53:35
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-16 10:31:24
 * @FilePath: /react-context/src/containers/react-context/index.tsx
 */
import React, { useState } from 'react';
import { MyContext } from './my-context';
import Child from './Child';
const fetchData = () => {
	return new Promise((resolve, reject) => {
			setTimeout(() => {
					resolve(1);
			})
	});
}
const ContextPro: React.FC = () => {
	
	const [step, setStep] = useState(0);
	const [count, setCount] = useState(0);
	const [number, setNumber] = useState(0);
	return (
		<MyContext.Provider value={{ setStep, setCount, setNumber,fetchData }} >
			  <Child step={step} number={number} count={count} />
		</MyContext.Provider>
	)
}

export default ContextPro;