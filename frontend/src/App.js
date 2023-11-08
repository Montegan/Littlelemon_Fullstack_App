import "./App.css";
import Homepage from "./Pages/Homepage";
import AboutUs from "./Pages/AboutUs";
import Reservetable from "./Pages/Reservetable";
import Fullmenu from "./Pages/Fullmenu";
import Login from "./Pages/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./Pages/Register";
import { useState, useReducer, useEffect } from "react";
import ConfirmedBooking from "./Components/ConfirmedBooking/ConfirmedBooking";
import axios from "axios";
import MiniHomepage from "./Pages/MiniHomepage";
import Notfoundpage from "./Pages/Notfoundpage";

function App() {
  const [formdata, setformData] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    axios
      .get("https://final-deploy-d74j.onrender.com/reservaions")
      .then(
        (res) => {
          setformData(res.data);
          console.log("my data" + res.data);
        }
      )
      .catch((err) => console.log(err));

    setClicked(false);
  }, [clicked]);

  const Change_time = (TimeList, action) => {
    const selectedDate = formdata.filter(
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
        <Route path="/" element={<MiniHomepage />} />
        <Route path="/Homepage" element={<Homepage />} />
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
        <Route
          path="/loginpage"
          element={<Login loggedin={loggedin} setLoggedin={setLoggedin} />}
        />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </>
  );
}
export default App;

