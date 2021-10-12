/*
 * @Author: Fullsize
 * @Date: 2021-10-08 16:22:35
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-10-11 16:18:48
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

export const formatTime = (value = 0): string => {
  let outputH: string;
  let outputM: string;
  let outputS: string;
  const timeSystem = 60;
  const max = 10;
  const min = 0;
  const timeStamp = Math.round(value);
  const hours = Math.floor(timeStamp / timeSystem / timeSystem);
  const minutes = Math.floor((timeStamp - hours * timeSystem * timeSystem) / timeSystem);
  const seconds = Math.round(timeStamp - hours * timeSystem * timeSystem - minutes * timeSystem);
  if (hours > max) {
    outputH = `${hours}:`;
  } else if (hours > min) {
    outputH = `0${hours}:`;
  } else {
    outputH = '';
  }
  if (minutes < max) {
    outputM = `0${minutes}:`;
  } else {
    outputM = `${minutes}:`;
  }
  if (seconds < max) {
    outputS = `0${seconds}`;
  } else {
    outputS = `${seconds}`;
  }
  return `${outputH}${outputM}${outputS}`;
};