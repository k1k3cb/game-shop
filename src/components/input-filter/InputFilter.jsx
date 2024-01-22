import { StyledInputFilterDiv } from './styles';

const InputFilter = ({ text }) => {
	return (


        
		<StyledInputFilterDiv>
			<input type='checkbox' id={text} />
			<label htmlFor={text}>{text}</label>
		</StyledInputFilterDiv>
	);
};

export default InputFilter;
