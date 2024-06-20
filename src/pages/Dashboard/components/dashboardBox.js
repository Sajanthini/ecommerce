import React from 'react';

const DashboardBox = (props) => {
  const colors = props.color || ["#fff", "#fff"]; // default colors if not provided
  return (
    <div className="dashboardBox" style={{
      backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`
    }}>
      <div className="topLeftContent">
        <p className="dashboardBoxText">{props.text}</p>
        <p className="number">{props.number}</p>
      </div>
      <p className="bottomLeftText">{props.bottomLeftText}</p>
      <div className="topRightIcon">{props.topRightIcon}</div>
      <div className="bottomRightIcon">{props.bottomRightIcon}</div>
    </div>
  );
}

export default DashboardBox;
