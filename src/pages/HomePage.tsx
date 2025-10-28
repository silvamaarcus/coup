import PlayerCard from "@/components/PlayerCard";

import playersData from "@/../players.json";

import { Crown } from "lucide-react";

const HomePage = () => {
  // Ordenar por vitórias atuais
  const sortedPlayers = [...playersData].sort(
    (a, b) => b.current_wins - a.current_wins,
  );

  // Separar pódio e restante
  const podium = sortedPlayers.slice(0, 3);
  const others = sortedPlayers.slice(3);

  return (
    <section className="min-h-screen bg-gradient-to-r from-emerald-500 to-emerald-900 p-8">
      <div className="min-h-screen rounded-lg bg-stone-50 p-6">
        <div className="mt-10 flex flex-col items-center gap-10">
          {/* Pódio */}
          <div className="flex items-end justify-center gap-12">
            {podium[1] && (
              <div className="flex flex-col items-center">
                <div className="scale-90">
                  <PlayerCard {...podium[1]} />
                </div>
              </div>
            )}

            {podium[0] && (
              <div className="flex flex-col items-center gap-2">
                <div className="mb-6 text-sm font-semibold text-yellow-500">
                  <Crown size="64px" />
                </div>
                <div className="scale-120">
                  <PlayerCard {...podium[0]} />
                </div>
              </div>
            )}

            {podium[2] && (
              <div className="flex flex-col items-center">
                <div className="scale-90">
                  <PlayerCard {...podium[2]} />
                </div>
              </div>
            )}
          </div>

          {/*  Demais jogadores */}
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            {others.map((player) => (
              <PlayerCard
                key={player.id}
                {...player}
                path={player.path}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
