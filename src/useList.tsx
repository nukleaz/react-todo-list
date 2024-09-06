import { useState } from 'react';
import { TodoListItem } from './components/TodoItem';
import { getTodoList } from './utils/storage';

export function useList() {
	const [list, setList] = useState(getTodoList);

	const addItem = ({ id, title, done }: TodoListItem) => {
		setList(prevList => [...prevList, { id, title, done }]);
	};

	const toggleItem = (id: number) => {
		setList(prevList =>
			prevList.map(item =>
				item.id === id ? { ...item, done: !item.done } : item
			)
		);
	};

	const deleteItem = (id: number) => {
		setList(prevList => {
			return prevList.filter(item => item.id !== id);
		});
	};

	return { list, addItem, toggleItem, deleteItem };
}
