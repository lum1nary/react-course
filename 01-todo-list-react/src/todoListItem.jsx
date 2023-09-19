function TodoListItem  ({ item }) {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.priority}</td>
            <td>{item.created}</td>
            <td>{item.status}</td>
        </tr>
    )
}

export default TodoListItem;