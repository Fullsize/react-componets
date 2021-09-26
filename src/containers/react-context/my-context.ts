/*
 * @Author: Fullsize
 * @Date: 2021-09-16 10:10:46
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-16 10:28:23
 * @FilePath: /react-context/src/containers/react-context/my-context.ts
 */
import React from "react";
import { UserContext } from './type'
export const MyContext = React.createContext<UserContext>({ setCount: () => { }, setNumber: () => { }, setStep: () => { } })