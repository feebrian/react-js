import React from "react";
import YoutubeComp from "../../Components/YoutubeComp/YoutubeComp";

class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <YoutubeComp
          time="7:43"
          title="Belajar ReactJs Eps. 1"
          desc="Lorem ipsum dolor sit."
          watchTime="100x ditonton - 2 Hari yang lalu"
        />
        <YoutubeComp
          time="5:55"
          title="Belajar ReactJs Eps. 2"
          desc="Lorem ipsum dolor sit."
          watchTime="500x ditonton - 10 Hari yang lalu"
        />
        <YoutubeComp
          time="9:58"
          title="Belajar ReactJs Eps. 3"
          desc="Lorem ipsum dolor sit."
          watchTime="73x ditonton - 10 Hari yang lalu"
        />
        <YoutubeComp
          time="4:35"
          title="Belajar ReactJs Eps. 4"
          desc="Lorem ipsum dolor sit."
          watchTime="672x ditonton - 13 Hari yang lalu"
        />
        <YoutubeComp />
      </div>
    );
  }
}

export default HomeComponent;
