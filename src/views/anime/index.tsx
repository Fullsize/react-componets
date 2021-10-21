/*
 * @Author: Fullsize
 * @Date: 2021-10-21 16:36:11
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-21 18:23:04
 * @FilePath: /react-context/src/views/anime/index.tsx
 */
import React, { useCallback } from "react";
import bg from './img/bg.jpeg'
import cover from './img/cover.jpeg'
import styles from './index.module.css';
const Anime: React.FC = () => {
	const handleMouseEnter = useCallback((e) => {
		e.target.play();
	}, [])
	const handleMouseLeave = useCallback((e) => {
		e.target.pause();
		e.target.currentTime = 0;
	}, [])
	return (
		<>
			<div className={styles['main']}>
				<button></button>
			</div>
			<h2 className={styles['title']}>效果一</h2>
			<div className={styles['main']}>

				<div className={styles['video-constainer']}>
					<video
						className={styles['video']}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						src="https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4"></video>
				</div>
				<div className={styles['video-constainer']}>
					<video
						className={styles['video']}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						src="https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4"></video>
				</div>
			</div>
			<h2 className={styles['title']}>效果二</h2>
			<div className={styles['main']}>
				<div className={styles["cover"]}>
					<img className={styles["img"]} src={cover} alt="" />
					<div className={styles["context"]}>
						<h2>大桥</h2>
					</div>
				</div>
				<div className={styles["cover"]}>
					<img className={styles["img"]} src={cover} alt="" />
					<div className={styles["context"]}>
						<h2>大桥</h2>
					</div>
				</div>
			</div>
		</>
	)
}

export default Anime;