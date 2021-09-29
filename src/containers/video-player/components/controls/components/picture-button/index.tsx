/*
 * @Author: Fullsize
 * @Date: 2021-09-28 17:18:31
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-28 17:55:46
 * @FilePath: /react-context/src/containers/video-player/components/controls/components/picture-button/index.tsx
 */
import React, { useCallback, useContext } from "react";
import Button from '../../../button';
import PlayerContext from "../../../../context/context-manager";
import picture from '../../../../img/picture.png';
import styles from './index.module.css';
const Picture: React.FC = () => {
	const player = useContext(PlayerContext);
	const { videoRef } = player
	const handClick = useCallback(() => {
		if (!document.pictureInPictureElement) {
			videoRef.current && videoRef.current.requestPictureInPicture()
				.catch(error => {
					// 视频无法进入画中画模式
				});
		} else {
			document.exitPictureInPicture()
				.catch(error => {
					// 视频无法退出画中画模式
				});
		}
	}, [videoRef])
	return (
		<>
			{document.pictureInPictureEnabled && <Button onClick={handClick}>
				<img className={styles['icon']} src={picture} alt="" />
			</Button>}
		</>

	)
}
export default Picture;