import { Container } from '../../common-ui/Container/Container';
import { Chip } from '../../common-ui/Chip/Chip';
import { Separator } from '../../common-ui/Separator/Separator';
import { Button } from '../../common-ui/Button/Button';
import { RadioForm } from '../components/RadioForm/RadioForm';

import { selectedRulesType } from '../../../utils/types';
import { ffaOrTeam, inAndOut, scoreToGoal } from '../../../utils/constants';

import styles from './styles.module.scss';

type RulesSelectProps = {
	setContinues: any;
	selectedRules: selectedRulesType;
	setSelectedRules: React.Dispatch<React.SetStateAction<selectedRulesType>>;
};

export const RulesSelect = ({ setContinues, selectedRules, setSelectedRules }: RulesSelectProps) => {
	const handleSubmit = (e: any) => {
		e.preventDefault();
		setContinues(true);
	};

	const onChange = (e: any) => {
		setSelectedRules({ ...selectedRules, [e.target.name]: e.target.value });
	};

	return (
		<Container>
			<Chip name={'Paramètre ta partie'} color="black" />
			<form className={styles.form} onSubmit={handleSubmit}>
				<RadioForm rule={ffaOrTeam} onChange={onChange} />
				<Separator verticalMargin={20} />
				<RadioForm rule={scoreToGoal} onChange={onChange} />
				<Separator verticalMargin={20} />
				<RadioForm rule={inAndOut} onChange={onChange} />
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
