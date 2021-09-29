/*
 * @Author: Fullsize
 * @Date: 2021-09-29 16:13:00
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-29 16:20:03
 * @FilePath: /react-context/src/containers/video-player/components/domain/index.tsx
 */
import React, { useContext } from "react";
import PlayContext from '../../context/context-manager';
import styles from './index.module.css';
import Loading from "../loading";
const Domain: React.FC = () => {
	const player = useContext(PlayContext);
	const { states: { modal } } = player;
	return (
		<>
			{modal?.enable && (
				<div className={styles['constainer']}>
					{modal.type === 'loading' && <Loading />}
				</div>
			)}
		</>

	)
}

export default Domain