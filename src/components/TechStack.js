import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Badge from './Badge';

const Heading3 = styled.h3`

`;

const TechStack = () => {
	const { t } = useTranslation();

	return (
		<>
			<Heading3 className="mb-4">{t('TechStack.header')}</Heading3>
			<div className="d-flex flex-wrap gap-2">
				<Badge name="html" title={t('TechStack.html')} alt={t('TechStack.html-icon')} size="2rem" />
				<Badge name="css" title={t('TechStack.css')} alt={t('TechStack.css-icon')} size="2rem" />
				<Badge name="javascript" title={t('TechStack.javascript')} alt={t('TechStack.javascript-icon')} size="2rem" />
				<Badge name="react" title={t('TechStack.react')} alt={t('TechStack.react-icon')} size="2rem" />
				<Badge name="nodejs" title={t('TechStack.nodejs')} alt={t('TechStack.nodejs-icon')} size="2rem" />
				<Badge name="git" title={t('TechStack.git')} alt={t('TechStack.git-icon')} size="2rem" />
				<Badge name="sass" title={t('TechStack.sass')} alt={t('TechStack.sass-icon')} size="2rem" />
				<Badge name="bootstrap" title={t('TechStack.bootstrap')} alt={t('TechStack.bootstrap-icon')} size="2rem" />
				<Badge name="jquery" title={t('TechStack.jquery')} alt={t('TechStack.jquery-icon')} size="2rem" />
				<Badge name="php" title={t('TechStack.php')} alt={t('TechStack.php-icon')} size="2rem" />
			</div>
		</>
	);
};

export default TechStack;