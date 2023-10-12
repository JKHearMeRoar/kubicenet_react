import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Heading3 = styled.h3`

`;

const TechStack = () => {
	const { t } = useTranslation();

	return (
		<>
			<Heading3>{t('TechStack.header')}</Heading3>
		</>
	);
};

export default TechStack;