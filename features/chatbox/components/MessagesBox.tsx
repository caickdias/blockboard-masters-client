import React from 'react';
import { forwardRef } from "react";

type MessageProps = {
    username: string;
    message: string;
    id: string;
}

type Props = {
    messages: MessageProps[];
    socketId: string | undefined;
}

const MessagesBox = forwardRef(function MessagesBox(props: Props, ref: any){    

    const { messages, socketId } = props;

    return(
        <div className="flex flex-col gap-3 flex-1 p-2 overflow-y-scroll max-h-[70vh]">
            {messages.map((message: MessageProps) => {
                
                const isOwnMessage = message.id == socketId;

                return(
                    <div className={`${isOwnMessage && 'flex flex-col items-end'}`}>
                        <p className='text-sm'>{isOwnMessage ? "You" : message.username}:</p>
                        <div className='text-sm bg-[#f0f7fc] border-[1px] rounded-lg rounded-tl-none max-w-64 p-2'>
                            <p>{message.message}</p>
                        </div>
                    </div>
                )
                })}
            <div ref={ref} />
        </div>
    )

})

export default MessagesBox;
