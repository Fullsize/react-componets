/*
 * @Author: Fullsize
 * @Date: 2021-09-17 10:15:29
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-08 11:27:20
 * @FilePath: /react-context/src/containers/video-player/components/controls/components/progress-bar/index.tsx
 */
import React, { useCallback, useContext, useMemo, useState, useRef, useEffect } from "react";
import PlayerContext from "../../../../context/context-manager";
import styles from './index.module.css';
const getBufferedEnd = (currentTime: number, buffered: any) => {
	if (!buffered) {
		return 0;
	}
	for (let i = buffered.length - 1; i >= 0; i -= 1) {
		const end = buffered.end(i);
		if (currentTime <= end && buffered.start(i) <= currentTime) {
			return end;
		}
	}
	return 0;
};

const getBufferedTranslateX = ({ buffered, currentTime, sliding, duration }: any) => {
	if (duration <= 0 || sliding) {
		return '-100%';
	}
	const e = getBufferedEnd(currentTime, buffered);
	return `${((100 * e) / duration).toFixed(1)}%`;
};
const getTrackTranslateX = ({ duration, currentTime, value, sliding }: any) => {
	if (duration < 0) {
		return '0';
	}
	if (duration === 0) {
		return '-100%';
	}
	return `${((100 * (sliding ? value : currentTime)) / duration).toFixed(1)}%`;
};

const getValue = (e: any, rect: any, duration: number) => {
	const w = e.clientX - rect.left;
	if (w <= 0) {
		return 0;
	}
	if (w >= rect.width) {
		return duration;
	}
	return Math.round((duration * (e.clientX - rect.left)) / rect.width);
};

const ProgressBar: React.FC = () => {
	const player = useContext(PlayerContext);
	const { states: { currentTime, duration, buffered }, controls: { changeCurrentTime, pause } } = player;
	const [value, setValue] = useState(currentTime);
	const slidRef = useRef<HTMLDivElement>(null)
	const slidTrackRef = useRef<HTMLDivElement>(null)
	const [sliding, setSliding] = useState(false);
	const updateRef = useRef<any>(null);
	const rectangleRef = useRef<any>(null);
	const trackTranslateX = getTrackTranslateX({ currentTime, duration, value, sliding })
	const bufferedTranslateX = getBufferedTranslateX({ buffered, currentTime, sliding, duration });
	const handClick = useCallback((e: any) => {
		e.preventDefault();
		const rect = e.currentTarget.getBoundingClientRect();
		const v = getValue(e, rect, duration);
		setValue(v)
		changeCurrentTime(v)
		setSliding(false);
		console.log('click', v)
	}, [changeCurrentTime, duration])
	const update = useCallback(() => {
		if (!updateRef || !updateRef.current) {
			return;
		}
		if (undefined !== updateRef.current.value) {
			setValue(updateRef.current.value);
		}
		updateRef.current = null;
	}, []);
	const handTouchStart = useCallback((e) => {
		var c = e.touches[0];
		if (slidRef.current) {
			const { left, width } = slidRef.current.getBoundingClientRect();
			rectangleRef.current = { left, width }
		}
		const v = getValue(c, rectangleRef.current, duration);
		if (updateRef.current) {
			updateRef.current.value = v;
		} else {
			updateRef.current = { value: v };
			window.requestAnimationFrame(update);
		}
	}, [duration, update])
	const handTouchMove = useCallback((e) => {
		var c = e.touches[0];
		if (!rectangleRef || !rectangleRef.current || !updateRef) {
			return;
		}
		if (slidRef.current) {
			const { left, width } = slidRef.current.getBoundingClientRect();
			rectangleRef.current = { left, width }
		}
		const v = getValue(c, rectangleRef.current, duration);
		pause()
		setSliding(true)
		if (updateRef.current) {
			updateRef.current.value = v;
		} else {
			updateRef.current = { value: v };
			window.requestAnimationFrame(update);
		}
	}, [duration, pause, update])
	useEffect(() => {
		setSliding(false)
	}, [currentTime])
	const handTouchEnd = useCallback((e) => {
		e.preventDefault();
		update();
		console.log('handTouchEnd', value, e)
		changeCurrentTime(value)

	}, [changeCurrentTime, update, value])

	return useMemo(() => {
		return (
			<div className={styles['constainer']}>
				<div className={styles['slider']} ref={slidRef} onClick={handClick}>
					{/* 加载条 */}
					<div
						className={styles['slider_loading']}
						style={{
							'width': `${bufferedTranslateX}`
						}}>
					</div>
					{/* 进度条 */}
					<div
						className={styles['slider_current']}
						ref={slidTrackRef}
						onTouchStart={handTouchStart}
						onTouchMove={handTouchMove}
						onTouchEnd={handTouchEnd}
						style={{
							'width': `${trackTranslateX}`
						}}>
					</div>
				</div>
			</div>
		)
	}, [bufferedTranslateX, handClick, handTouchEnd, handTouchMove, handTouchStart, trackTranslateX])

}
export default ProgressBar;