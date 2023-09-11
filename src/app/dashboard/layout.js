import Navbar from "@/components/Navbar";


export default function Layout({ children }) {
  return (
    
      <div >
        {children}
        <Navbar></Navbar>
      </div>
    
  );
}
