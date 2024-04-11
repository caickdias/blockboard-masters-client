
type CardProps = {
  link: string;
  title: string;
  icon: string;
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col p-4 justify-center gap-12 items-center ">
      
      <h1 className="text-center w-full text-4xl text-main-purple font-bold">Welcome to Crypto<span className="text-cyan-500">board</span> Masters!</h1>

      <div className="font-bold text-xl">
        <h2>Place your bet. Challenge your opponents.</h2>
        <h2>Classic games with power-ups.</h2>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-4">
          <Card 
              title="Checkers"
              icon={`\u26c1`}              
              link="checkers"
          />
          <Card 
              title="Chess"
              icon={`\u2654`}              
              link="chess"
          />
        </div>

        <div className="flex flex-row gap-4">
          <Card 
              title="Domino"
              icon={`\u{1F084}`}              
              link="domino"
          />
          <Card 
              title="Truco"
              icon={`\u{1F0D4}`}              
              link="truco"
          />
        </div>
      </div>

    </main>
  );
}

const Card = ({ link, title, icon }: CardProps) => {

  return(
      <a href={`/${link}`} className="flex flex-col gap-6 h-full min-w-64 border-2 border-main-purple max-w-80 rounded-lg p-8 shadow-md shadow-zinc-400 hover:shadow-main-purple transition-all duration-300">
                      
          <h1 className="text-center text-5xl text-main-purple">
              {icon}
          </h1>

          <h1 className="text-center text-main-purple font-bold text-xl">
              {title}
          </h1>


      </a>
  )
}