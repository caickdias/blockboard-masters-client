import { SidebarItemProps, sidebarItems } from "@/data/sidebar";

export default function Sidebar(){

    return(
        <nav className="relative bg-main-purple h-[100vh] w-24">

            <a href="/" className="h-24 flex items-center justify-center border-b-[1px] border-white">
                <p className="text-white text-5xl">&#9822;</p>
            </a>
            
            {
                sidebarItems.map((item: SidebarItemProps) => (                    
                    <a href={`/${item.link}`} key={item.name} className="flex flex-col px-2 items-center justify-center my-12 text-white hover:scale-110 transition-transform duration-300">
                            <h1 className="text-5xl hover:animate-bounce">{item.icon}</h1>
                            <h2 className="font-bold">{item.title}</h2>
                    </a>                    
                ))
            }

            <div className="absolute bottom-0 w-full">
                <a href={`/settings`} className="flex flex-col px-2 items-center justify-center mb-4 text-white hover:text-[#48dbfb] transition-transform duration-300">
                    <h1 className="text-3xl">&#9881;</h1>
                    <h2 className="font-bold">Settings</h2>
                </a>                    

                <a href={`/logout`} className="flex flex-col px-2 items-center justify-center mb-4 text-white hover:text-[#48dbfb] transition-transform duration-300">
                    <h1 className="text-3xl">&#11176;</h1>
                    <h2 className="font-bold">Logout</h2>
                </a>                    
            </div>

        </nav>
    )
}