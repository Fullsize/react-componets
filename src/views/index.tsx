/*
 * @Author: Fullsize
 * @Date: 2021-09-15 17:48:12
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-26 16:41:02
 * @FilePath: /react-context/src/views/index.tsx
 */
import React,{useContext} from "react";
import { observer } from "mobx-react-lite";
import RootContext from '../stores/root_contxt';
const MainContext: React.FC =observer ((props) => {
	const {app}=useContext(RootContext)
	return (
		<>
			<div>{app.count}</div>
			<button onClick={app.addCount}>增加</button>
		</>
	)
})
export default MainContext