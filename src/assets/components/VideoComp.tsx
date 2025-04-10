import { useSelector } from "react-redux";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  video: {
    position: "fixed",
    zIndex: -5,
    minHeight: "100%",
    minWidth: "100%",
    objectFit: "cover",
    inset: 0,
    overflow: "hidden"
  },
});

// const styles = stylex.create({
//   container: {
//     position: "fixed",
//     zIndex: -5,
//     width: '100%',
//     height: '100%',
//     inset: 0,
//     overflow: 'hidden',
//   },
//   video: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
// });

const VideoComp = () => {
  const bgSrc = useSelector(
    ({ backgroundReducer }) => backgroundReducer.backgroundUrl
  );

  return (
    <video src={bgSrc} autoPlay muted loop {...stylex.props(styles.video)} />
  );
  // return (
  //   <div {...stylex.props(styles.container)}>
  //     <video src={bgSrc} autoPlay muted loop {...stylex.props(styles.video)} />
  //   </div>
  // );
};

export default VideoComp;
