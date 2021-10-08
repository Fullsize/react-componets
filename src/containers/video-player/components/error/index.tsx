/*
 * @Author: Fullsize
 * @Date: 2021-10-08 14:30:32
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-08 14:56:24
 * @FilePath: /react-context/src/containers/video-player/components/error/index.tsx
 */
import React, { useContext } from "react";
import Button from '../button';
import PlayContext from '../../context/context-manager';
import styles from './index.module.css';
const ErrorPage: React.FC = () => {
	const player = useContext(PlayContext);
	const { states: { networkError } } = player;
	const handClickBtn = () => {
		window.location.reload();
		return false;
	}

	return (
		<>
			{networkError && (
				<div className={styles['constainer']}>
					<p className={styles['text']}>{networkError.message ?? '网络连接异常,请检查网络设置'}</p>
					<Button
						className={styles['btn']}
						onClick={handClickBtn}
					>
						刷新重试
					</Button>
				</div>
			)}
		</>
	)
}
export default ErrorPage;