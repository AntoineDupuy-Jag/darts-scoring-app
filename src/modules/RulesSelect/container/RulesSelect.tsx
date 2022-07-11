import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../common-ui/Container/Container';
import { Chip } from '../../common-ui/Chip/Chip';
import { Separator } from '../../common-ui/Separator/Separator';
import { Button } from '../../common-ui/Button/Button';
import { RadioForm } from '../components/RadioForm/RadioForm';
import { rules } from '../../../utils/constants';
import { selectedRulesType } from '../../../utils/types';

import styles from './styles.module.scss';

type RulesSelectProps = {
	selectedRules: selectedRulesType;
	setSelectedRules: React.Dispatch<React.SetStateAction<selectedRulesType>>;
};

export const RulesSelect = ({ selectedRules, setSelectedRules }: RulesSelectProps) => {
	const navigate = useNavigate();
	const errorMsg = 'Veuillez séléctionner une option pour chacune des 3 règles avant de pouvoir commencer !';

	return (
		<Container>
			<Chip name={'Paramètre ta partie'} />
			<form className={styles.form}>
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
					<Button
						customStyle="valid"
						onClick={() =>
							Object.values(selectedRules).length === 3 ? navigate('/players-select') : window.alert(errorMsg)
						}
					>
						{'Valider'}
					</Button>
					<Button type="reset" customStyle="cancel">
						{'Annuler'}
					</Button>
				</div>
			</form>
		</Container>
	);
};
