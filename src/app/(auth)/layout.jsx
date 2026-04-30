import Header from "@/components/header/Header";


const Authlayout = ({children}) => {
    return (
        <div className="bg-gray-200 min-h-screen">
           <Header></Header>
            {children}
        </div>
    );
};

export default Authlayout;