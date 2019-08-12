import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { FormInput, FormTextarea, FormMultiSelector } from '../ComponentsPieces/Forms/FromParts';
import { requiredField, setMaxLength, stringValidator } from '../validator';

const maxLDescr = setMaxLength(300);
const maxLPeriod = setMaxLength(20);

function SkillModalInner({ themeList, languageList, handleSubmit, submitData, onHide }) {
	const themeOptions = themeList.data && themeList.data.map(item => { return { value: item.id, label: item.name }});
	const languageOptions = languageList.data && languageList.data.map(item => { return { value: item.id, label: item.name }});
	return (
		<Form id="skillForm" onSubmit={handleSubmit(submitData)}>
			<Form.Group controlId="exampleForm.ControlInput1">
				<Form.Label>Title</Form.Label>
				<Field name="title" component={FormInput} type="text" placeholder="Title" validate={[requiredField, stringValidator]} useFocus={true} />
			</Form.Group>
			<Form.Group controlId="exampleForm.ControlTextarea1">
				<Form.Label>Description</Form.Label>
				<Field name="descr" component={FormTextarea} placeholder="Descriptopn" validate={[requiredField, maxLDescr]} />
			</Form.Group>
			<Form.Group controlId="exampleForm.ControlInput1">
				<Form.Label>Img</Form.Label>
				<Field name="img" component={FormInput} type="text" placeholder="Img" />
			</Form.Group>
			<Form.Group controlId="exampleForm.ControlInput1">
				<Form.Label>Bg color</Form.Label>
				<Field name="bgColor" component={FormInput} type="text" placeholder="Background color" />
			</Form.Group>
			{themeList.data.length !== 0 &&
			< Form.Group controlId="exampleForm.ControlSelect2">
				<Form.Label>Theme</Form.Label>
				<Field name="theme" component={FormMultiSelector} options={themeOptions} validate={[requiredField]} />
				</Form.Group>
			}
			{languageList.data.length !== 0 &&
			<Form.Group controlId="exampleForm.ControlSelect2">
				<Form.Label>Language</Form.Label>
				<Field name="language" component={FormMultiSelector} options={languageOptions} validate={[requiredField]} />
			</Form.Group>
			}
			<Form.Group controlId="exampleForm.ControlInput1">
				<Form.Label>Period</Form.Label>
				<Field name="period" component={FormInput} type="text" placeholder="Period" validate={[requiredField, maxLPeriod]} />
			</Form.Group>
			<div className="form__button">
				<Button className="form__button__close" variant="secondary" onClick={onHide}>Close</Button>
				<Button className="form__button__submit" variant="primary" type="submit">Save changes</Button>
			</div>
		</Form>
	);
}

SkillModalInner.propTypes = {
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

SkillModalInner = reduxForm({
	form: 'changeSkill',
	enableReinitialize: true,
	destroyOnUnmount: true,
})(SkillModalInner);

export default SkillModalInner;
