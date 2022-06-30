import { Container } from '../../common-ui/Container/Container';
import { Chip } from '../../common-ui/Chip/Chip';
import { Separator } from '../../common-ui/Separator/Separator';
import { Button } from '../../common-ui/Button/Button';
import { RadioForm } from '../components/RadioForm/RadioForm';
import { rules } from '../../../utils/constants';
import { selectedRulesType } from '../../../utils/types';

import styles from './styles.module.scss';
import React from 'react';

type RulesSelectProps = {
	setContinues: React.Dispatch<React.SetStateAction<boolean>>;
	selectedRules: selectedRulesType;
	setSelectedRules: React.Dispatch<React.SetStateAction<selectedRulesType>>;
};

export const RulesSelect = ({ setContinues, selectedRules, setSelectedRules }: RulesSelectProps) => {
	const handleSubmit = (e: any) => {
		e.preventDefault();
		setContinues(true);
	};

	return (
		<Container>
			<Chip name={'Paramètre ta partie'} />
			<form className={styles.form} onSubmit={handleSubmit}>
				{rules.map((rule, index) => (
					<React.Fragment key={index}>
						<RadioForm
							rule={rule}
							onChange={(e) => setSelectedRules({ ...selectedRules, [e.target.name]: e.target.value })}
						/>
						<Separator verticalMargin={20} />
					</React.Fragment>
				))}
				<div className={styles.buttonsContainer}>
					<Button type="submit" customStyle="valid">
						{'Continuer'}
					</Button>
					<Button type="reset" customStyle="cancel">
						{'Annuler'}
					</Button>
				</div>
			</form>
		</Container>
	);
};
