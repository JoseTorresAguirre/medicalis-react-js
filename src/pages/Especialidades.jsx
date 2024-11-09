import React from "react";
import CustomCard2 from "../components/Utilities/CustomCard2";
import CustomButton2 from "../components/Utilities/CustomButton2";

const Especialidades = () => {
  return (
    <div
      className=" flex justify-center items-center bg-cover bg-no-repeat bg-center h-[120vh] w-screen  mb-[-15rem] -z-0"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dj3xwsle9/image/upload/v1731088481/banner_iniciar_znrqz7.png")`,
        backgroundPosition: "top center", // Asegura que la parte superior de la imagen se alinee al contenedor
      }}
    >
      <div className="mt-[-25rem]">
        <div className="text-[#274760] text-[4rem] text-center font-semibold mb-[5rem]">
          <h1>Escoga la Especialidad</h1>
        </div>
        <div className="flex space-x-8 justify-center relative z-10">
          <CustomCard2
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084999/emergency_jbvb0t.png"
            tittle="Emergency 
            Department"
          ></CustomCard2>
          <CustomCard2
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085008/pediatric_sate7n.png"
            tittle="Pediatric 
            Department"
          ></CustomCard2>
          <CustomCard2
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085001/gynecology_np4arl.png"
            tittle="Gynecology 
            Department"
          ></CustomCard2>
          <CustomCard2
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084998/cardiology_wk8gey.png"
            tittle="Cardiology 
            Department"
          ></CustomCard2>
          <CustomCard2
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085006/neurology_gwcowu.png"
            tittle="Neurology 
            Department"
          ></CustomCard2>
        </div>
        <div className="text-end pt-[5rem]">
          <CustomButton2
            to=""
            tittle="Siguiente"
            bottonClass="bg-[#274760] text-white text-[1.5rem] font-semibold px-[7rem] py-[1rem] rounded-[1rem]"
          ></CustomButton2>
        </div>
      </div>
    </div>
  );
};

export default Especialidades;
