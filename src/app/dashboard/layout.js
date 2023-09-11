import Navbar from "@/components/Navbar";


export default function Layout({ children }) {
  return (
    
      <body >
        {children}
        <Navbar></Navbar>
      </body>
    
  );
}
