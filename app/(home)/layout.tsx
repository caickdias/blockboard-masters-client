import Navbar from "@/components/_layout/Navbar";
import Sidebar from "@/components/_layout/Sidebar";
import Chatbox from "@/features/chatbox";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 min-h-[100vh] max-w-[1920px]">
      
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />
        <div className="flex flex-1 flex-row">
          {children}
          <Chatbox />
        </div>
      </div>

    </div>
  );
}
