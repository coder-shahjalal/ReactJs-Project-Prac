import { useMyContext } from "../contexts/MyContext";

function Header() {
  const { user, setUser } = useMyContext();

  return (
    <div>
      <h1>{user}</h1>
      <button
        onClick={() => setUser(user + 1)}
        className="px-10 rounded-lg bt-2 bg-slate-400 py-15"
      >
        Add Number
      </button>


      <button
        onClick={() => setUser(user - 1)}
        className="px-10 rounded-lg bt-2 bg-slate-400 py-15"
      >
        reduce Number
      </button>
    </div>
  );
}

export default Header;
