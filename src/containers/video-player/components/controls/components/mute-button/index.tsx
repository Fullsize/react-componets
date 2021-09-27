/*
 * @Author: Fullsize
 * @Date: 2021-09-23 10:03:47
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-27 17:24:30
 * @FilePath: /react-context/src/containers/video-player/components/controls/components/mute-button/index.tsx
 */
import React, { useContext } from "react";
import PlayerContext from "../../../../context/context-manager";
const MuteButton: React.FC = () => {
	const play = useContext(PlayerContext);
	const { videoRef, controls: { toggleMute } } = play;
	return (
		<>
			{!!videoRef.current?.volume && (<button onClick={toggleMute}>静音</button>)}
			{!!!videoRef.current?.volume && (<button onClick={toggleMute}>声音</button>)}
		</>
	)

}
export default MuteButton;
