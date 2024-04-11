import PlayGameBoard from "@/components/PlayGameBoard";
import RulesBoard from "@/components/RulesBoard";
import { checkersRules } from "@/data/rules/checkers";

export default function Page(){

    return(
        <main className="flex flex-1 flex-col p-4 gap-12 items-center justify-between">
            
            <RulesBoard title={`\u26c1 Checkers rules`} rules={checkersRules} />
            
            <PlayGameBoard 
                gameName="Checkers"
                links={{ practice: "/", playForReal: "/" }}
            />
            
        </main>
    )
}