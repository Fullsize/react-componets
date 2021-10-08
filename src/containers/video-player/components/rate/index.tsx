/*
 * @Author: Fullsize
 * @Date: 2021-10-08 10:13:10
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-08 11:07:18
 * @FilePath: /react-context/src/containers/video-player/components/rate/index.tsx
 */
import React, { useContext, useCallback } from "react";
import styles from './index.module.css';
import PlayContext from '../../context/context-manager';
const RateList: React.FC = () => {
	const player = useContext(PlayContext);
	const { states: { playbackRate, rates, modal }, controls: { changeRate }, dispatch } = player;
	const handClickRate = useCallback((item) => {
		if (playbackRate === item) {
			return false;
		}
		changeRate(item);
		if (modal) {
			dispatch({ type: 'custom', custom: { modal: { ...modal, enable: false } } });
		}

	}, [changeRate, dispatch, modal, playbackRate])
	return (
		<div className={styles['constainer']}>
			{rates.map((item) => (
				<div
					className={`${styles['rate']} ${playbackRate === item ? styles['rate--active'] : ''}`}
					onClick={() => handClickRate(item)}
				>
					{item}X
				</div>
			))}
		</div>
	)
}
export default RateList;