import { useCallback } from 'react';
import './Card.css';

export const Card = ({
	id,
	title,
	onTitleChange,
	done,
	onToggle,
	onDelete,
}) => {
	const handleTitleChange = event => {
		onTitleChange(id, event.target.value);
	};

	const handleCheckboxChange = () => {
		onToggle(id);
	};

	const handleSubmit = event => {
		event.preventDefault();
		onToggle(id);
	};

	const handleTitleBlur = () => {
		if (title === '') {
			onDelete(id);
		}
	};

	const setFocus = useCallback(el => {
		if (el) el.focus();
	}, []);

	return (
		<form className='card' onSubmit={handleSubmit}>
			<input
				className='card__done'
				type='checkbox'
				checked={done}
				onChange={handleCheckboxChange}
				tabIndex={-1}
			/>

			<input
				className='card__title'
				type='text'
				value={title}
				onChange={handleTitleChange}
				onBlur={handleTitleBlur}
				ref={setFocus}
			/>
		</form>
	);
};
