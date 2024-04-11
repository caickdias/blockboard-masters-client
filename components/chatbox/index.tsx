'use client';

import { useEffect, useState } from "react";

export default function Chatbox(){

    const [isChatVisible, setChatVisibility] = useState<boolean>(true);   
    const chatWidth = isChatVisible ? '40vh' : '0vh';    

    const toggleChatbox = () => setChatVisibility(oldState => !oldState);

    return(
        <section style={{ width: chatWidth }} className="relative h-full p-4 transition-all duration-700">

            <ToggleChatIcon isChatVisible={isChatVisible} toggleChatbox={toggleChatbox} />


            <div 
                style={{ display: isChatVisible ? 'flex' : 'none' }} 
                className="flex-col bg-white rounded-md border-gray-500 w-full h-full transition-all duration-300 shadow-sm shadow-main-purple overflow-hidden"            >
                
                <div className="h-12 py-2 px-4 bg-main-purple rounded-t-md">
                    <h1 className="text-white font-bold text-xl">General Chat</h1>
                </div>
                
                <div className="flex flex-1 p-4">
                    messages
                </div>

                <div className="flex flex-row min-h-12 py-2 px-4 border-t-[1px] border-zinc-400 rounded-b-md">
                    <textarea 
                        className="flex-1 outline-none"
                        placeholder="Message..."
                    />

                    <p className="text-main-purple font-bold">Send</p>
                </div>

            </div>

        </section>
    )
}

const ToggleChatIcon = ({ isChatVisible, toggleChatbox }: { isChatVisible: boolean; toggleChatbox: () => void }) => {
    return(
        <button 
        className={`${isChatVisible ? 'w-8 h-8 left-0' : 'w-10 h-10 -left-10'} absolute top-[45%] items-center justify-center p-2 rounded-full border-2 border-main-purple bg-main-purple transition-all duration-300`} 
            onClick={toggleChatbox}
        >
            <p className={`${isChatVisible ? 'text-base' : 'text-xl'} text-white h-12 scale-y-150 transition-all duration-300`}>
                { isChatVisible ? `\u003E` : `\u{1F5E8}` }                
            </p>
        </button>
    )
}