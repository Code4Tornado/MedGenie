import React from "react";
import Appheader from "./_components/AppHeader";


function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Appheader/>
      <div className="px-10 md:px-20 lg:px-40 py-10">
 {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
