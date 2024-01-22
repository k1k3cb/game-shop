import { useState } from 'react';
import Tabs from '../tabs/Tabs';
import {
	StyledCardImg,
	StyledCardImgDiv,
	StyledCardTitle,
	StyledCartButton,
	StyledGameCardDiv
} from './styles';

const GameCard = ({ game }) => {
	const [tabActive, setTabActive] = useState(0);
	// console.log('GameCard ', game)
	return (
		<StyledGameCardDiv>
			<StyledCardImgDiv>
				<StyledCardImg src={game.image} alt={game.name} />
				<div>
					<Tabs
						gameTabs={game.platforms}
						tabActive={tabActive}
						setTabActive={setTabActive}
					/>
				</div>
			</StyledCardImgDiv>
			<StyledCardTitle>{game.name}</StyledCardTitle>
			<div>
				<StyledCartButton>Add to cart</StyledCartButton>
				<span>{game.platforms[tabActive].price} €</span>
			</div>
		</StyledGameCardDiv>
	);
};

export default GameCard;
