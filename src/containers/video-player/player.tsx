/*
 * @Author: Fullsize
 * @Date: 2021-10-08 15:49:58
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-08 15:58:35
 * @FilePath: /react-context/src/containers/video-player/player.tsx
 */
import React, { useContext } from "react";
import { PropsType } from './type';
import PlayerContext from './context/context-manager'
import Video from './components/video';
import VideoControls from './components/controls'
import Domain from "./components/domain";
import ErrorPage from "./components/error";
import styles from './index.module.css';
const VideoPlayer: React.FC<PropsType> = (props) => {
	const player=useContext(PlayerContext);
	const {ref}=player;
	return (
		<div className={styles['container']} ref={ref}>
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