/*
 * @Author: Fullsize
 * @Date: 2021-09-28 17:33:16
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-28 17:45:08
 * @FilePath: /react-context/src/containers/video-player/components/controls/components/full-screen/index.tsx
 */
import React from "react";
import Button from '../../../button';
import fullscreen from '../../../../img/full_screen.png';
import styles from './index.module.css';
const PageFull: React.FC = () => {
	return (
		<Button className={styles['btn']}>
			<img className={styles['icon']} src={fullscreen} alt="" />
		</Button>
	)
}
export default PageFull;