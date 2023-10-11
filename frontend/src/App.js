import "./App.css";
import Homepage from "./Pages/Homepage";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Reservetable from "./Pages/Reservetable";
import Fullmenu from "./Pages/Fullmenu";
import Login from "./Pages/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./Pages/Register";
import { useState, useReducer, useEffect } from "react";
import ConfirmedBooking from "./Components/ConfirmedBooking/ConfirmedBooking";
import axios from "axios";

function App() {
  const [formdata, setformData] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);
  

  useEffect(() => {
    axios
      .get("http://localhost:3000/userData")
      .then((res) => {
        console.log(res.data);
        return setformData(res.data);
      })
      .catch((err) => console.log(err));

    setClicked(false);
  }, [clicked]);

  const Change_time = (TimeList, action) => {
    const selectedDate =  formdata.filter(
      (items) => action.payload === items.Date
    );
    console.log(selectedDate);

    if (selectedDate.length === 0) {
      return {
        TimeList,
        Times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
      };
    } else if (selectedDate.length !== 0) {
      if (selectedDate[0].Date === action.payload) {
        //let Temp= selectedDate.map((items)=>{return items.freeTime});
        let bep = selectedDate.map((itemz) => {
          return itemz.Time;
        });
        let zed = selectedDate.map((itemz) => {
          return itemz.freeTime;
        });
        let cap = zed[zed.length - 1].filter(
          (eri) => eri !== bep[bep.length - 1]
        );
        //let cap= bep.map((times)=>{ return zed[0].filter((eri)=> eri !== times)})
        console.log(bep[bep.length - 1]);
        console.log(zed);
        console.log(cap);
        return { TimeList, Times: cap };
      }
    }
  };
  const [TimeList, dispatch] = useReducer(Change_time, {
    Times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (submitted) {
      console.log("hello submitted");
      navigate("/Confirmed");
      setSubmitted(false);
    }
  }, [submitted]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route
          path="/Reservetable"
          element={
            <Reservetable
              availableTime={TimeList}
              setavailabeTime={dispatch}
              setformData={setformData}
              formdata={formdata}
              submitted={submitted}
              setSubmitted={setSubmitted}
              clicked={clicked}
              setClicked={setClicked}
            />
          }
        />
        <Route path="/Confirmed" element={<ConfirmedBooking />} />
        <Route path="/Fullmenu" element={<Fullmenu />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/loginpage" element={<Login />} />
      </Routes>
    </>
  );
}
export default App;

// if (formdata.length === 0) {
//   console.log(action.payload);
//   return TimeList;
// } else if (formdata.length !== 0) {
//   if (action.payload in formdata){
//   const selectedDate = formdata.filter(
//     (items) => action.payload === items.Date
//     );
//   const Selectedtime = formdata.map((items) => {
//     let tt;
//     if (action.payload === items.Date) {tt=items.Time}
//     return tt;
//   });
//   console.log(selectedDate)
//   // let mm;
//   // if (action.payload === selectedDate[0].Date){
//   //   mm= TimeList.filter((time) => time !== Selectedtime)}
//   // else {
//   //     mm=TimeList
//   //   }
//   // return ["1","2","3"];
// }else{
//   return ["1","2","3"];
// }
//(TimeList.filter((time)=> time !== BookingDetails.Time ));
// //let timed;
// if(action.payload === items.Date){
//   return timed = TimeList.filter((time)=> time !== items.Time);
// }
// else if (action.payload !== items.Date){
//   return timed=TimeList}
// return TimeList=timed;


 //["17:00",
        // "18:00",
        // "19:00",
        // "20:00",
        // "21:00",
        // "22:00"]
        // console.log(bep)
        // console.log(Temp);
        //console.log(selectedDate[0].Date)
        //console.log(action.payload)
        // const availableTime= selectedDate.map((items)=>{
        //   // console.log(items.Time)
        //   // console.log(Temp)
        //  return (cap.pop()).filter((time) => time !== items.Time)
        // })
        //console.log("available= " + availableTime[1])