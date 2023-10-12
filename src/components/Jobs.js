import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Heading3 = styled.h3`

`;

const Jobs = () => {
	const { t } = useTranslation();

	return (
		<>
			<Heading3>{t('Jobs.header')}</Heading3>
		</>
	);
};

export default Jobs;