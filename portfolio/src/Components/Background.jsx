import "../styles/Background.css";
import BackgroundVideo from "../assets/PORTFOLIO-BACKGROUND.mp4";
export default function Background() {
  return (
    <div id="bg-video-container">
      <video
        style={{ position: "absolute" }}
        src={BackgroundVideo}
        loop
        autoPlay
        muted
        controls={false}
      ></video>
    </div>
  );
}
