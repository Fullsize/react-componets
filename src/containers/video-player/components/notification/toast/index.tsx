/*
 * @Author: Fullsize
 * @Date: 2021-10-08 15:20:49
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-11 14:21:49
 * @FilePath: /react-context/src/containers/video-player/components/notification/toast/index.tsx
 */
import React, { useEffect, useRef } from "react";
import { Notification } from '../../../context/type';
import close from '../../../img/close.png'
import styles from './index.module.css';
interface Props {
	notice: Notification;
	destroy?: (t?: string) => void;
}

const noop = () => { };
const Toast: React.FC<Props> = ({ notice, destroy }) => {
	const { timeStamp, content, duration } = notice;
	const intervalRef: any = useRef(null);
	useEffect(() => {
		if (duration === Infinity) {
			return noop;
		}
		intervalRef.current = setTimeout(() => {
			clearTimeout(intervalRef.current);
			destroy?.(timeStamp);
		}, duration);
		return (): void => clearTimeout(intervalRef.current);
	}, [destroy, duration, timeStamp]);
	return (
		<div className={styles['constainer']}>
			<img
				className={styles['icon']}
				onClick={() => {
					destroy?.(timeStamp);
				}}
				src={close}
				alt=""
			/>
			<div>	{content}</div>
		</div>
	)
}
export default Toast;