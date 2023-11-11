
import Todo from './Todo'

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todoList.map(todo=> <Todo todo={todo}/>)}
      </ul>
    </div>
  )
}

export default TodoList
