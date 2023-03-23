import React from "react";
import "./YoutubeComp.css";

const YoutubeComp = (props) => {
  return (
    <div className="card">
      <div className="img-thumb">
        <img
          src="https://i.ytimg.com/vi/7hrcWx_ZRq4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBmm-VztjS0sgXy8huVd-TBdLGQOw"
          alt=""
          width={300}
        />
        <p>{props.time}</p>
      </div>
      <div className="text">
        <h3 className="title">{props.title}</h3>
        <p className="desc">{props.desc}</p>
        <p className="watchTime">{props.watchTime}</p>
      </div>
    </div>
  );
};

YoutubeComp.defaultProps = {
  time: "0:00",
  title: "Title",
  desc: "Video Excerpt",
  watchTime: "0x ditonton - 0 Menit yang lalu",
};

export default YoutubeComp;
