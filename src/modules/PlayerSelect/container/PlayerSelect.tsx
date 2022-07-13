import { Container } from '../../common-ui/Container/Container';
import { SquareButton } from '../../common-ui/SquareButton/SquareButton';
import { Button } from '../../common-ui/Button/Button';
import { Separator } from '../../common-ui/Separator/Separator';

import { PlayerNameInput } from '../components/PlayerNameInput/FormInput';
import { teamsType } from '../../../utils/types';

import styles from './styles.module.scss';
import { TeamNameInput } from '../components/TeamNameInput/TeamNameInput';
import { useState } from 'react';
import { teamColors } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';

type PlayerSelectProps = {
	teams: teamsType;
	setTeams: React.Dispatch<React.SetStateAction<teamsType>>;
};

export const PlayerSelect = ({ teams, setTeams }: PlayerSelectProps) => {
	const [numTeam, setNumTeam] = useState(2);
	const checkingArray: boolean[] = [];
	const errorMsg = 'Veuillez saisir un nom de joueur valide pour chaque champ disponibe.';
	const navigate = useNavigate();

	const addOrRemoveTeam = (action: string) => {
		const newTeams = [...teams];
		if (action === 'add')
			newTeams.push({
				name: `Équipe ${numTeam + 1}`,
				color: teamColors[numTeam],
				score: 0,
				players: [''],
			});
		if (action === 'remove') newTeams.pop();
		setTeams(newTeams);
	};

	const addOrRemovePlayer = (teamIndex: number, action: string) => {
		const newTeams = [...teams];
		if (action === 'add') newTeams[teamIndex].players.push('');
		if (action === 'remove') newTeams[teamIndex].players.pop();
		setTeams(newTeams);
	};

	const onChange = (e: any, teamIndex: number, playerIndex: number) => {
		const newTeams = [...teams];
		newTeams[teamIndex].players[playerIndex] = e.target.value;
		setTeams(newTeams);
	};

	const checkIfFieldIsValid = () => {
		teams.forEach((team) =>
			team.players.forEach((player) => {
				if (player.length < 3 || player.length > 16) checkingArray.push(true);
			}),
		);
	};

	return (
		<Container>
			<form>
				{teams.map((team, teamIndex) => (
					<div key={teamIndex}>
						<TeamNameInput
							id={String(teamIndex)}
							name={'teamName'}
							placeholder={`Équipe ${teamIndex + 1}`}
							value={team.name}
							backgroundColor={team.color}
							onChange={(e: any) => {
								const newTeams = [...teams];
								newTeams[teamIndex].name = e.target.value;
								setTeams(newTeams);
							}}
						/>
						<div className={styles.inputsBox}>
							{team.players.map((player, playerIndex) => (
								<div key={playerIndex}>
									<PlayerNameInput
										id={String(playerIndex)}
										name="playerName"
										placeholder={`Joueur ${playerIndex + 1}`}
										value={player}
										onChange={(e) => onChange(e, teamIndex, playerIndex)}
										errorMessage={'3 à 16 caractères max.'}
										pattern="^[A-Za-z0-9]{3,16}$"
									/>
								</div>
							))}
							<div className={styles.addAndRemovePlayers}>
								{team.players.length > 1 && (
									<SquareButton onClick={() => addOrRemovePlayer(teamIndex, 'remove')}>-</SquareButton>
								)}
								<SquareButton
									onClick={() => addOrRemovePlayer(teamIndex, 'add')}
									isDisabled={team.players.length === 6}
								>
									+
								</SquareButton>
							</div>
						</div>
						<Separator margin={'0px 0px 20px 0'} />
					</div>
				))}
				<div className={styles.addAndRemoveTeams}>
					<Button
						customStyle="add-team"
						onClick={() => {
							addOrRemoveTeam('add');
							setNumTeam(numTeam + 1);
						}}
						isDisabled={teams.length === 4}
					>
						{'Ajouter une équipe'}
					</Button>
					{teams.length > 2 && (
						<Button
							customStyle="remove-team"
							onClick={() => {
								addOrRemoveTeam('remove');
								setNumTeam(numTeam - 1);
							}}
						>
							{'Supprimer une équipe'}
						</Button>
					)}
				</div>
				<div className={styles.startAndResetButtons}>
					<Button
						customStyle="valid"
						onClick={() => {
							checkIfFieldIsValid();
							checkingArray.includes(true) ? window.alert(errorMsg) : navigate('/scores');
						}}
					>
						{'Démarrer'}
					</Button>
					<Button type="reset" customStyle="cancel">
						{'Annuler'}
					</Button>
				</div>
			</form>
		</Container>
	);
};
