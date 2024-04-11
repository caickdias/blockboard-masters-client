import PlayGameBoard from "@/components/PlayGameBoard";
import RulesBoard from "@/components/RulesBoard";
import { trucoRules } from "@/data/rules/truco";

export default function Page(){

    return(
        <main className="flex flex-1 flex-col p-4 gap-12 items-center justify-between">
            
            <RulesBoard title={`\u{1F0D4} Truco rules`} rules={trucoRules} />
            
            <PlayGameBoard 
                gameName="Truco"
                links={{ practice: "/", playForReal: "/" }}
            />
            
        </main>
    )
}