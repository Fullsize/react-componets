/*
 * @Author: Fullsize
 * @Date: 2021-10-08 10:13:10
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-11 11:02:58
 * @FilePath: /react-context/src/containers/video-player/components/rate/index.tsx
 */
import React, { useContext, useCallback } from "react";
import styles from './index.module.css';
import PlayContext from '../../context/context-manager';
const RateList: React.FC = () => {
	const player = useContext(PlayContext);
	const { states: { playbackRate, rates, modal }, controls: { changeRate }, dispatch } = player;
	const handClickRate = useCallback((e, item) => {
		if (playbackRate === item) {
			return false;
		}
		e.preventDefault();
		changeRate(item);
		return false;
	}, [changeRate, playbackRate])
	const handClickParent = useCallback(() => {
		modal && dispatch({
			type: 'custom', custom: {
				modal: { ...modal, enable: !modal.enable }
			}
		})
	}, [dispatch, modal])
	return (
		<div className={styles['constainer']} onClick={handClickParent}>
			{rates.map((item) => (
				<div
					className={`${styles['rate']} ${playbackRate === item ? styles['rate--active'] : ''}`}
					onClick={(e) => handClickRate(e, item)}
					key={item}
				>
					{item}X
				</div>
			))}
		</div>
	)
}
export default RateList;