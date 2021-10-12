/*
 * @Author: Fullsize
 * @Date: 2021-09-17 10:12:01
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-11 11:40:10
 * @FilePath: /react-context/src/containers/video-player/components/controls/index.tsx
 */
import React, { useContext} from "react";
import PlayContext from '../../context/context-manager';
import styles from './index.module.css';
import ProgressBar from './components/progress-bar'
import PlayButton from './components/play-button';
import MuteButton from './components/mute-button';
import Picture from './components/picture-button';
import TimeBoard from "./components/time-board";
import PlaybackRateButton from "./components/playbackRate-button";
import Resolution from "./components/resolution-button";
import PageFull from './components/full-screen';
import classnames from 'classnames';
const VideoControls: React.FC = () => {
	const player = useContext(PlayContext);
	const { states: { modal, paused, isMotion } } = player;
	return (
		<div className={classnames(styles['container'], {
			[`${styles['container--modal']}`]: modal?.type !== 'loading' && modal?.enable,
			[`${styles['container--toggle']}`]: !isMotion && !paused
		})}>
			<ProgressBar />
			<div className={styles['container-cotnrols']}>
				<div className={styles['row']}>
					{/* 播放按钮 */}
					<PlayButton />
					{/* 时间面板 */}
					<TimeBoard />
				</div>
				<div className={styles['row']}>
					{/* 播放倍速 */}
					<PlaybackRateButton />
					{/* 清晰度 */}
					<Resolution />
					{/* 声音按钮 */}
					<MuteButton />
					{/* 画中画 */}
					<Picture />
					{/* 全屏 */}
					<PageFull />
				</div>
			</div>
		</div>
	)
}
export default VideoControls;