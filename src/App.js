import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Text from "./text";
import { TestContext } from "./TestContext";

var timer;

class APP extends React.Component {
  constructor() {
    super();
    this.state = {
      scsecond: 0,
      min: 0,
      hour: 0,
      isStart: false,
      // title: "Click chenge to time ;)",
    };
  }
  startTime = () => {
    if (this.state.isStart === false) {
      this.setState({
        isStart: true,
      });
      timer = setInterval(() => {
        this.setState({
          scsecond: this.state.scsecond + 1,
        });
        if (this.state.scsecond === 60) {
          this.setState({
            scsecond: 0,
            min: this.state.min + 1,
          });
        }
        if (this.state.min === 60) {
          this.setState({
            scsecond: 0,
            min: 0,
            hour: this.state.hour + 1,
          });
        }
      }, 1000);
    }
  };

  eventhanding = () => {
    this.setState({
      isStart: false,
    });
    clearInterval(timer);
  };
  restTime = () => {
    this.eventhanding();
    this.setState({
      scsecond: 0,
      min: 0,
      hour: 0,
    });
  };

  render() {
    let h = this.state.hour;
    let m = this.state.min;
    let s = this.state.scsecond;
    return (
      <div className="h-full w-full flex flex-col items-center justify-around ">
        <Text
          restTime={this.restTime}
          startTime={this.startTime}
          eventhanding={this.eventhanding}
          time={`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${
            s > 9 ? s : "0" + s
          }`}
          pageTime={{
            hour: this.state.hour,
            minute: this.state.min,
            second: this.state.scsecond,
          }}
        />
      </div>
    );
  }
}

// const APP = () => {
//   const [hour, setHour] = useState(0);
//   const [min, setMin] = useState(0);
//   const [scsecond, setScsecond] = useState(0);
//   const [isStart, setISstarte] = useState(false);

//   const startTime = () => {
//     const timer = setInterval(() => {
//       if (isStart === false) {
//         setScsecond(scsecond + 1);
//         if (scsecond === 60) {
//           setScsecond(0);
//           setMin(min + 1);
//         }
//         if (min === 60) {
//           setMin(0);
//           setHour(hour + 1);
//         }
//       }
//     }, 1000);
//   };
//   const eventhanding = () => {
//     setISstarte(true);
//     clearInterval(timer);
//   };
//   const restTime = () => {
//     this.eventhanding();
//     setHour(0);
//     setMin(0);
//     setScsecond(0);
//   };

//   // let h = hour;
//   // let m = min;
//   // let s = scsecond;
//   return (
//     <div className="h-full w-full flex flex-col items-center justify-around bg-zinc-800">
//       <Text
//         time={`${hour.toString().padStart(2, "0")} : ${min
//           .toString()
//           .padStart(2, "0")} : ${scsecond.toString().padStart(2, "0")}`}
//       />

//       <div className="flex flex-row w-full h-full items-center justify-center bg-zinc-800 ">
//         <button
//           className="w-[160px] h-[50px] bg-slate-900 rounded-lg text-[20px] text-slate-100 m-4"
//           onClick={startTime}
//         >
//           {" "}
//           Start
//         </button>

//         <button
//           className="w-[160px] h-[50px] bg-slate-900 rounded-lg text-[20px] text-slate-100 m-4 "
//           onClick={restTime}
//         >
//           {" "}
//           reset
//         </button>
//         <button
//           className="w-[160px] h-[50px] bg-slate-900 rounded-lg text-[20px] text-slate-100 m-4 "
//           onClick={eventhanding}
//         >
//           {" "}
//           Stop
//         </button>
//       </div>
//       {/* {this.state.time} */}
//     </div>
//   );
// };

export default APP;
