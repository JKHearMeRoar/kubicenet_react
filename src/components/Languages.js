import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Badge from './Badge';

const Heading3 = styled.h3`

`;

const Languages = () => {
	const { t } = useTranslation();

	return (
		<>
			<Heading3 className="my-4">{t('Languages.header')}</Heading3>
			<div className="d-flex flex-wrap gap-2">
				<Badge name="czech" title={t('Languages.czech')} alt={t('Languages.czech-flag')} size="2rem" basis="30%" />
				<Badge name="english" title={t('Languages.english')} alt={t('Languages.english-flag')} size="2rem" basis="30%" />
				<Badge name="spanish" title={t('Languages.spanish')} alt={t('Languages.spanish-flag')} size="2rem" basis="30%" />
			</div>
		</>
	);
};

export default Languages;