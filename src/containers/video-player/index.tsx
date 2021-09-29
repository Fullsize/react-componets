/*
 * @Author: Fullsize
 * @Date: 2021-09-16 10:58:34
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-28 17:55:08
 * @FilePath: /react-context/src/containers/video-player/index.tsx
 */
import React from "react";
import { PropsType } from './type';
import Video from './components/video';
import VideoControls from './components/controls'
import Child from "./Child";
import Loading from "./components/loading";
import styles from './index.module.css';
const VideoPlayer: React.FC<PropsType> = (props) => {
	return (
		<Child {...props}>
			<div className={styles['container']}>
				<div className={styles['video-container']}>
					<Video />
				</div>
				<div className={styles['operation']}>
					<div className={styles['operation_content']}>
						<div className={styles['gesture']}>

						</div>
						<div className={styles['functional']}>
							<Loading />
						</div>
					</div>
					<VideoControls />
				</div>

			</div>
		</Child>
	)
}
export default VideoPlayer;