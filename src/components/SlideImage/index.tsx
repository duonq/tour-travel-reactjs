import React from "react";

const SlideImage = ({ children, backgroundImage }: any) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "600px",
          backgroundSize: "cover",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SlideImage;
