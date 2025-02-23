import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import TimeList from "./TimeList";
import { FiSun, FiMoon } from "react-icons/fi";
import { TestContext } from "./TestContext";

// class Text extends React.Component {
//   render() {
//     return (
//       <div className=" w-full h-[469px] flex flex-col items-center justify-evenly ">
//         <h2 className="text-[20px] text-teal-600">{this.props.title}</h2>
//         <div className="text-[50px] w-[500px] h-[200px] bg-slate-200 flex  justify-center items-center rounded-full border-[6px] border-blue-800">
//           {this.props.time}
//         </div>
//         {/* <button onClick={this.props.handing}> changes</button> */}
//       </div>
//     );
//   }
// }

const Text = (props) => {
  // const [title, setTitle] = useState("Click chenge to time ;)");
  const [isLight, setIsLight] = useState(false);
  const [isTitle, setIsTitle] = useState(false);
  const [timeArr, setTimeArr] = useState([]);
  const handlesetIsTitle = () => {
    setIsTitle(!isTitle);
  };
  const handlesetIsLight = () => {
    setIsLight(!isLight);
  };
  const handleAll = () => {
    handlesetIsLight();
    handlesetIsTitle();
  };
  const handleSaveTime = () => {
    const { hour, minute, second } = props.pageTime;

    const newTime = `${hour > 9 ? hour : "0" + hour} : ${
      minute > 9 ? minute : "0" + minute
    } : ${second > 9 ? second : "0" + second}`;
   

    setTimeArr([...timeArr, newTime]);
  };
  return (
    <TestContext.Provider value={{  timeArr,  setTimeArr }}>
      <div
        className={`body w-full h-[100%] flex flex-col justify-around items-center gap-16 ${
          isLight ? "bg-white" : "bg-zinc-800"
        }`}
      >
        <br />
        <div>
          <h2 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1e3c72] via-[#2a5298] to-[#1e3c72] animate-glow-infinite text-center">
            ProductivityChrono
          </h2>
        </div>
        <div
          className="text-[50px] w-[500px] h-[400px] bg-slate-200 flex flex-col justify-center items-center rounded-full border-[5px] border-blue-800"
          onClick={handleSaveTime}
        >
          {props.time}
        </div>
        <div className="flex flex-col items-center justify-start">
          <TimeList />
        </div>
        <div className="flex flex-row w-full h-full items-center justify-center ">
          <button
            className="w-[160px] h-[50px] bg-gradient-to-r from-indigo-700 to-purple-800 hover:from-purple-800 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out active:scale-95 m-4"
            onClick={props.startTime}
          >
            Start
          </button>
          <button
            className="w-[160px] h-[50px] bg-gradient-to-r from-indigo-700 to-purple-800 hover:from-purple-800 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out active:scale-95 m-4 "
            onClick={props.eventhanding}
          >
            {" "}
            Stop
          </button>
          <button
            className="w-[160px] h-[50px] bg-gradient-to-r from-indigo-700 to-purple-800 hover:from-purple-800 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out active:scale-95 m-4"
            onClick={props.restTime}
          >
            {" "}
            reset
          </button>

          <button
            className={`w-[60px] h-[60px] rounded-full p-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isLight
                ? "bg-gradient-to-r from-sky-700 to-blue-800 hover:from-blue-800 hover:to-sky-700 text-white"
                : "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-gray-800"
            }`}
            onClick={handleAll}
          >
            <div className="relative w-8 h-8">
              <span className="absolute inset-0 w-8 h-8 transition-transform group-hover:rotate-90">
                {isLight ? (
                  <FiSun className="w-8 h-8" />
                ) : (
                  <FiMoon className="w-8 h-8" />
                )}
              </span>
            </div>
          </button>
        </div>
      </div>
    </TestContext.Provider>
  );
};

export default Text;
