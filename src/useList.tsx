import { useState } from 'react';
import { TodoListItem } from './components/TodoItem';

export function useList() {
	const [list, setList] = useState<TodoListItem[]>([]);

	const addItem = ({ id, title, done }: TodoListItem) => {
		setList([...list, { id, title, done }]);
	};

	const toggleItem = (id: number) => {
		setList(list =>
			list.map(item => (item.id === id ? { ...item, done: !item.done } : item))
		);
	};

	const deleteItem = (id: number) => {
		setList(list => {
			return list.filter(item => item.id !== id);
		});
	};

	return { list, addItem, toggleItem, deleteItem };
}
