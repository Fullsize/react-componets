/*
 * @Author: Fullsize
 * @Date: 2021-10-08 15:49:58
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-11 11:40:03
 * @FilePath: /react-context/src/containers/video-player/player.tsx
 */
import React, { useContext, useCallback, useEffect } from "react";
import { PropsType } from './type';
import PlayerContext from './context/context-manager'
import Video from './components/video';
import VideoControls from './components/controls'
import Domain from "./components/domain";
import ErrorPage from "./components/error";
import styles from './index.module.css';
let timer: any = null;
const VideoPlayer: React.FC<PropsType> = (props) => {
	const player = useContext(PlayerContext);
	const { ref, dispatch, states: { isMotion, modal, paused } } = player;

	const handClick = useCallback(() => {
		dispatch({
			type: 'custom', custom: {
				isMotion: true
			}
		})
	}, [dispatch])
	useEffect(() => {
		console.log(30,isMotion,!paused)
		if (isMotion) {
			clearTimeout(timer)
			timer = setTimeout(() => {
				dispatch({
					type: 'custom', custom: {
						isMotion: !!modal?.enable || false
					}
				})
			}, 3000)
		}
	}, [dispatch, modal?.enable, isMotion, paused])
	return (
		<div className={styles['container']} ref={ref} onClick={handClick}>
			<div className={styles['video-container']}>
				<Video />
			</div>
			<div className={styles['operation']}>
				<div className={styles['operation_content']}>
					<div className={styles['gesture']}>
					</div>
					<Domain />
				</div>
				<VideoControls />
			</div>
			<ErrorPage />
		</div>
	)
}
export default VideoPlayer;