import React from 'react'

type ScoreTableProps = {
  playersName: string[] | null;
}

export const ScoreTable = ({playersName} : ScoreTableProps) => {

  return (
    <div>
      {playersName ? (
        playersName.map(player => 
          <div>{player}</div>)
      ) : (
        <div>Aucun joueur</div>
      )}
    </div>
  )
};
