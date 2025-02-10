import NextTopLoader from "nextjs-toploader";
import React from "react";
import { Toaster } from "react-hot-toast";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NextTopLoader
        color={"var(--color-primary)"}
        showAtBottom={false}
        height={4}
        showSpinner={false}
        speed={200}
      />
      <div>
        {children}
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              iconTheme: {
                primary: "green",
                secondary: "black",
              },
            },
            error: {
              iconTheme: {
                primary: "red",
                secondary: "black",
              },
            },
          }}
        />
      </div>
    </>
  );
};
