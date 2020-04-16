import React from 'react';
import * as washingHand from "./LottieLoading/WashingHand.json";
import Lottie from 'react-lottie';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: washingHand.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const watchingHand = () => {
    return(
        <Lottie
            options={defaultOptions}
            height={500}
            width={500}
            style={{ position: 'absolute', margin: 'auto', left: '0px', right: '0px', top: '0px', bottom: '0px' }} />
    )
};

export default watchingHand
