import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const VideoComp = () => {

    const bgSrc = useSelector( ({backgroundReducer}) => backgroundReducer.backgroundUrl);

    return (
        <video src={bgSrc} autoPlay muted loop className="min-w-full min-h-full fixed z-[-5]"></video>
    );
};

export default VideoComp;