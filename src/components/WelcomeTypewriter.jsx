import React from "react";
import Typewriter from "typewriter-effect";

function WelcomeTypewriter(props) {
  return (
    <div className="typewriter-title">
      <Typewriter
        options={{ cursor: "_", delay: 85 }}
        onInit={(typewriter) => {
          typewriter.typeString(props.message).start();
        }}
      />
    </div>
  );
}

export default WelcomeTypewriter;
