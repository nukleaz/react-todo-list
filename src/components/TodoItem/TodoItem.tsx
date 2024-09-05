import { FC } from 'react';
import { DeleteIcon } from '../icons/DeleteIcon';
import { DoneIcon } from '../icons/DoneIcon';
import './TodoItem.scss';

export interface TodoListItem {
	id: number;
	title: string;
	done: boolean;
}

export interface TodoItemActions {
	onItemDelete(id: number): void;
	onItemToggle(id: number): void;
}

export interface TodoItemProps extends TodoListItem, TodoItemActions {}

export const TodoItem: FC<TodoItemProps> = ({
	id,
	title,
	done,
	onItemDelete,
	onItemToggle,
}) => {
	const handleDeleteItem = () => {
		onItemDelete(id);
	};

	const handleItemToggle = () => {
		onItemToggle(id);
	};

	return (
		<li className='todo__item'>
			<span
				className={done ? 'todo__span todo__span_crossed-out' : 'todo__span'}
			>
				{title}
			</span>
			<button className='btn todo__check-btn' onClick={handleItemToggle}>
				<DoneIcon />
			</button>
			<button className='btn todo__delete-btn' onClick={handleDeleteItem}>
				<DeleteIcon />
			</button>
		</li>
	);
};
