export default function Navbar(){

    return(
        <nav className="bg-white flex flex-1 h-24 max-h-24 w-full items-center justify-between px-8 border-b-[1px] border-main-purple">
            
            <h1 className="text-5xl text-main-purple font-bold">Crypto<span className="text-cyan-500">board</span> Masters &#9822;</h1>
            
            <div className="flex flex-row gap-8">
                
                <a href="/leaderboards" className="text-lg hover:scale-110">Leaderboards</a>

                <div className="flex flex-row items-center justify-center gap-2">
                    <a href="/" className="relative flex items-center justify-center gap-2 flex-row text-lg font-bold hover:scale-110">Connect Wallet</a>

                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-main-purple opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-main-purple"></span>
                    </span>
                </div>
            </div>

        </nav>
    )
}