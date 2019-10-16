const TODO = 'todo'
export default { //向外暴露一个对象
  readTodos(){
    // 从localStorage中读取todos
    // parse解析字符串函数,将string转换成对象，添加'[...]'防止null空值!
    return JSON.parse(localStorage.getItem(TODO) || '[]')
  },
  saveTodos(todos){
    console.log(todos);
    //将todos最新的值(json数据),先转换成String保存到localStorage
    localStorage.setItem(TODO, JSON.stringify(todos))
  }
}