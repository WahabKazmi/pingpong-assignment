import { useEffect, useState } from "react";
import UserCard from "./components/userCard";

export default function App() {
  const [winner, setWinner] = useState("");
  const [scores, setScores] = useState({
    user1: 0,
    user2: 0,
  });

  const handleScoreReducer = (
    action: "increment" | "decrement",
    user: 1 | 2
  ) => {
    setScores((prev) => ({
      ...prev,
      [`user${user}`]:
        action === "increment"
          ? prev[`user${user}`] + 1
          : prev[`user${user}`] - 1,
    }));
  };

  useEffect(() => {
    if (scores.user1 > 20 && scores.user2 <= scores.user1 - 2) {
      setWinner("user 1");
    } else if (scores.user2 > 20 && scores.user1 <= scores.user2 - 2) {
      setWinner("user 2");
    } else {
      setWinner("");
    }
  }, [scores]);

  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="max-w-[800px] w-full mx-auto relative">
        {(scores.user1 > 20 || scores.user2 > 20) && !!winner && (
          <div className="bg-green-300 rounded-xl p-4 mb-4 absolute left-[50%] translate-x-[-50%] w-full top-[-100px]">
            <h2 className="text-3xl text-center">Winner is: {winner}</h2>
          </div>
        )}
        <div className="grid grid-cols-2 gap-5">
          <UserCard
            score={scores.user1}
            handleChange={(args) => handleScoreReducer(args, 1)}
          />
          <UserCard
            score={scores.user2}
            handleChange={(args) => handleScoreReducer(args, 2)}
          />
        </div>
      </div>
    </div>
  );
}
