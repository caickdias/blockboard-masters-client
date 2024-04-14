import React from 'react';

type Props = {
    x: number;
    y: number;
    item: any;
}

export default function Square({ x, y, item}: Props){

    const isDarkSquare = (x + y) % 2 == 1;
    const isWhitePiece = x < 3;

    return(
        <div className={`flex w-20 h-20 items-center justify-center ${isDarkSquare && 'bg-main-purple'}`}>
            <h1 className={`text-[4rem] leading-none`}>
                {item}
            </h1>
        </div>
    )
}