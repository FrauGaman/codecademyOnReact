import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { FormInput, FormTextarea, FormSelector, FormMultiSelector } from '../ComponentsPieces/Forms/FromParts';
import { requiredField, setMaxLength, stringValidator } from '../validator';

const maxL = setMaxLength(300);

function AllCoursesModalInner({themeList, languageList, handleSubmit, submitData, onHide}) {
	const themeOptions = themeList.data && themeList.data.map(item => { return { value: item.id, label: item.name }});
	const languageOptions = languageList.data && languageList.data.map(item => { return { value: item.id, label: item.name }});
	return (
		<Form id="allCoursesForm" onSubmit={handleSubmit(submitData)}>
			<Form.Group controlId="exampleForm.ControlInput1">
				<Form.Label>Title</Form.Label>
				<Field name="title" component={FormInput} type="text" placeholder="Title" validate={[requiredField, stringValidator]} useFocus={true} />
			</Form.Group>
			<Form.Group controlId="exampleForm.ControlTextarea1">
				<Form.Label>Description</Form.Label>
				<Field name="descr" component={FormTextarea} placeholder="Descriptopn" validate={[requiredField, maxL]} />
			</Form.Group>
			<Form.Group controlId="exampleForm.ControlInput1">
				<Form.Label>Importance</Form.Label>
				<Field name="importance" component={FormSelector} validate={[requiredField]} />
			</Form.Group>
			<Form.Group controlId="exampleForm.ControlInput1">
				<Form.Label>Icon</Form.Label>
				<Field name="icon" component={FormInput} type="text" placeholder="Icon" />
			</Form.Group>
			<Form.Group controlId="exampleForm.ControlInput1">
				<Form.Label>Border color</Form.Label>
				<Field name="borderColor" component={FormInput} type="text" placeholder="Border color" />
			</Form.Group>
			{themeList.data.length !== 0 &&
			<Form.Group controlId="exampleForm.ControlSelect2">
				<Form.Label>Theme</Form.Label>
				<Field name="theme" component={FormMultiSelector} options={themeOptions} validate={[requiredField]} />
			</Form.Group>
			}
			{languageList.data.length !== 0 &&
			<Form.Group controlId="exampleForm.ControlSelect2">
				<Form.Label>Language</Form.Label>
				<Field name="language" component={FormMultiSelector} options={languageOptions} />
			</Form.Group>
			}
			<div className="form__button">
				<Button className="form__button__close" variant="secondary" onClick={onHide}>Close</Button>
				<Button className="form__button__submit" variant="primary" type="submit">Save changes</Button>
			</div>
		</Form>
	);
}

AllCoursesModalInner.propTypes = {
	themeList: PropTypes.shape({
		data: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			descr: PropTypes.string,
			link: PropTypes.string,
		})),
		count: PropTypes.string,
	}),
	languageList: PropTypes.shape({
		data: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			descr: PropTypes.string,
			link: PropTypes.string,
		})),
		count: PropTypes.string,
	}),
	handleSubmit: PropTypes.func,
	submitData: PropTypes.func,
	onHide: PropTypes.func,
};

AllCoursesModalInner = reduxForm({
	form: 'changeAllCourses',
	enableReinitialize: true,
	destroyOnUnmount: true,
})(AllCoursesModalInner);

export default AllCoursesModalInner;
