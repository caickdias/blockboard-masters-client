export default function Header({ title, onlineUsers }: { title: string, onlineUsers: number }){

    return(
        <div className="flex justify-between items-center h-12 py-2 px-4 bg-main-purple rounded-t-md">
            <h1 className="text-white font-bold text-xl">{title}</h1>
            <h1 className="text-white text-base">{onlineUsers} users</h1>
        </div>
    )
}