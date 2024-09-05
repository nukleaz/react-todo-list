import './TodoForm.scss';

export const TodoForm = () => {
	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
	};

	return (
		<form className='form' onSubmit={handleSubmit}>
			<input
				className='form__input'
				type='text'
				placeholder='Введите новую задачу'
			/>
			<button className='form__btn' type='submit'>
				Добавить
			</button>
		</form>
	);
};
