import React from "react";
import ReactDOM from "react-dom/client";

class Text extends React.Component {
  render() {
    return (
      <div className=" w-full h-[469px] flex flex-col items-center justify-evenly ">
        <h2 className="text-[20px] text-teal-600">{this.props.title}</h2>
        <div className="text-[50px] w-[200px] h-[200px] bg-slate-200 flex justify-center items-center rounded-full border-[6px] border-blue-800">
          {this.props.time}
        </div>
        {/* <button onClick={this.props.handing}> changes</button> */}
      </div>
    );
  }
}

export default Text;
