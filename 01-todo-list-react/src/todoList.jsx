import  TodoListItem  from './todoListItem.jsx'

function TodoList  ({ items }) {
    return (
    <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Priority</th>
            <th>Created</th>
            <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {items.map((i) => <TodoListItem key={i.id} item={i} />)}
        </tbody>
    </table>
    )
}

export default TodoList;