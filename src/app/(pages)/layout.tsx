import { Navbar } from "@/components/chats-layout/navbar";
import { Sidebar } from "@/components/chats-layout/sidebar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen  flex p-5 gap-2">
      <Sidebar />
      <div className="flex flex-col gap-4 px-1  flex-1 h-full ">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
