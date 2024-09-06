import { FC } from 'react';
import { TodoItem, TodoItemActions, TodoListItem } from '../TodoItem';
import './TodoList.scss';

interface TodoListProps extends TodoItemActions {
	list: TodoListItem[];
}

export const TodoList: FC<TodoListProps> = ({
	list,
	onItemDelete,
	onItemToggle,
}) => {
	return (
		<ul className='todo__list'>
			{list.map(({ id, title, done }) => (
				<TodoItem
					key={id}
					id={id}
					title={title}
					done={done}
					onItemDelete={onItemDelete}
					onItemToggle={onItemToggle}
				/>
			))}
		</ul>
	);
};
