import RulesBoard from "@/components/RulesBoard";
import { chessRules } from "@/data/rules/chess";

export default function Page(){

    return(
        <main className="flex flex-1 p-4 justify-center">
            <RulesBoard title="Chess rules" rules={chessRules} />
        </main>
    )
}