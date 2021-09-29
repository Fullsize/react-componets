/*
 * @Author: Fullsize
 * @Date: 2021-09-28 15:00:50
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-28 15:07:03
 * @FilePath: /react-context/src/containers/video-player/components/button/index.tsx
 */
import React from "react";
import styles from './index.module.css';
interface Props {
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
}
const Button: React.FC<Props> = (props) => {
	const handClick = (e:any) => {
		e.preventDefault()
		props.onClick && props.onClick()
		return false;
	}
	return (
		<button
			className={`${styles['btn']} ${props.className ?? ''}`}
			onClick={handClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	)
}
export default Button;