import { TodoListItem } from '../components/TodoItem';

export function saveTodoList(list: TodoListItem[]) {
	localStorage.setItem('todoList', JSON.stringify(list));
}

export function getTodoList(): TodoListItem[] {
	const todoList = localStorage.getItem('todoList');

	if (!todoList) {
		return [];
	}

	return JSON.parse(todoList);
}
