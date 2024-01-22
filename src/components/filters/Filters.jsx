import { PLATFORMS } from '../../constants/platforms';
import InputFilter from '../input-filter/InputFilter';
import { StyledFilterDiv } from './styles';

const Filters = () => {
	return (
		<StyledFilterDiv>
			<h2>Platform</h2>

			{PLATFORMS.map(platform => {
				return <InputFilter key={platform.id} text={platform.name} />;
			})}
			<h2>Sort By</h2>
			<div>
				<select name=''>
					<option value='0'>Default</option>
					<option value='1'>Name</option>
					<option value='2'>Release Date</option>
				</select>
			</div>
		</StyledFilterDiv>
	);
};

export default Filters;
