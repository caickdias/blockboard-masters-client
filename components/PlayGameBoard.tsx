type Props = {
    gameName: string;
    links: {
        practice: string;
        playForReal: string;
    }
}

type CardProps = {
    link: string;
    title: string;
    description: string;
}

export default function PlayGameBoard({ gameName, links } : Props){
    return(
        <div className="flex flex-col gap-10 mb-8">

                <h1 className="text-center text-main-purple font-bold text-2xl">PLAY {gameName.toUpperCase()}</h1>

                <div className="flex items-center justify-center gap-8">
                    
                    <Card 
                        title="Practice"
                        description="Play online against other players. No coins spent."
                        link={links.practice}
                    />
                    
                    <Card 
                        title="Play for real"
                        description="Play online against other players. You should bet coins every game. "
                        link={links.practice}
                    />
                    

                </div>

            </div>
    )
}

const Card = ({ link, title, description }: CardProps) => {

    return(
        <a href={`/${link}`} className="bg-white flex flex-col gap-6 h-full min-w-24 max-w-80 rounded-lg p-8 shadow-md shadow-zinc-400 hover:shadow-main-purple transition-all duration-300">
                        
            <h1 className="text-center text-main-purple font-bold text-xl">
                {title}
            </h1>

            <h1 className="text-center">
                {description}
            </h1>

        </a>
    )
}