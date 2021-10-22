/*
 * @Author: Fullsize
 * @Date: 2021-10-22 10:20:06
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-22 11:40:43
 * @FilePath: /react-context/src/views/anime/index.tsx
 */
import React, { useCallback, useEffect } from "react";
import bg from './img/bg.jpeg'
import cover from './img/cover.jpeg'
import styles from './index.module.css';
declare const window: any;
const Anime: React.FC = () => {
	const handleMouseEnter = useCallback((e) => {
		e.target.play();
	}, [])
	const handleMouseLeave = useCallback((e) => {
		e.target.pause();
		e.target.currentTime = 0;
	}, [])
	useEffect(() => {
		new window.Swiper(".mySwiper", {
			effect: "coverflow",
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: "auto",
			coverflowEffect: {
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});
	}, [])
	return (
		<>
			<div className={styles['main']}>
				<div className={styles['btns']}><button className={styles['btn']}>1233</button></div>

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
			<div className={styles["main"]} style={{ 'maxWidth': '500px', 'overflow': 'hidden', 'margin': '0 auto' }}>
				<div className="swiper mySwiper">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<img src={bg} alt="" />
						</div>
						<div className="swiper-slide">
							<img src={bg} alt="" />
						</div>
						<div className="swiper-slide">
							<img src={bg} alt="" />
						</div>
						<div className="swiper-slide">
							<img src={bg} alt="" />
						</div>
						<div className="swiper-slide">
							<img src={bg} alt="" />
						</div>
						<div className="swiper-slide">
							<img src={bg} alt="" />
						</div>
						<div className="swiper-slide">
							<img src={bg} alt="" />
						</div>
						<div className="swiper-slide">
							<img src={bg} alt="" />
						</div>
						<div className="swiper-slide">
							<img src={bg} alt="" />
						</div>
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</div>
		</>
	)
}

export default Anime;