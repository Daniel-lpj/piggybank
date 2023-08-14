export default function Home() {
  return (
    <>
      <nav className="bg-slate-900 p-6 flex justify-between items-center">
        <ul className="flex gap-12 items-end text-slate-400 text-sm">
          <li>
            <a href="#">
              <h1 className="text-2xl font-bold text-slate-100">PiggyBank</h1>
            </a>
          </li>
          <li>
            <a href="#">despesas</a>
          </li>
          <li>
            <a href="#">contas</a>
          </li>
          <li>
            <a href="#">categoria</a>
          </li>
        </ul>

        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/100" alt="Avatar do usuário" />
        </div>
      </nav>

      <main className="bg-slate-900 m-20 p-12 rounded-xl">
        <h2>Despesas</h2>
      </main>
    </>
  );
}
