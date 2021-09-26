/*
 * @Author: Fullsize
 * @Date: 2021-09-16 11:04:20
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-24 17:43:40
 * @FilePath: /react-context/src/containers/video-player/context/type.ts
 */
import React from "react";
import { PropsType } from '../type'
// 本身状态
export interface StateType {
	width: string | number;
	currentTime: number;
	src: string;
	autoplay: boolean;
	sourceType: string;
	initialized: boolean;
	playbackRate: number;
	duration: number;
	paused: boolean;
	buffered: any;
	isLoading:boolean;
}

export type DispatchAction =
	{ type: 'currentTime', currentTime: StateType['currentTime'] } |
	{ type: 'sourceType', sourceType: StateType['sourceType'] } |
	{ type: 'duration', duration: StateType['duration'] } |
	{ type: 'paused', paused: StateType['paused'] } |
	{ type: 'paused', paused: StateType['paused'] } |
	{ type: 'buffered', buffered: StateType['buffered'] } |
	{ type: 'custom', custom: Partial<StateType> };

// 视频内部方法
export interface VideoControls {
	play: () => void;
	pause: () => void;
	toggleMute: () => void;
	changeRate: (playbackRate: number) => void;
	changeCurrentTime: (currentTime: number) => void;
}

// 播放器全部属性
export interface Player {
	states: StateType,
	dispatch: React.Dispatch<DispatchAction>,
	props?: PropsType,
	videoRef: {
		current: HTMLVideoElement | null
	},
	controls: VideoControls
}

