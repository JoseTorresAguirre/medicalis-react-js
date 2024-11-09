import React from "react";
import CustomLink from "../Utilities/CustomLink";
import CustomButton from "../Utilities/CustomButton";

const Navbar = () => {
  return (
    <div className="bg-white h-[5rem] w-screen overflow-hidden flex items-center justify-between px-1 sticky top-0 z-50 shadow-md">
      <div className="flex-shrink-0">
        <CustomLink
          to="/"
          tittle="Medicalis"
          imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085006/logo_k76c4y.png"
          tittleClass="sm:text-xl ml-[1rem]  text-[#307bc4] hover:text-blue-300 flex items-center font-extrabold md:text-3xl"
          imgClass="w-18 h-18 mr-4"
        ></CustomLink>
      </div>

      <div className="md:space-x-32 flex text-[#8395a4] font-extrabold md:text-xl">
        <CustomLink
          to="/"
          tittle="Inicio"
          tittleClass="hover:text-blue-300"
        ></CustomLink>
        <CustomLink
          to="/nosotros"
          tittle="Sobre Nosotros"
          tittleClass="hover:text-blue-300"
        ></CustomLink>
        <CustomLink
          to="/especialidades"
          tittle="Especialidades"
          tittleClass="hover:text-blue-300"
        ></CustomLink>
        <CustomLink
          to="/contacto"
          tittle="Contacto"
          tittleClass="hover:text-blue-300"
        ></CustomLink>
      </div>
      <div>
        <CustomLink
          to="/iniciarsesion"
          imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731087963/user_f1vfe6.png"
          imgClass="w-14 h-14"
        ></CustomLink>
      </div>

      <div className="px-20">
        <CustomButton
          to="/agendar"
          tittle="Agendar mi cita"
          imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085888/arrow-right_kubz4k.png"
          tittleClass="flex items-center px-4 py-1 bg-[#2e72b2] text-white hover:text-blue-300 h-10 w-60 rounded-2xl font-extrabold  justify-center"
        ></CustomButton>
      </div>
    </div>
  );
};

export default Navbar;
