import React from "react";
import appointmentbanner from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={appointmentbanner}
          class="max-w-sm rounded-lg shadow-2xl"
          alt="Dentist chair"
        />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          {/* <button class="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
