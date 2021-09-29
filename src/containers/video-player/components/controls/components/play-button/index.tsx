/*
 * @Author: Fullsize
 * @Date: 2021-09-17 11:36:28
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-28 18:13:38
 * @FilePath: /react-context/src/containers/video-player/components/controls/components/play-button/index.tsx
 */
import React, { useContext, useMemo } from "react";
import PlayerContext from "../../../../context/context-manager";
import PlayIcon from '../../../../img/play.png';
import pause from '../../../../img/pause.png';
import Button from '../../../button'
import styles from './index.module.css';
const PlayButton: React.FC = () => {
	const player = useContext(PlayerContext);
	const { states: { paused }, controls } = player;
	return useMemo(() => {
		return (
			<>
				<Button className={styles['btn']} onClick={paused ? controls.play : controls.pause}>
					<img className={styles['icon']} src={paused ? pause : PlayIcon} alt="" />
				</Button>
			</>
		)
	}, [controls.pause, controls.play, paused])

}
export default PlayButton;