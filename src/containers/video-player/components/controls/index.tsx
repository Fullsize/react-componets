/*
 * @Author: Fullsize
 * @Date: 2021-09-17 10:12:01
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-24 16:12:18
 * @FilePath: /react-context/src/containers/video-player/components/controls/index.tsx
 */
import React from "react";
import styles from './index.module.css';
import ProgressBar from './components/progress-bar'
import PlayButton from './components/play-button';
import MuteButton from './components/mute-button';
import RouteButton from './components/route-button'
const VideoControls = () => {
	return (
		<div className={styles['container']}>
			<ProgressBar />
			<div>
				<PlayButton />
				<MuteButton />
				<RouteButton />
			</div>
		</div>
	)
}
export default VideoControls;