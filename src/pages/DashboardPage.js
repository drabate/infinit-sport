import React, { useContext, useEffect, useState } from "react";
import FootballTeamContext from "../context/FootballTeamContext";

const DashboardPage = () => {
  const { leagues, getAllLeagues } = useContext(FootballTeamContext);

  useEffect(() => {
    getAllLeagues();
  }, []);

  const [uniqueCountries, setUniqueCountries] = useState(0);

  useEffect(() => {
    const countryIds = leagues.map((league) => league.country_id);
    const uniqueCountryIds = [...new Set(countryIds)];
    setUniqueCountries(uniqueCountryIds.length);
  }, [leagues]);

  return (
    <div className="p-4 flex justify-center">
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">
          League Dashboard
        </h1>
        <h2 className="mt-8 text-center">
          {leagues?.length} accessible Leagues
        </h2>
        <h2 className="mt-4 text-center">
          Played in {uniqueCountries} countries
        </h2>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {leagues.map((league) => (
            <div
              key={league.id}
              className="border rounded-lg p-2 shadow-md text-center bg-gray-400"
            >
              <img
                src={league.image_path}
                alt={league.name}
                className="w-full h-32 object-cover mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
