/*
 * @Author: Fullsize
 * @Date: 2021-09-16 11:40:40
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-11 12:01:05
 * @FilePath: /react-context/src/containers/video-player/components/video/index.tsx
 */
import React, { useCallback, useContext, useMemo, useEffect } from "react";
import PlayerContext from "../../context/context-manager";
import HLSSource from "../hls";
import styles from './index.module.css';
const Video: React.FC = () => {
	const player = useContext(PlayerContext);
	const { states, videoRef, dispatch, controls: { sendNotification } } = player
	const onTimeUpdate = useCallback((e) => {
		dispatch({ type: 'currentTime', currentTime: e.target.currentTime })

	}, [dispatch])
	const onPlaying = useCallback((e) => {
		dispatch({ type: 'custom', custom: { modal: { type: 'loading', enable: false } } })
	}, [dispatch])
	const onPlay = useCallback((e) => {
		console.log('onPlay', e)
		dispatch({ type: 'paused', paused: false })
	}, [dispatch])
	const onPause = useCallback((e) => {
		console.log('onPause', e)
		dispatch({ type: 'paused', paused: true })
	}, [dispatch])
	const onLoadedData = useCallback((e) => {
		console.log('LoadedData', videoRef.current?.readyState)
		dispatch({ type: 'duration', duration: e.target.duration })
	}, [dispatch, videoRef])
	const onProgress = useCallback((e) => {
		console.log('onProgress', e.target.buffered)
		dispatch({ type: 'custom', 'custom': { buffered: e.target.buffered } })
	}, [dispatch])
	const onWaiting = useCallback((e) => {
		console.log('onWaiting')
		dispatch({ type: 'custom', custom: { modal: { type: 'loading', enable: true } } })

	}, [dispatch])
	const onRateChange = useCallback((e) => {
		sendNotification && sendNotification(`已为您切换至${e.target.playbackRate}`)
		console.log('onRateChange', e.target.playbackRate)
	}, [sendNotification])
	useEffect(() => {
		window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
			if (window.orientation === 180 || window.orientation === 0) {
				console.log('竖屏状态！');
			}
			if (window.orientation === 90 || window.orientation === -90) {
				console.log('横屏状态！');
			}
		}, false);
	}, [])
	return useMemo(() => {
		return (
			<div className={styles['video-container']}>
				<video
					className={styles['video-ref']}
					ref={videoRef}
					controls={false}
					webkit-playsinline="true"
					playsInline={true}
					x5-video-player-type='h5'
					onTimeUpdate={onTimeUpdate}
					onPlay={onPlay}
					onPause={onPause}
					onPlaying={onPlaying}
					onProgress={onProgress}
					onLoadedData={onLoadedData}
					onWaiting={onWaiting}
					onRateChange={onRateChange}
				>
					{states.sourceType === '' && (<source src={states.src} />)}
					{states.sourceType === 'application/x-mpegURL' && <HLSSource />}
				</video>
			</div>
		)
	}, [videoRef, onTimeUpdate, onPlay, onPause, onPlaying, onProgress, onLoadedData, onWaiting, onRateChange, states.sourceType, states.src])

}
export default Video;