import { playFair_Display } from "@/app/layout";


const Header = () => {
    return (
        <div className={`${playFair_Display.className} container mx-auto`}>
           <div>
                <h1 className="text-5xl font-bold text-green-800 text-center mt-8">QurbaniHat</h1>
           </div>
        </div>
    );
};

export default Header;