import { FC, useState } from 'react';
import { TodoListItem } from '../TodoItem';
import './TodoForm.scss';

interface TodoFormProps {
	onSubmit(item: TodoListItem): void;
}

export const TodoForm: FC<TodoFormProps> = ({ onSubmit }) => {
	const [value, setValue] = useState('');

	const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (value === '') return;
		onSubmit({ id: Date.now(), title: value, done: false });
		setValue('');
	};

	return (
		<form className='form todo__form' onSubmit={handleSubmit}>
			<div className='form__group'>
				<label htmlFor='input' className='form__label'>
					Введите новую задачу
				</label>
				<input
					id='input'
					className='form__input'
					type='text'
					placeholder='Введите новую задачу'
					value={value}
					onChange={handleValue}
				/>
			</div>
			<button className='form__btn' type='submit'>
				Добавить
			</button>
		</form>
	);
};
