/*
 * @Author: Fullsize
 * @Date: 2021-09-26 14:41:23
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-26 16:38:29
 * @FilePath: /react-context/src/stores/app.ts
 */
import { makeAutoObservable } from "mobx"
class AppStore {
	constructor() {
		makeAutoObservable(this)
	}
	count = 1;
	addCount=()=> {
		this.count++;
	}
}

export default AppStore;