/*
 * @Author: Fullsize
 * @Date: 2021-09-16 11:46:56
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-16 11:50:59
 * @FilePath: /react-context/src/containers/video-player/context/utils.ts
 */
export function SourceType(src: string): string {
	const originSrc = src.split('?')[0];
	const fileType = originSrc.split('.').pop();
	let sourceType = '';
	switch (fileType) {
		case 'm3u8':
			sourceType = 'application/x-mpegUrl';
			break;
		case 'flv':
			sourceType = 'video/x-flv';
			break;
		default:
			sourceType = '';
	}
	return sourceType;
}