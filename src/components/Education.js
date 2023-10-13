import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Heading3 = styled.h3`

`;

const Education = () => {
	const { t } = useTranslation();

	return (
		<>
			<Heading3 className="my-4">{t('Education.header')}</Heading3>
		</>
	);
};

export default Education;