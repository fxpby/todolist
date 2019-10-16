//通过计算或派生得到state

import localStorageUtil from "../utils/localStorageUtil";

export default {
  todos: localStorageUtil.readTodos()
}