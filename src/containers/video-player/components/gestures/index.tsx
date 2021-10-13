/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: Fullsize
 * @Date: 2021-10-11 15:27:37
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-13 15:08:37
 * @FilePath: /react-context/src/containers/video-player/components/gestures/index.tsx
 */
import React, { useRef, useEffect, useContext, useState, useCallback } from "react";
import PlayContext from '../../context/context-manager';
import _ from 'lodash';
import { formatTime } from '../../utils';
import Hammer from 'hammerjs';
import styles from './index.module.css';
const getTrackTranslateX = ({ duration, currentTime }: any) => {
	if (duration < 0) {
		return '0';
	}
	if (duration === 0) {
		return '-100%';
	}
	return `${((100 * (currentTime)) / duration).toFixed(1)}%`;
};
const Gestures: React.FC = () => {
	const oldPosition: any = useRef(null);
	const player = useContext(PlayContext);
	const { states: { duration, currentTime }, controls: { changeCurrentTime, pause }, dispatch } = player;
	const gestureRef = useRef(null);
	const [value, setValue] = useState(0);
	const [siding, setSiding] = useState(true)
	const [mounted, setMounted] = useState(false);
	const [showTime, setShowTime] = useState(false);
	const init = useCallback(() => {
		pause();
		setSiding(false)
		setShowTime(true)
	}, [pause])
	// 开始
	const handPanStart = useCallback((e: any) => {
		e.preventDefault();

		setValue(0)
		dispatch({
			type: 'custom', custom: {
				isMotion: true
			}
		})
		oldPosition.current = { x: e.deltaX, y: e.deltaY, type: e.type }
	}, [dispatch])
	// 右
	const handPanRight = useCallback((e: any) => {
		e.preventDefault();
		init()
		setValue((val) => val + 1)
	}, [init])
	// 左滑
	const handPanLeft = useCallback((e: any) => {
		e.preventDefault();
		init()
		setValue((val) => val - 1)
	}, [init])
	// 结束
	const handPanEnd = useCallback(() => {
		setSiding(true)
		setValue(0);
		setShowTime(false)
	}, [])
	const hideSidTime = _.debounce(() => {

		dispatch({
			type: 'custom', custom: {
				isMotion: false
			}
		})
	}, 0)
	useEffect(() => {
		if (siding && mounted) {
			changeCurrentTime(currentValue >= duration ? duration : currentValue)
			setValue(0)
			hideSidTime()
		} else {
			console.log(70, currentTime)
		}
	}, [siding])
	useEffect(() => {
		if (!mounted && gestureRef.current) {
			let hammer: any = null;
			hammer = new Hammer(gestureRef.current);
			hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });
			hammer.on('panstart', (e: any) => handPanStart(e))
			hammer.on('panright', (e: any) => handPanRight(e))
			hammer.on('panleft', (e: any) => handPanLeft(e))
			hammer.on('panup', handPanEnd)
			hammer.on('pandown', handPanEnd)
			hammer.on('panend', (e: any) => handPanEnd())

			// hammer.on('pancancel', (e: any) => handPanEnd())
			setMounted(true)
		}

	}, [handPanEnd, handPanLeft, handPanRight, handPanStart, mounted])
	const currentValue = value + currentTime < 0 ? 0 : value + currentTime;
	const trackTranslateX = getTrackTranslateX({ duration, currentTime: currentValue >= duration ? duration : currentValue })
	return (
		<div className={styles['constainer']} ref={gestureRef}>
			{showTime && (
				<div className={styles['info']}>
					<h2 className={styles['duration']}>{formatTime(currentValue >= duration ? duration : currentValue)}</h2>
					<div className={styles['silder']}>
						<div style={{ 'width': trackTranslateX }} className={styles['sliderTrack']} />
					</div>
				</div>
			)}

		</div>
	)
}
export default Gestures;