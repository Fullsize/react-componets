/*
 * @Author: Fullsize
 * @Date: 2021-09-24 15:52:06
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-28 16:59:52
 * @FilePath: /react-context/src/containers/video-player/components/controls/components/route-button/index.tsx
 */
import React from "react";
import Button from '../../../button';
enum Route{
	'main'='超清'
}
const RouteButton: React.FC = () => {
	return (
		<Button>线路</Button>
	)
}
export default RouteButton;