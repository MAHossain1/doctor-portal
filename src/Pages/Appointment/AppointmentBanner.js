import React from "react";
import appointmentbanner from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero min-h-screen">
      <div className="flex hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <img
            src={appointmentbanner}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Dentist chair"
          />
        </div>
        <div className="flex-1">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
