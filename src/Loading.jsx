import React from "react";
import ReactLoading from "react-loading";

export const Loading = () => {
  return (
    // TODO Ideally make this component embeddible everywhere and it keeps being centered
    <div className="">
      <ReactLoading
        type={"spinningBubbles"}
        color="#ffca00"
        width={30}
        height={30}
      />
    </div>
  );
};
