import { PRODUCTS } from '../../constants/products';
import GameCard from '../game-card/GameCard';
import { StyledCardsGrid, StyledTitle } from './styles';

const Games = () => {
	return (
		<div>
			<StyledTitle>Games</StyledTitle>
			<StyledCardsGrid>
				{PRODUCTS.map(product => {
					return <GameCard key={product.id} game={product} />;
				})}
			</StyledCardsGrid>
		</div>
	);
};

export default Games;
