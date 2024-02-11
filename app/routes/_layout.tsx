import { Outlet } from "@remix-run/react"

export default function Layout() {
  return(
    <>
      <header className="bg-white border-b border-gray-200">
        <div className={`max-w-7xl mx-auto flex justify-between py-4 px-2`}>
        <div className="flex flex-row justify-between gap-4 hover:cursor-pointer">
          <p className="font-semibold font-sans text-xl py-2">Human
            <span className="text-[#4E60FF]">Ranking</span>
          </p>
        </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}