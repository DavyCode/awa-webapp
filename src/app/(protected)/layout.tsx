import AppHeader from "@/components/AppHeader/AppHeader";
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
          <div>{children}</div>H
        </div>
      </div>
    </div>
  );
}
