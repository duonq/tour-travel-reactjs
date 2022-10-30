import React from "react";

const SlideImage = ({ children, backgroundImage }: any) => {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                height: "450px",
                backgroundSize: "cover",
                textAlign: "center",
            }}
        >
            {children}
        </div>
    )
}

export default SlideImage;
