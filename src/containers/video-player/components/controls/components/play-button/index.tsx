/*
 * @Author: Fullsize
 * @Date: 2021-09-17 11:36:28
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-17 12:01:53
 * @FilePath: /react-context/src/containers/video-player/components/controls/components/play-button/index.tsx
 */
import React, { useContext, useMemo } from "react";
import PlayerContext from "../../../../context/context-manager";
const PlayButton: React.FC = () => {
	const player = useContext(PlayerContext);
	const { states: { paused }, controls } = player;
	return useMemo(() => {
		return (
			<>
				{paused && <button onClick={controls.play}>播放</button>}
				{!paused && <button onClick={controls.pause}>暂停</button>}
			</>
		)
	}, [controls.pause, controls.play, paused])

}
export default PlayButton;