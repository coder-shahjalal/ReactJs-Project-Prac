import { useMyContext } from "../contexts/MyContext";

function Header() {
  const { user, setUser } = useMyContext();

  return (
    <div>
      <h1>{user}</h1>
      <button
        onClick={() => setUser(user + 1)}
        className="bt-2  rounded-lg bg-slate-400 py-15 px-10"
      >
        Add Number
      </button>
    </div>
  );
}

export default Header;
