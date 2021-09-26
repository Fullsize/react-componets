/*
 * @Author: Fullsize
 * @Date: 2021-09-16 10:58:34
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-16 15:28:26
 * @FilePath: /react-context/src/containers/video-player/contextChild.tsx
 */
import React from "react";
import PlayerContext from "./context/context-manager";
import UserContext from './context/user-context';
import { PropsType } from './type';
const VideoPlayer: React.FC<PropsType>= (props) => {
	return (
		<PlayerContext.Provider value={UserContext()}>
			{props.children}
		</PlayerContext.Provider>
	)
}
export default VideoPlayer;