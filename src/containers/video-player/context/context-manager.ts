/*
 * @Author: Fullsize
 * @Date: 2021-09-16 11:04:49
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-17 09:45:13
 * @FilePath: /react-context/src/containers/video-player/context/context-manager.ts
 */
import React from "react";
import { Player } from './type';
export default React.createContext<Player>({} as Player)