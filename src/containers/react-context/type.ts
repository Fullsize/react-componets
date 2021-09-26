/*
 * @Author: Fullsize
 * @Date: 2021-09-16 10:06:55
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-16 10:31:40
 * @FilePath: /react-context/src/containers/react-context/type.ts
 */
export interface UserContext {
	setStep: (stop: number) => void;
	setCount: (stop: number) => void;
	setNumber: (stop: number) => void;
	[x:string]:any;
}