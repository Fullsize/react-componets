/*
 * @Author: Fullsize
 * @Date: 2021-09-23 10:03:47
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-28 16:52:57
 * @FilePath: /react-context/src/containers/video-player/components/controls/components/mute-button/index.tsx
 */
import React, { useContext } from "react";
import PlayerContext from "../../../../context/context-manager";
import Button from '../../../button';
import styles from './index.module.css';
import volume from '../../../../img/volume.png'
import muted from '../../../../img/muted.png'
const MuteButton: React.FC = () => {
	const play = useContext(PlayerContext);
	const { videoRef, controls: { toggleMute } } = play;

	return (
		<>
			<Button className={styles['btn']} onClick={toggleMute}>
				<img className={styles['icon']} src={videoRef.current?.muted ? muted : volume} alt="" />
			</Button>
		</>
	)

}
export default MuteButton;
