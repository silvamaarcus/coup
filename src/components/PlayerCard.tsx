import { Trophy } from "lucide-react";

interface PlayerCardProps {
  name: string;
  total_wins: number;
  actual_wins: number;
  trophies: number;
  path: string;
  className?: string;
}

const PlayerCard = ({
  name,
  total_wins,
  actual_wins,
  trophies,
  path,
  className,
}: PlayerCardProps) => {
  return (
    <div className={`group h-80 w-50 ${className}`}>
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Frente */}
        <div className="bg-card-front absolute inset-0 flex items-center justify-center rounded-xl shadow-lg backface-hidden">
          <img
            src={path}
            alt={name}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        {/* Verso */}
        <div className="bg-card-back absolute inset-0 flex [transform:rotateY(180deg)] flex-col items-center justify-center gap-2 rounded-xl text-center shadow-lg backface-hidden">
          <h1 className="text-foreground w-32 truncate text-lg font-bold">
            {name}
          </h1>
          <div className="flex items-center gap-1">
            <Trophy className="size-8 text-yellow-500" />
            <h2>{trophies}</h2>
          </div>
          <span className="text-muted-foreground text-xs">
            Vitórias Totais: {total_wins}
            <br />
            Vitórias Atuais: {actual_wins}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;