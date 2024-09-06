import { useEffect } from 'react';
import './App.scss';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { useList } from './useList';
import { saveTodoList } from './utils/storage';

export const App = () => {
	const { list, addItem, toggleItem, deleteItem } = useList();

	useEffect(() => {
		saveTodoList(list);
	}, [list]);

	return (
		<>
			<h1 className='todo__title'>Список дел</h1>
			<TodoForm onSubmit={addItem} />
			<TodoList
				list={list}
				onItemToggle={toggleItem}
				onItemDelete={deleteItem}
			/>
		</>
	);
};
