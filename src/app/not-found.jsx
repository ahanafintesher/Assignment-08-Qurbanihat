import NotFoundAnimation from "@/components/animations/NotFoundAnimation";
import Footer from "@/components/footer/Footer";
import { SiGooglehome } from "react-icons/si";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="flex flex-col justify-center items-center">
        <NotFoundAnimation></NotFoundAnimation>
        <div className="py-4">
          <Link href={"/"}>
            <button className="btn bg-green-800 text-white">
              Back To Home
              <span>
                <SiGooglehome />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default notFound;
