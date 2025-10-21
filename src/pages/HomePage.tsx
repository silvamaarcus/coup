import PlayerCard from "@/components/PlayerCard";
import coupBg from "@/assets/images/coup-bg.jpg";

import playersData from "@/../players.json";

const HomePage = () => {
  // 🔹 Ordenar por vitórias atuais
  const sortedPlayers = [...playersData].sort(
    (a, b) => b.actual_wins - a.actual_wins,
  );

  // 🔹 Separar pódio e restante
  const podium = sortedPlayers.slice(0, 3);
  const others = sortedPlayers.slice(3);

  return (
    <section
      className="min-h-screen p-8"
      style={{
        backgroundImage: `url(${coupBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="min-h-screen p-6 backdrop-blur-sm"
        style={{
          background: "rgba(255, 255, 255, 0.20)",
        }}
      >
        <div className="mt-10 flex flex-col items-center gap-10">
          {/* Pódio */}
          <div className="flex items-end justify-center gap-12">
            {podium[1] && (
              <div className="flex flex-col items-center">
                <div className="mb-2 text-sm font-semibold text-gray-400">
                  2º Lugar
                </div>
                <div className="scale-90">
                  <PlayerCard {...podium[1]} />
                </div>
              </div>
            )}

            {podium[0] && (
              <div className="flex flex-col items-center">
                <div className="mb-2 text-sm font-semibold text-yellow-500">
                  🥇 1º Lugar
                </div>
                <div className="scale-120">
                  <PlayerCard {...podium[0]} />
                </div>
              </div>
            )}

            {podium[2] && (
              <div className="flex flex-col items-center">
                <div className="mb-2 text-sm font-semibold text-orange-500">
                  3º Lugar
                </div>
                <div className="scale-90">
                  <PlayerCard {...podium[2]} />
                </div>
              </div>
            )}
          </div>

          {/*  Demais jogadores */}
          <div className="flex flex-wrap justify-center gap-6">
            {others.map((player) => (
              <PlayerCard
                key={player.id}
                {...player}
                path={`/assets/images/avatars/${player.path}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
