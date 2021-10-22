/*
 * @Author: Fullsize
 * @Date: 2021-10-21 16:36:11
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-22 11:04:48
 * @FilePath: /react-context/src/views/anime/index.tsx
 */
import React, { useCallback } from "react";
import bg from './img/bg.jpeg'
import { Swiper, SwiperSlide } from "swiper/react";
import cover from './img/cover.jpeg'
import styles from './index.module.css';
import SwiperCore, {
	EffectCoverflow, Pagination
} from 'swiper';

import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
SwiperCore.use([EffectCoverflow, Pagination]);
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
						<h2 className={styles['title']}>大桥</h2>
					</div>
				</div>
				<div className={styles["cover"]}>
					<img className={styles["img"]} src={cover} alt="" />
					<div className={styles["context"]}>
						<h2>大桥</h2>
					</div>
				</div>
			</div>
			<div className={styles['main']}>
				<Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
					"rotate": 50,
					"stretch": 0,
					"depth": 100,
					"modifier": 1,
					"slideShadows": true
				}} pagination={true} className="mySwiper">
					<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" /></SwiperSlide>
					<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" /></SwiperSlide>
					<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" /></SwiperSlide>
					<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" /></SwiperSlide>
					<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" /></SwiperSlide>
					<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" /></SwiperSlide>
					<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" /></SwiperSlide>
					<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" /></SwiperSlide>
					<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" /></SwiperSlide>
				</Swiper>
			</div>
		</>
	)
}

export default Anime;