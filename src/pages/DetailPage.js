import React, { useContext } from "react";
import FootballTeamContext from "../context/FootballTeamContext";

const DetailPage = () => {
  const { selectedTeam, loading } = useContext(FootballTeamContext);

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      {loading ? (
        <p>Loading...</p>
      ) : (
        selectedTeam && (
          <div className="w-fit flex flex-col items-center">
            <img src={selectedTeam.image_path} alt="team logo" />
            <h1 className="text-2xl font-bold mb-4 text-center">
              {selectedTeam?.name}
            </h1>
            <p>Founded in: {selectedTeam.founded}</p>
            <p className="capitalize">{selectedTeam.gender}</p>

            <p className="capitalize">{selectedTeam.type}</p>
            <p>
              <strong>Last Played At:</strong> {selectedTeam.last_played_at}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default DetailPage;
