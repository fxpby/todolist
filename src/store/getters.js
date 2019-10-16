//状态对象模块

export default {
  //总todos的数量
  todosCount(state){
    return state.todos.length;
  },
  //完成任务数量
  finishedCount(state){
    return state.todos.reduce((total, todo) => total + (todo.finished ? 1 : 0 ), 0 )
  },
  //判断是否全选
  isCheck(state,getters){
    return getters.finishedCount === getters.todoCounts && getters.todoCounts > 0
  }
}