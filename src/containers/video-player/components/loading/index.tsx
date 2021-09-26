/*
 * @Author: Fullsize
 * @Date: 2021-09-24 16:41:20
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-24 17:45:25
 * @FilePath: /react-context/src/containers/video-player/components/loading/index.tsx
 */
import React, { useContext } from "react";
import PlayerContext from "../../context/context-manager";
const Loading: React.FC = () => {
	const player = useContext(PlayerContext);
	const { states } = player;
	return (
		<>
			{states.isLoading && <div>loading...</div>}
		</>

	)
}
export default Loading;