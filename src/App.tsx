import './App.scss';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

export const App = () => {
	return (
		<>
			<h1 className='todo__title'>Список дел</h1>
			<TodoForm />
			<TodoList />
		</>
	);
};
