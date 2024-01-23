import { useMyContext } from "../contexts/MyContext";

function Header() {
  const { user, setUser } = useMyContext();

  return (
    <div className="flex flex-col w-[70%] gap-4 m-auto mb-2 items-center">
      <h1 className="text-5xl font-bold dark:text-white dark:drop-shadow-[0px_0px_2px_rgba(255,255,255,0.65)]">
        {user}
      </h1>
      <button
        onClick={() => setUser(user + 1)}
        className="w-[55%] bg-green-500 rounded-full px-4 button-2 bt-2 py-[6px] text-2xl font-bold hover:drop-shadow-2xl hover:bg-green-700 dark:text-green-500 dark:hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,0.60)] dark:bg-slate-50 dark:border-slate-950 dark:hover:text-green-700"
      >
        Incress
      </button>

      <button
        onClick={() => (user >= !0 ? setUser(user - 1) : null)}
        className="w-[55%] bg-red-500 rounded-full px-4 button-2 bt-2 font-bold py-[6px] text-2xl dark:hover:shadow-slate-100 dark:hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,0.60)] hover:drop-shadow-2xl hover:bg-red-700 hover:text-white dark:text-red-500 dark:bg-slate-50 dark:border-slate-200 dark:hover:text-red-700"
      >
        Decress
      </button>
    </div>
  );
}

export default Header;
