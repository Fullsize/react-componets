/*
 * @Author: Fullsize
 * @Date: 2021-10-08 15:20:49
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-08 15:24:48
 * @FilePath: /react-context/src/containers/video-player/components/notification/toast/index.tsx
 */
import React from "react";
import { Notification } from '../../../context/type';
interface Props {
	notice: Notification;
	destroy?: (t?: string) => void;
}
const Toast: React.FC<Props> = () => {
	return (
		<div>

		</div>
	)
}
export default Toast;