import React, { forwardRef } from 'react';

type Props = {
    usernameIsSet: boolean;
    username: string;
    sendUsername: () => void;
}

const UsernameInfo = forwardRef(function UsernameInfo(props: Props, ref: any){

    const { usernameIsSet, sendUsername, username } = props;

    return(
        <div className='flex flex-row p-2 pr-6 border-b-[1px] border-zinc-300'>
            {
                usernameIsSet ?
                <>
                    <input 
                        ref={ref}
                        className='outline-none w-full'
                        type="text" 
                        placeholder='Set your username' 
                    />
                    <button className='font-bold text-main-purple' onClick={sendUsername}> Set </button>
                </> :
                <p>Chatting as <span className='font-bold'>{username}</span></p>
            }
            
        </div>
    )
})

export default UsernameInfo;
