/*
 * @Author: Fullsize
 * @Date: 2021-09-26 16:25:53
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-26 16:26:02
 * @FilePath: /react-context/src/stores/root-contxt.ts
 */
import { createContext} from "react";
import RootStore from './index'
const RootContext = createContext<RootStore>({} as RootStore)
export default RootContext;