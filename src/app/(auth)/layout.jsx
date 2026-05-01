import Footer from "@/components/footer/Footer";
import Header from "@/components/navbar/Navbar";


const Authlayout = ({children}) => {
    return (
        <div className="bg-gray-200 min-h-screen">
           <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Authlayout;