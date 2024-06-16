import React, { useContext } from "react";
import FootballTeamContext from "../context/FootballTeamContext";
import { Link } from "react-router-dom";

const ListPage = () => {
  const { teams, hasMorePage, setPage, page, loading, setSelectedTeam } =
    useContext(FootballTeamContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Teams</h1>
      {loading ? (
        <div className="h-[440px] flex flex-col justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="flex justify-center h-[440px]">
          <ul className="">
            {teams.map((team) => (
              <Link to={`/details/${team.id}`} className="text-black">
                <li
                  onClick={() => setSelectedTeam(team)}
                  key={team.id}
                  className="mb-2 flex justify-center"
                >
                  <div className="min-w-60 border-2 border-black px-2 py-1">
                    {team.name}
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setPage(1)}
          disabled={page === 1}
          className="mr-2 bg-gray-300 px-2 py-1 rounded"
        >
          First Page
        </button>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="mr-2 bg-gray-300 px-2 py-1 rounded"
        >
          Previous
        </button>
        <div className="flex justify-center items-center">
          <p>{page}</p>
        </div>

        <button
          onClick={() => setPage(page + 1)}
          disabled={!hasMorePage}
          className="bg-gray-300 px-2 py-1 rounded ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ListPage;
