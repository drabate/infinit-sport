import { createContext, useState, useEffect } from "react";

const FootballTeamContext = createContext();

export const FootballTeamProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMorePage, setHasMorePage] = useState(true);
  // the token should be set in a secure location
  const token = "gmJybIh0zwxVdw5gROMdZdvuMPv8ZpjqQhIaSxSoRNy7OVdP3GGDXm3QtOk2";

  useEffect(() => {
    const getAllFootballTeams = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/football/teams?page=${page}&per_page=10&api_token=${token}`
        );
        const responseJson = await response.json();
        setTeams(responseJson.data);
        setHasMorePage(responseJson.pagination.has_more);
      } catch (error) {
        console.error("Error fetching APIs:", error);
      }
      setLoading(false);
    };

    getAllFootballTeams();
  }, [page]);

  const getAllLeagues = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/football/leagues?api_token=${token}`);
      const responseJson = await response.json();
      setLeagues(responseJson.data);
    } catch (error) {
      console.error("Error fetching APIs:", error);
    }
    setLoading(false);
  };

  return (
    <FootballTeamContext.Provider
      value={{
        teams,
        leagues,
        selectedTeam,
        getAllLeagues,
        page,
        setPage,
        setSelectedTeam,
        hasMorePage,
        loading,
      }}
    >
      {children}
    </FootballTeamContext.Provider>
  );
};

export default FootballTeamContext;
