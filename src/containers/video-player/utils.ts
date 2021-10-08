/*
 * @Author: Fullsize
 * @Date: 2021-10-08 16:22:35
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-08 16:27:31
 * @FilePath: /react-context/src/containers/video-player/utils.ts
 */
export function checkAndroid() {
  const reg = /Android/i;
  return reg.test(navigator.userAgent);
}

export function checkIOS() {
  const reg = /iPhone|iPod|iPad/i;
  return reg.test(navigator.userAgent);
}