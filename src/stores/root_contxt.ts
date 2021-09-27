/*
 * @Author: Fullsize
 * @Date: 2021-09-26 16:25:53
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-26 17:54:56
 * @FilePath: /react-context/src/stores/root_contxt.ts
 */
import { createContext} from "react";
import RootStore from './root'
const RootContext = createContext<RootStore>({} as RootStore)
export default RootContext;