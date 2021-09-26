/*
 * @Author: Fullsize
 * @Date: 2021-09-16 11:40:40
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-24 18:01:44
 * @FilePath: /react-context/src/containers/video-player/components/video/index.tsx
 */
import React, { useCallback, useContext, useMemo } from "react";
import PlayerContext from "../../context/context-manager";
import HLSSource from "../hls";
const Video: React.FC = () => {
	const player = useContext(PlayerContext);
	const { states, videoRef, dispatch, } = player
	const onTimeUpdate = useCallback((e) => {
		dispatch({ type: 'currentTime', currentTime: e.target.currentTime })

	}, [dispatch])
	const onPlaying = useCallback((e) => {
		dispatch({type:'custom',custom:{isLoading:false}})
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
	const onWaiting=useCallback((e)=>{
		console.log('onWaiting')
		dispatch({type:'custom',custom:{isLoading:true}})
	},[dispatch])
	return useMemo(() => {
		return (
			<>
				<video
					ref={videoRef}
					controls={false}
					webkit-playsinline="true"
					playsInline={true}
					x5-video-player-type='h5'
					style={{ 'width': states.width }}
					onTimeUpdate={onTimeUpdate}
					onPlay={onPlay}
					onPause={onPause}
					onPlaying={onPlaying}
					onProgress={onProgress}
					onLoadedData={onLoadedData}
					onWaiting={onWaiting}
				>
					{states.sourceType === '' && (<source src={states.src} />)}
					<HLSSource />
				</video>
			</>
		)
	}, [videoRef, states.width, states.sourceType, states.src, onTimeUpdate, onPlay, onPause, onPlaying, onProgress, onLoadedData, onWaiting])

}
export default Video;