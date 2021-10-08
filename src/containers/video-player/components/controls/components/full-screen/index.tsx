/*
 * @Author: Fullsize
 * @Date: 2021-09-28 17:33:16
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-08 16:28:14
 * @FilePath: /react-context/src/containers/video-player/components/controls/components/full-screen/index.tsx
 */
import React, { useCallback, useContext } from "react";
import screenfull from 'screenfull';
import PlayerContext from "../../../../context/context-manager";
import Button from '../../../button';
import fullscreen from '../../../../img/full_screen.png';
import styles from './index.module.css';
import { checkIOS } from '../../../../utils'

const PageFull: React.FC = () => {
	const player = useContext(PlayerContext);
	const { videoRef } = player;
	const handClick = useCallback(() => {
		if (videoRef.current) {
			if (checkIOS()) {
				videoRef.current.webkitEnterFullscreen && videoRef.current.webkitEnterFullscreen()
			} else {
				if (screenfull.isEnabled) {
					screenfull.toggle(videoRef.current);
				}
			}
		}


	}, [videoRef])
	return (
		<Button className={styles['btn']} onClick={handClick}>
			<img className={styles['icon']} src={fullscreen} alt="" />
		</Button>
	)
}
export default PageFull;