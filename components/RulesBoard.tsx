export default function RulesBoard({ title, rules }: { title: string, rules: string[]}){

    return(
        <div className="flex flex-col items-center">

            <h1 className="text-main-purple font-bold text-3xl">{title}</h1>

            <div className="w-full mb-4 mt-2"></div>

            <div className="text-center">
            {
                rules.map((rule: string) => <p className="leading-loose">• {rule}</p>)
            }
            </div>

        </div>
    )
}