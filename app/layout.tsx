import "../styles/globals.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        <div className="flex space-x-2 divide-x-2 p-5">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
