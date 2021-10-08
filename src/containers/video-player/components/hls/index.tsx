/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: Fullsize
 * @Date: 2021-09-16 11:42:30
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-08 16:26:42
 * @FilePath: /react-context/src/containers/video-player/components/hls/index.tsx
 */
import React, { useContext, useEffect, useMemo, useState, useCallback } from "react";
import PlayerContext from "../../context/context-manager";
import { Player } from "../../context/type";
import Hls from 'hls.js';
let currentSrc = ''
const createHls = (player: Player): Hls => {
	// const hls = new Hls({
	//   loader: Loader,
	// });
	const hls = new Hls();
	const video = player.videoRef && player.videoRef.current;
	const source = player.states.src;
	hls.on(Hls.Events.ERROR, (e, data) => {
		// const {
		//   attributeRef,
		//   controls: { sendNotification },
		//   listeners,
		// } = player;
		const { type, fatal, details } = data;
		if (!fatal) return;
		if (type === Hls.ErrorTypes.NETWORK_ERROR) {
			// const { isChangingSource, changeLabel, onceNotify } = attributeRef.current;
			// if (isChangingSource) {
			//   attributeRef.current.isChangingSource = false;
			//   sendNotification(`请求失败，无法切换到${changeLabel}`);
			//   return;
			// }
			if (
				details === Hls.ErrorDetails.MANIFEST_LOAD_ERROR ||
				details === Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT
			) {
				// sendNotification('加载失败，试试切换线路', Infinity);
				return;
			}

			// if (!onceNotify) {
			//   sendNotification('播放卡顿，试试切换线路或清晰度', 20 * 1000);
			//   attributeRef.current.onceNotify = true;
			// }
		} else if (type === Hls.ErrorTypes.MEDIA_ERROR) {
			hls.recoverMediaError();
		} else {
			hls.destroy();
			// if (listeners.onError) {
			//   listeners.onError(
			//     {
			//       message: '播放器出错啦',
			//       data,
			//     },
			//     player
			//   );
			// }
		}
	});
	hls.once(Hls.Events.MANIFEST_PARSED, () => {
		video?.play();
	});
	hls.once(Hls.Events.MEDIA_ATTACHED, () => {
		hls.loadSource(source);

	});
	return hls;
};

const HLSSource: React.FC = () => {
	const player = useContext(PlayerContext);
	const {
		videoRef,
		states: { src, sourceType = 'application/x-mpegURL', initialized },
		dispatch
	} = player;
	const playVideo = useCallback(() => {
		const hls = new Hls();
		if (Hls.isSupported()) {
			if (!videoRef.current) {
				return false;
			}
			hls.loadSource(src);
			hls.attachMedia(videoRef.current);

			hls.on(Hls.Events.ERROR, (e, data) => {
				const { type, fatal, details } = data;
				if (!fatal) {
					return;
				}
				if (type === Hls.ErrorTypes.NETWORK_ERROR) {
					if (
						details === Hls.ErrorDetails.MANIFEST_LOAD_ERROR ||
						details === Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT
					) {
						console.log('加载失败，试试切换线路')
						// sendNotification('加载失败，试试切换线路', Infinity);
						return;
					}
					dispatch({
						type: 'custom', custom: {
							networkError: {
								type: 'NETWORK_ERROR',
								message: '网络连接异常,请检查网络设置',
								data: '网络连接异常,请检查网络设置'
							}
						}
					})
				} else if (type === Hls.ErrorTypes.MEDIA_ERROR) {
					hls.recoverMediaError();
				} else {
					hls.destroy();
				}
			});
			hls.once(Hls.Events.MANIFEST_PARSED, () => {
				videoRef.current?.play();
			});
			hls.once(Hls.Events.MEDIA_ATTACHED, () => {
				hls.loadSource(src);
			});
		}
	}, [dispatch, src, videoRef]);
	useEffect(() => { playVideo() }, [playVideo])
	return useMemo(() => {
		return initialized ? <source src={src} type={sourceType} /> : null;
	}, [initialized, sourceType, src])

};

export default HLSSource;