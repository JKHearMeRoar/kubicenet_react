import { useTranslation } from 'react-i18next';
import School from './Section';
import vse from "../assets/images/vse.png";
import gvp from "../assets/images/gvp.png";

const Education = () => {
	const { t } = useTranslation();

	return (
		<>
			<h3 className="my-4">{t('Education.header')}</h3>
			<School
				link={"https://www.vse.cz/"}
				image={vse}
				alt={t('Education.vse-logo')}
				title={t('Education.vse')}
				subheader={t('Education.vse-faculty')}
				date="2011 - 2017"
			/>
			<School
				link={"https://www.gvp.cz/"}
				image={gvp}
				alt={t('Education.gvp-logo')}
				title={t('Education.gvp')}
				date="2005 - 2011"
			/>
		</>
	);
};

export default Education;