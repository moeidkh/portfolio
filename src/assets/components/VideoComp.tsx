import { useDispatch, useSelector } from "react-redux";
import * as stylex from "@stylexjs/stylex";
import { useEffect, useRef } from "react";
import { ActionType } from "../../Redux/Background/BackgroundReducer";

const styles = stylex.create({
  video: {
    position: "fixed",
    zIndex: -5,
    minHeight: "100%",
    minWidth: "100%",
    objectFit: "cover",
    inset: 0,
    overflow: "hidden",
  },
});

const VideoComp = () => {
  const videoRef = useRef(null);
  const dispatch = useDispatch();
  const bgSrc = useSelector(
    ({ backgroundReducer }) => backgroundReducer.backgroundUrl
  );

  const loadedVideo = () => {
    dispatch({
      type: ActionType.SetLoading,
      payload: { loading: false },
    });
  };

  useEffect(() => {
    if (videoRef.current) {
      (videoRef.current as HTMLVideoElement).addEventListener(
        "loadeddata",
        loadedVideo
      );
    }

    return () => {
      if (videoRef.current) {
        (videoRef.current as HTMLVideoElement).removeEventListener(
          "loadeddata",
          loadedVideo
        );
      }
    };
  }, [bgSrc]);
  return (
    <video
      src={bgSrc}
      autoPlay
      muted
      loop
      {...stylex.props(styles.video)}
      ref={videoRef}
      // preload="auto"
    />
  );
};

export default VideoComp;
