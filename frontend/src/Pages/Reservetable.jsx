import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Bookingform from "../Components/BookingForm/Bookingform";
import './Pages.css';
function Reservetable({
  formdata,
  setformData,
  availableTime,
  setavailabeTime,
  submitted,
  setSubmitted,
  clicked,
  setClicked,
}) {
  return (
    <div className="reservationClass">
      <Header />
      <Bookingform
        setformData={setformData}
        formdata={formdata}
        availableTime={availableTime}
        setavailabeTime={setavailabeTime}
        submitted={submitted}
        setSubmitted={setSubmitted}
        clicked={clicked}
        setClicked={setClicked}
      />
      <Footer />
    </div>
  );
}

export default Reservetable;
