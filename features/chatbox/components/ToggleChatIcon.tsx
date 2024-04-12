export default function ToggleChatIcon ({ isChatVisible, toggleChatbox }: { isChatVisible: boolean; toggleChatbox: () => void }) {
    
    const chatSymbol = `\u{1F5E8}`;
    const minimizeSymbol = `\u003E`;
    
    return(
        <button 
            className={`${isChatVisible ? 'w-8 h-8 left-0' : 'w-10 h-10 -left-10'} absolute top-[45%] items-center justify-center p-2 rounded-full border-2 border-main-purple bg-main-purple transition-all duration-300`} 
            onClick={toggleChatbox}
        >
            <p className={`${isChatVisible ? 'text-base' : 'text-xl'} text-white h-12 scale-y-150 transition-all duration-300`}>
                { isChatVisible ? minimizeSymbol : chatSymbol }                
            </p>
        </button>
    )
}