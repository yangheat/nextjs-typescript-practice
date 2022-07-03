import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  console.log("Layout:", children);
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
