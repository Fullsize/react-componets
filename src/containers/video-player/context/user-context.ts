/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: Fullsize
 * @Date: 2021-09-16 11:08:28
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-27 17:28:56
 * @FilePath: /react-context/src/containers/video-player/context/user-context.ts
 */
import { useCallback, useReducer, useRef } from "react";
import _ from 'lodash';
import { StateType, DispatchAction, Player, VideoControls } from './type';
import { SourceType } from './utils';
import { PropsType } from '../type';
const Reducer = (state: StateType, action: DispatchAction) => {
	const actions = action.type === 'custom' ? action.custom : action
	const json = _.omit(_.cloneDeep(actions), ['type'])
	return Object.assign({}, state, json)
}
const DEFAULT_STATE: StateType = {
	width: '100%',
	currentTime: 0,
	src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
	autoplay: false,
	sourceType: 'application/x-mpegURL',
	initialized: true,
	playbackRate: 1.0,
	duration: 0,
	paused: true,
	buffered: null,
	isLoading:false,
}
export default function UserContext(props?: PropsType): Player {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [states, dispatch] = useReducer(Reducer, {
		...DEFAULT_STATE,
		src: props?.src || DEFAULT_STATE.src,
		sourceType: SourceType(props?.src || DEFAULT_STATE.src),
	});
	// video controls
	let lockPlay = false;
	const play = useCallback(() => {
		const el = videoRef && videoRef.current;
		if (!el) {
			return undefined;
		}
		if (!lockPlay) {
			const promise = el.play();
			const isPromise = typeof promise === 'object';
			if (isPromise) {
				lockPlay = true;
				const resetLock = (): void => {
					lockPlay = false;
				};
				promise.then(resetLock, resetLock);
			}
			return promise;
		}
		return undefined;
	}, []);
	const pause = useCallback(() => {
		const el = videoRef && videoRef.current;
		if (el && !lockPlay) {
			el.pause();
		}
	}, [lockPlay]);

	// 音量
	const toggleMute = useCallback(() => {
		const MIN_VOLUME = 0;
		const VOLUME = 0.5;
		const video = videoRef && videoRef.current;
		if (!video) return;
		video.volume = video.volume ? MIN_VOLUME : VOLUME;
	}, []);

	// 切换倍速
	const changeRate = useCallback((playbackRate: number) => {
		const el = videoRef && videoRef.current;
		if (!el) {
			return;
		}
		el.playbackRate = playbackRate;
	}, []);

	const changeCurrentTime = useCallback((currentTime: number) => {
		const el = videoRef && videoRef.current;
		if (!el || el.duration === undefined) {
			return;
		}
		el.currentTime = Math.min(el.duration, Math.max(0, currentTime));
		console.log(220220220, el.currentTime);
		if (el.paused) {
			el.play();
		}
	}, [])
	const controls: VideoControls = {
		play,
		pause,
		toggleMute,
		changeRate,
		changeCurrentTime
	}
	return {
		states,
		dispatch,
		props,
		videoRef,
		controls
	}
}