import { FaMinus, FaPlus } from "react-icons/fa";

interface UserPropType {
  score: number;
  handleChange: (action: "increment" | "decrement") => void;
}

const UserCard = ({ score, handleChange }: UserPropType) => {
  return (
    <div className="rounded-lg bg-yellow-200 p-5 w-full">
      <h3 className="text-2xl text-center">User name</h3>
      <p className="text-center">score {score}</p>
      <div className="flex justify-center items-center gap-3 py-3">
        <button type="button" onClick={() => handleChange("increment")}>
          <FaPlus />
        </button>
        <button type="button" onClick={() => handleChange("decrement")}>
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
