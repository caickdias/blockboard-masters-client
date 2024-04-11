import PlayGameBoard from "@/components/PlayGameBoard";
import RulesBoard from "@/components/RulesBoard";
import { chessRules } from "@/data/rules/chess";

export default function Page(){

    return(
        <main className="flex flex-1 flex-col p-4 gap-12 items-center">
            <RulesBoard title="Chess rules" rules={chessRules} />
            
            <PlayGameBoard 
                gameName="Domino"
                links={{ practice: "/", playForReal: "/" }}
            />
            
        </main>
    )
}