import "./globals.css";
import Providers from "@/components/Providers";


export const metadata = {
  title: "PQRExpress",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
