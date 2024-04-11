import PlayGameBoard from "@/components/PlayGameBoard";
import RulesBoard from "@/components/RulesBoard";
import { dominoRules } from "@/data/rules/domino";

export default function Page(){

    return(
        <main className="flex flex-1 flex-col p-4 gap-12 items-center justify-between">
            
            <RulesBoard title={`\u{1F084} Domino rules`} rules={dominoRules} />
            
            <PlayGameBoard 
                gameName="Domino"
                links={{ practice: "/", playForReal: "/" }}
            />
            
        </main>
    )
}