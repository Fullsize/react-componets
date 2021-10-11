/*
 * @Author: Fullsize
 * @Date: 2021-09-16 11:04:20
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-11 10:17:28
 * @FilePath: /react-context/src/containers/video-player/context/type.ts
 */
import { extend } from "lodash";
import React from "react";
import { PropsType } from '../type';
type NotificationContent = string | JSX.Element;
export interface Notification {
	duration?: number;
	timeStamp: string;
	content: NotificationContent;
}

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
	isLoading: boolean;
	rates: number[];
	isMotion:boolean;
	modal?: {
		type: 'loading' | 'rate' | 'route',
		enable: boolean
	}
	networkError?: {
		type: string;
		data: string;
		message: string;
	}
	notifications?: Notification[];
	resolution: 'HD' | 'SD' | 'FHD';
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
	sendNotification?: (content: NotificationContent, duration?: number) => void;
	destroyNotification?: (timeStamp?: string) => void;

}

interface VideoRef extends HTMLVideoElement {
	webkitEnterFullscreen?: () => void;
}
interface RefType extends HTMLDivElement {
	webkitEnterFullscreen?: () => void;
}
// 播放器全部属性
export interface Player {
	states: StateType,
	dispatch: React.Dispatch<DispatchAction>,
	props?: PropsType,
	videoRef: {
		current: VideoRef | null
	},
	ref: {
		current: RefType | null
	},
	controls: VideoControls
}

