import React, { useState } from "react";
import "./bookingform.css";
import axios from "axios";

function Bookingform({
  formdata,
  setformData,
  availableTime,
  setavailabeTime,
  submitted,
  setSubmitted,
  clicked,
  setClicked,
}) {
  const [BookingDetails, setBookingDetails] = useState({
    Date: "",
    Time: "",
    GuestNumber: "",
    Occasion: "",
    freeTime: [...availableTime.Times],
  });

  const handleSubmition = (e) => {
    e.preventDefault();
    // console.log(availableTime.Times)
    // setformData([...formdata, BookingDetails]);
    const uploadable = BookingDetails;
    axios
      .post("http://localhost:3000/userData", uploadable)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    console.log(formdata);
    setSubmitted(true);
    setClicked(true);
    setBookingDetails({
      ...BookingDetails,
      Date: "",
      Time: "",
      GuestNumber: "",
      Occasion: "Date Night",
      freeTime: [],
    });
  };

  return (
         <div className="bookingfromBiner">
      <h1 className="BookingHeader">Book Table</h1>
      <form onSubmit={handleSubmition} className="formContainer">
        <div className="formFieldswraper">
          <label htmlFor="formDate">Date</label>
          <input
            type="date"
            id="formDate"
            value={BookingDetails.Date}
            required
            onChange={(e) => {
              setBookingDetails({ ...BookingDetails, Date: e.target.value });
              setavailabeTime({ payload: e.target.value });
              //console.log(BookingDetails.Date);
            }}
            className="Datefield"
          />
        </div>

        <div className="formFieldswraper">
          <label htmlFor="formTime">Time</label>
          <select
            id="formTime"
            value={BookingDetails.Time}
            required
            onChange={(e) => {
              setBookingDetails({
                ...BookingDetails,
                Time: e.target.value,
                freeTime: availableTime.Times.filter(
                  (items) => items !== e.target.value
                ),
              });
            }}
            className="Timefield"
          >
            {availableTime.Times.length === 0 ? (
              <option value="" defaultValue disabled>
                No time slots available for this date
              </option>
            ) : (
              <>
                <option value="" defaultValue disabled>
                  Please select time
                </option>
                {availableTime.Times.map((time) => (
                  <option key={time}> {time} </option>
                ))}
              </>
            )}
          </select>
        </div>

        <div className="formFieldswraper">
          <label htmlFor="formGuest">Number of guests</label>
          <input
            type="number"
            id="formGuest"
            className="Guestfield"
            required
            placeholder="1"
            min="1"
            max="12"
            value={BookingDetails.GuestNumber}
            onChange={(e) => {
              setBookingDetails({
                ...BookingDetails,
                GuestNumber: e.target.value,
              });
            }}
          />
        </div>

        <div className="formFieldswraper">
          <label htmlFor="formOccasion">Occasion</label>
          <select
            id="formOccasion"
            value={BookingDetails.Occasion}
            required
            onChange={(e) => {
              setBookingDetails({
                ...BookingDetails,
                Occasion: e.target.value,
              });
            }}
            className="Occasionfield"
          >
            <option value="" defaultValue disabled>
              Select Occasion
            </option>
            <option value="Date Night">Date Night</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Birthday">Birthday</option>
            <option value="Graduation">Graduation</option>
          </select>
        </div>

        <button type="submit" className="submitReservation">
          Reserve table
        </button>
      </form>
      </div>
  );
}

export default Bookingform;
