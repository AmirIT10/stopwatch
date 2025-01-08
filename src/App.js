import React from "react";
import ReactDOM from "react-dom/client";
import Text from "./text";
var timer;

class APP extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 20,
      title: "Click chenge to time ;)",
    };
  }
  startTime = () => {
    timer = setInterval(() => {
      this.setState({
        time: this.state.time - 1,
      });
    }, 1000);
  };

  eventhanding = () => {
    // this.setState({
    //  title: "chenge to text title"
    // })
    clearInterval(timer);
  };
  componentDidUpdate() {
    if (this.state.time == 0) {
      clearInterval(timer);
    }
  }

  render() {
    return (
      <div className="h-full w-full flex flex-col items-center justify-around bg-zinc-800">
        <Text title={this.state.title} time={this.state.time} />
        <br />
        {/* {this.state.time} */}
        <button
          className="w-[160px] h-[50px] bg-slate-900 rounded-lg text-[20px] text-slate-100"
          onClick={this.startTime}
        >
          {" "}
          Start
        </button>
        <br />
        <br />
        <button
          className="w-[160px] h-[50px] bg-slate-900 rounded-lg text-[20px] text-slate-100 "
          onClick={this.eventhanding}
        >
          {" "}
          Stop
        </button>
      </div>
    );
  }
}

export default APP;
