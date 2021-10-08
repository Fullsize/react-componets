/*
 * @Author: Fullsize
 * @Date: 2021-10-08 15:08:11
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-08 15:19:09
 * @FilePath: /react-context/src/containers/video-player/components/notification/index.tsx
 */
import React, { useContext } from "react";
import styles from './index.module.css';
import PlayerContext from "../../context/context-manager";
import Toast from './toast';
const Notification: React.FC = () => {
	const player = useContext(PlayerContext);
	const { states: { notifications } ,controls:{destroyNotification}} = player;
	return (
		<>
			<div className={styles['noticefication-panel']}>
				{notifications &&
					notifications.length > 0 &&
					notifications.map((item) => (
						<Toast key={item.timeStamp} notice={item} destroy={destroyNotification} />
					))}
			</div>
		</>
	)
}
export default Notification;