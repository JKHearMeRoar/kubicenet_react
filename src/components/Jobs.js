import { useTranslation } from 'react-i18next';
import Job from './Section';
import ebay from "../assets/images/ebay.png";
import conrad from "../assets/images/conrad.svg";
import smartemailing from "../assets/images/smartemailing.svg";
import freelancer from "../assets/images/freelancer.svg";

const Jobs = () => {
	const { t } = useTranslation();

	return (
		<>
			<h3 className="mb-4">{t('Jobs.header')}</h3>
			<Job
				link={"https://www.ebay.com/"}
				image={ebay}
				alt={t('Jobs.ebay.logo')}
				title={t('Jobs.ebay.position')}
				subheader={t('Jobs.ebay.ebay')}
				date={t('Jobs.ebay.date')}
				responsibilities={t('Jobs.ebay.responsibilities', {returnObjects: true} )}
			/>
			<Job
				link={"https://www.conrad.cz/"}
				image={conrad}
				alt={t('Jobs.conrad.logo')}
				title={t('Jobs.conrad.position')}
				subheader={t('Jobs.conrad.conrad')}
				date={t('Jobs.conrad.date')}
				responsibilities={t('Jobs.conrad.responsibilities', {returnObjects: true} )}
			/>
			<Job
				link={"https://www.smartemailing.cz/"}
				image={smartemailing}
				alt={t('Jobs.smartemailing.logo')}
				title={t('Jobs.smartemailing.position')}
				subheader={t('Jobs.smartemailing.smartemailing')}
				date={t('Jobs.smartemailing.date')}
				responsibilities={t('Jobs.smartemailing.responsibilities', {returnObjects: true} )}
			/>
			<Job
				image={freelancer}
				alt={t('Jobs.freelancer.logo')}
				title={t('Jobs.freelancer.position')}
				subheader={t('Jobs.freelancer.freelancer')}
				date={t('Jobs.freelancer.date')}
				responsibilities={t('Jobs.freelancer.responsibilities', {returnObjects: true} )}
			/>
		</>
	);
};

export default Jobs;