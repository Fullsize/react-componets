/*
 * @Author: Fullsize
 * @Date: 2021-09-28 15:50:05
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-28 15:54:53
 * @FilePath: /react-context/src/containers/video-player/components/controls/components/time-board/index.tsx
 */
import React, { useContext } from "react";
import PlayerContext from "../../../../context/context-manager";
import styles from './index.module.css';
const formatTime = (value = 0): string => {
	let outputH: string;
	let outputM: string;
	let outputS: string;
	const timeSystem = 60;
	const max = 10;
	const min = 0;
	const timeStamp = Math.round(value);
	const hours = Math.floor(timeStamp / timeSystem / timeSystem);
	const minutes = Math.floor((timeStamp - hours * timeSystem * timeSystem) / timeSystem);
	const seconds = Math.round(timeStamp - hours * timeSystem * timeSystem - minutes * timeSystem);
	if (hours > max) {
		outputH = `${hours}:`;
	} else if (hours > min) {
		outputH = `0${hours}:`;
	} else {
		outputH = '';
	}
	if (minutes < max) {
		outputM = `0${minutes}:`;
	} else {
		outputM = `${minutes}:`;
	}
	if (seconds < max) {
		outputS = `0${seconds}`;
	} else {
		outputS = `${seconds}`;
	}
	return `${outputH}${outputM}${outputS}`;
};

const TimeBoard: React.FC = () => {
	const player = useContext(PlayerContext);
	const { states: { currentTime, duration } } = player;
	return (
		<span className={styles['time-text']}>
			{formatTime(currentTime)}/{formatTime(duration)}
		</span>
	)
}
export default TimeBoard;