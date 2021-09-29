/*
 * @Author: Fullsize
 * @Date: 2021-09-28 16:03:19
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-28 16:35:08
 * @FilePath: /react-context/src/containers/video-player/components/controls/components/playbackRate-button/index.tsx
 */
import React, { useContext, useMemo, useCallback } from "react";
import PlayerContext from "../../../../context/context-manager";
import Button from '../../../button';
import styles from './index.module.css';
const PlaybackRateButton: React.FC = () => {
	const player = useContext(PlayerContext);
	const { states: { playbackRate }, dispatch } = player;
	const handClick = useCallback(() => {
		dispatch({
			type: 'custom',
			custom: {
				modal: { type: 'rate', enable: false }
			}
		})
	}, [dispatch])
	return useMemo(() => (
		<Button className={styles['btn']} onClick={handClick}>
			{playbackRate}x
		</Button>
	), [handClick, playbackRate])
}
export default PlaybackRateButton;