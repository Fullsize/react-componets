/*
 * @Author: Fullsize
 * @Date: 2021-09-26 14:43:25
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-26 14:45:12
 * @FilePath: /react-context/src/stores/index.ts
 */
import AppStore from "./app";
class RootStore {
	app: AppStore;
	constructor() {
		this.app = new AppStore();
	}
}
export default RootStore;