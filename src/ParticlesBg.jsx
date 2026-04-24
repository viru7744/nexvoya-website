import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBg() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      options={{
        background: {
          color: {
            value: "#0b0f2a",
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: "#8b5cf6",
          },
          size: {
            value: 2,
          },
          move: {
            enable: true,
            speed: 1,
          },
          opacity: {
            value: 0.5,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#8b5cf6",
            opacity: 0.4,
          },
        },
      }}
    />
  );
}