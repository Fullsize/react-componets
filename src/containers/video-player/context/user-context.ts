/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: Fullsize
 * @Date: 2021-09-16 11:08:28
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-11 14:28:02
 * @FilePath: /react-context/src/containers/video-player/context/user-context.ts
 */
import { useCallback, useReducer, useRef } from "react";
import _ from 'lodash';
import { StateType, DispatchAction, Player, VideoControls, NotificationContent, Notification } from './type';
import { SourceType } from './utils';
import { PropsType } from '../type';
const Reducer = (state: StateType, action: DispatchAction) => {
	const actions = action.type === 'custom' ? action.custom : action
	const json = _.omit(_.cloneDeep(actions), ['type'])
	return Object.assign({}, state, json)
}
const DEFAULT_NOTIFICATION_DURATION = 6000;
const DEFAULT_STATE: StateType = {
	width: '100%',
	currentTime: 0,
	src: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
	autoplay: false,
	sourceType: '',
	initialized: true,
	playbackRate: 1.0,
	duration: 0,
	paused: true,
	buffered: null,
	isLoading: false,
	resolution: 'HD',
	isMotion: true,
	notifications: [],
	rates: [2.0, 1.5, 1.2, 1.0, 0.75]
}
export default function UserContext(props?: PropsType): Player {
	const videoRef = useRef<HTMLVideoElement>(null);
	const ref = useRef<HTMLDivElement>(null);
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

	// ??????
	const toggleMute = useCallback(() => {
		const MIN_VOLUME = 0;
		const VOLUME = 0.5;
		const video = videoRef && videoRef.current;
		if (!video) return;
		video.muted = !video.muted;
		video.volume = video.volume ? MIN_VOLUME : VOLUME;
	}, []);

	// ????????????
	const changeRate = useCallback((playbackRate: number) => {
		const el = videoRef && videoRef.current;
		if (!el) {
			return;
		}
		el.playbackRate = playbackRate;
		dispatch({ type: 'custom', custom: { playbackRate } })
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

	const sendNotification = useCallback((content: NotificationContent, duration: number = DEFAULT_NOTIFICATION_DURATION) => {
		const timeStamp = Date.now().toString();
		dispatch({
			type: 'custom', custom: {
				notifications: [{
					timeStamp,
					content,
					duration
				}, ...states.notifications]
			}
		})
	}, [])
	const destroyNotification = useCallback((timeStamp?: string) => {
		let _notifications: Notification[];
		if (!timeStamp) {
			_notifications = [];
		} else {
			_notifications = states.notifications.filter((item) => item.timeStamp !== timeStamp)
		}
		dispatch({
			type: 'custom', custom: {
				notifications: _notifications
			}
		})
	}, []);
	const controls: VideoControls = {
		play,
		pause,
		toggleMute,
		changeRate,
		changeCurrentTime,
		sendNotification,
		destroyNotification
	}
	return {
		states,
		dispatch,
		props,
		videoRef,
		controls,
		ref
	}
}