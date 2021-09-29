/*
 * @Author: Fullsize
 * @Date: 2021-09-24 16:41:20
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-29 16:33:05
 * @FilePath: /react-context/src/containers/video-player/components/loading/index.tsx
 */
import React, { useContext } from "react";
import styles from './index.module.css';
import loading from '../../img/video-loading.gif';
const Loading: React.FC = () => {
	return (
		<div className={styles['constainer']}>
			<img className={styles['icon']} src={loading} alt="" />
		</div>
	)
}
export default Loading;