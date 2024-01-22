import { StyledButton } from './styles';

const Tabs = ({ gameTabs, tabActive, setTabActive }) => {
	return (
		<div>
			{gameTabs.map((tab, index) => {
				// console.log(tab, index);

				return (
					<StyledButton
						key={tab.id}
						onClick={() => handleTabActive(index, setTabActive)}
						$active={index === tabActive}
					>
						{tab.name}
					</StyledButton>
				);
			})}
		</div>
	);
};

const handleTabActive = (tabIndex, setTabActive) => {
	setTabActive(tabIndex);
	// console.log('valor index: ' + tabIndex);
};

export default Tabs;
