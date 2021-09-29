/*
 * @Author: Fullsize
 * @Date: 2021-09-29 15:40:34
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-29 15:44:07
 * @FilePath: /react-context/src/404.tsx
 */
import React from "react";
import { Link } from 'react-router-dom';
const NotFound=()=>{
	return (
		<div>
			<h1 style={{'textAlign':'center'}}>404</h1>
			<Link to='/'>去首页</Link>
		</div>
	)
}
export default NotFound;