/*
 * @Author: Fullsize
 * @Date: 2021-09-27 17:04:44
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-08 15:52:13
 * @FilePath: /react-context/src/containers/video-player/index.tsx
 */
import React from "react";
import PlayerContext from "./context/context-manager";
import UserContext from './context/user-context';
import VideoPlayer from "./player";
import { PropsType } from './type';
const VideoPage: React.FC<PropsType> = (props) => {
	return (
		<PlayerContext.Provider value={UserContext()}>
			<VideoPlayer {...props} />
		</PlayerContext.Provider>
	)
}
export default VideoPage;