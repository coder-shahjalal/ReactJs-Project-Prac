import { useMyContext } from "../contexts/MyContext";

function Header() {
  const { user, setUser } = useMyContext();

  return (
    <div className="flex flex-col w-[70%] gap-2 m-auto mb-2">
      <h1 className="text-5xl font-bold">{user}</h1>
      <button
        onClick={() => setUser(user + 1)}
        className="bg-green-500 rounded-lg px-[5px] button-2 bt-2 py-[8px] font-semibold hover:bg-green-700 hover:text-white "
      >
        Incress
      </button>


      <button
        onClick={() => user>=!0? setUser(user - 1): null}
        className="bg-red-500 rounded-lg px-[5px] button-2 bt-2 font-semibold py-[8px] hover:bg-red-700 hover:text-white"
      >
        Decress
      </button>
    </div>
  );
}

export default Header;
