import Checkout from '../checkout/Checkout';
import Filters from '../filters/Filters';
import Games from '../games/Games';
import { StyledMain } from './styles';

const Main = () => {
	return (
		<StyledMain>
			<Filters />
			<Games />
			<Checkout />
		</StyledMain>
	);
};

export default Main;
