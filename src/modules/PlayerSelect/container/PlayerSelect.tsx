import { Container } from '../../common-ui/Container/Container';
import { SquareButton } from '../../common-ui/SquareButton/SquareButton';
import { Button } from '../../common-ui/Button/Button';
import { Separator } from '../../common-ui/Separator/Separator';

import { FormInput } from '../components/FormInput/FormInput';
import { teamsType } from '../../../utils/types';

import styles from './styles.module.scss';
import { TeamNameInput } from '../components/TeamNameInput/TeamNameInput';
import { useState } from 'react';
import { teamColors } from '../../../utils/constants';

type PlayerSelectProps = {
	teams: teamsType;
	setTeams: React.Dispatch<React.SetStateAction<teamsType>>;
	setGameStart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PlayerSelect = ({ teams, setTeams, setGameStart }: PlayerSelectProps) => {
	const [numTeam, setNumTeam] = useState(2);

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
							color={team.color}
							onChange={(e: any) => {
								const newTeams = [...teams];
								newTeams[teamIndex].name = e.target.value;
								setTeams(newTeams);
							}}
						/>
						<div className={styles.inputsBox}>
							{team.players.map((player, playerIndex) => (
								<div key={playerIndex}>
									<FormInput
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
						<Separator verticalMargin={20} />
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
					<Button type="submit" customStyle="valid" onClick={() => setGameStart(true)}>
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
