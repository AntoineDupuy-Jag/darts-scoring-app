import { teamsType } from '../../../../utils/types';
import { BackArrowIcon } from '../../../common-ui/Svg';

import styles from './styles.module.scss';

type CancelDartButtonProps = {
	dartArray: number[];
	teamsWithScore: teamsType;
	teamToPlay: number;
	setTeamsWithScore: any;
	setDartArray: any;
};

export const CancelDartButton = ({
	dartArray,
	teamsWithScore,
	teamToPlay,
	setTeamsWithScore,
	setDartArray,
}: CancelDartButtonProps) => {
	const cancelDart = () => {
		const newDartArray = [...dartArray];
		const cancelDart = newDartArray[newDartArray.length - 1];
		const newArray = [...teamsWithScore];
		newArray[teamToPlay] = {
			...newArray[teamToPlay],
			score: newArray[teamToPlay].score + cancelDart,
		};
		setTeamsWithScore(newArray);
		newDartArray.pop();
		setDartArray(newDartArray);
	};

	return (
		<div className={styles.cancelDart}>
			<button className={styles.cancelButton} onClick={cancelDart} disabled={dartArray.length < 1}>
				<BackArrowIcon />
			</button>
			<div className={styles.cancelButtonLabel}>{'Annuler la dernière fléchette'}</div>
		</div>
	);
};
