const Navbar = () => {
    return (
        <div className="bg-slate-800 py-5 px-6 text-slate-100 flex justify-between items-center">
            <h1 className="font-bold text-lg text-blue-400">Ini Stateless Component</h1>

            <nav>
                <ul className="flex gap-6">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar