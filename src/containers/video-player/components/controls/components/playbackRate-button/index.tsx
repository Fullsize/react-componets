/*
 * @Author: Fullsize
 * @Date: 2021-09-28 16:03:19
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-08 14:23:38
 * @FilePath: /react-context/src/containers/video-player/components/controls/components/playbackRate-button/index.tsx
 */
import React, { useContext, useMemo, useCallback } from "react";
import PlayerContext from "../../../../context/context-manager";
import Button from '../../../button';
import styles from './index.module.css';
const PlaybackRateButton: React.FC = () => {
	const player = useContext(PlayerContext);
	const { states: { playbackRate, modal }, dispatch } = player;
	const handClick = useCallback(() => {
		dispatch({
			type: 'custom',
			custom: {
				modal: { type: 'rate', enable: !modal?.enable }
			}
		})
	}, [dispatch, modal?.enable])
	return useMemo(() => (
		<Button className={`${styles['btn']} ${modal?.type === 'rate' && modal.enable ? styles['btn--active'] : ''}`} onClick={handClick}>
			{playbackRate}x
		</Button>
	), [handClick, modal?.enable, modal?.type, playbackRate])
}
export default PlaybackRateButton;