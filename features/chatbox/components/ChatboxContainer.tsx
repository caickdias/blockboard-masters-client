import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    isChatVisible: boolean;
}

export default function ChatboxContainer({ children, isChatVisible }: Props){

    return(
        <div 
            style={{ display: isChatVisible ? 'flex' : 'none' }} 
            className="flex-col bg-white rounded-md border-gray-500 w-full h-full transition-all duration-300 shadow-sm shadow-main-purple overflow-hidden"            
        >
            {children}
        </div>
    )
}