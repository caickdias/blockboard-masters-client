import PlayGameBoard from "@/components/PlayGameBoard";
import RulesBoard from "@/components/RulesBoard";
import { chessRules } from "@/data/rules/chess";

export default function Page(){

    return(
        <main className="flex flex-1 flex-col p-4 gap-12 items-center justify-between">
            
            <RulesBoard title={`\u2654 Chess rules`} rules={chessRules} />
            
            <PlayGameBoard 
                gameName="Chess"
                links={{ practice: "/", playForReal: "/" }}
            />
            
        </main>
    )
}