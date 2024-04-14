import React, { ReactNode } from 'react';

import Square from './components/square';
import * as PIECES from './lib/pieces';

export default function Gameboard(){

    const { WHITE_KING, WHITE_QUEEN, WHITE_ROOK, WHITE_KNIGHT, WHITE_BISHOP, WHITE_PAWN } = PIECES;
    const { BLACK_KING, BLACK_QUEEN, BLACK_ROOK, BLACK_KNIGHT, BLACK_BISHOP, BLACK_PAWN } = PIECES;

    const boardPieces = 
    [
        [BLACK_ROOK, BLACK_KNIGHT, BLACK_BISHOP, BLACK_QUEEN, BLACK_KING, BLACK_BISHOP, BLACK_KNIGHT, BLACK_ROOK],
        [BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        [WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN],
        [WHITE_ROOK, WHITE_KNIGHT, WHITE_BISHOP, WHITE_KING, WHITE_QUEEN, WHITE_BISHOP, WHITE_KNIGHT, WHITE_ROOK],
    ]

    return(
        <BoardOutline>
            <BoardInline>
            {   
                boardPieces.map((row, x) => (
                    <Row>
                    {
                        row.map((item, y) => (
                            <Square 
                                x={x}
                                y={y}
                                item={item}
                            />
                        ))
                    }
                    </Row>
                ))
            }
            </BoardInline>
        </BoardOutline>
    )
}

const BoardOutline = ({ children }: { children: ReactNode}) => {

    return(
        <div className='flex flex-col border-[1px] border-main-purple rounded-lg p-4 bg-white'>
            {children}
        </div>
    )
}

const BoardInline = ({ children }: { children: ReactNode}) => {

    return(
        <div className='flex flex-col border-[1px] border-main-purple rounded-lg bg-white overflow-hidden'>
            {children}
        </div>
    )
}

const Row = ({ children }: { children: ReactNode}) => {
    return(
        <div className='flex flex-row'>
            {children}
        </div>
    )
}