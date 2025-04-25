import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import Header from "@/app/_components/Header";
import { AuthProvider } from "@/app/_contexts/AuthContext";
import { ReservationProvider } from "@/app/_contexts/ReservationContext";
import "@/app/_styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

function RootLayout({ children }) {
  return (
    <SessionProvider>
      <AuthProvider>
        <html lang="en">
          <body
            className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
          >
            <Toaster
              position="top-center"
              toastOptions={{
                duration: 4000,
                style: {
                  background: "var(--color-primary-900)",
                  color: "var(--color-primary-100)",
                  border: "1px solid var(--color-primary-700)",
                  fontSize: "1rem",
                },
                success: {
                  iconTheme: {
                    primary: "var(--color-accent-500)",
                    secondary: "var(--color-primary-950)",
                  },
                },
                error: {
                  iconTheme: {
                    primary: "#EF4444", // Tailwind's red-500
                    secondary: "var(--color-primary-950)",
                  },
                },
              }}
            />

            <Header />
            <div className="flex-1 px-8 py-12 grid">
              <main className="max-w-7xl mx-auto w-full">
                <ReservationProvider>{children}</ReservationProvider>
              </main>
            </div>
          </body>
        </html>
      </AuthProvider>
    </SessionProvider>
  );
}

export default RootLayout;
