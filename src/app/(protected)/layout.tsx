import AppHeader from "@/components/AppHeader/AppHeader";
import LoggerInfo from "@/components/AppHeader/LoggerInfo";
import NavBar from "@/components/NavBar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div>
        <AppHeader />
        <div className="flex">
          <NavBar />
          <div className="flex flex-col flex-1">
            <LoggerInfo />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
