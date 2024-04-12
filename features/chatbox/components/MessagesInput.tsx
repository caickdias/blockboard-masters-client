import React from 'react';
import { forwardRef } from "react";

const MessageInput = forwardRef(function MessageInput(props: { onClick: () => void }, ref: any){

    const { onClick } = props;

    const onKeyDown = (event: any) => {
        if(event.keyCode == 13 && event.shiftKey == false) {   
            event.preventDefault();                     
            onClick()
          }
    }

    return(
        <div className="flex flex-row min-h-12 py-2 px-4 border-t-[1px] border-zinc-400 rounded-b-md">
            <textarea 
                ref={ref}
                className="flex-1 outline-none"
                placeholder="Message..."
                onKeyDown={onKeyDown}
            />

            <button onClick={() => onClick()} className="text-main-purple font-bold">Send</button>
        </div>
    )
})

export default MessageInput;
