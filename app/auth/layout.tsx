import React from "react";

const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      {children}
    </div>
  );
};

export default LayoutAuth;
