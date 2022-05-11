import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import Button from "./Button";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block py-2">
        <img className="mt-[-135px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 px-5 pb-2">
        <h3 className="text-xl text-primary font-bold py-5">Appointment</h3>
        <h2 className="text-3xl text-white py-2">Make an Appointment</h2>
        <p className="text-white py-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, est
          necessitatibus laboriosam praesentium consequuntur eaque harum
          corporis fugiat temporibus ratione, aperiam saepe tempore
          voluptatibus, placeat nesciunt consequatur vel nostrum officiis.
        </p>
        <Button>Get Starts</Button>
      </div>
    </section>
  );
};

export default MakeAppointment;
