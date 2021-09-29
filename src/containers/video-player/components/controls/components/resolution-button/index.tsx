/*
 * @Author: Fullsize
 * @Date: 2021-09-28 17:04:21
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-28 17:12:27
 * @FilePath: /react-context/src/containers/video-player/components/controls/components/resolution-button/index.tsx
 */
import React, { useContext } from "react";
import Button from '../../../button';
import PlayerContext from "../../../../context/context-manager";
enum ResolutionText {
	'SD' = '标清',
	'HD' = '高清',
	'FHD' = '超清'
}
const Resolution: React.FC = () => {
	const player = useContext(PlayerContext);
	const { states: { resolution } } = player;
	return (
		<Button>{ResolutionText[resolution]}</Button>
	)
}
export default Resolution;