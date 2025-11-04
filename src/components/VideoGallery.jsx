import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoGallery() {
  const videos = [
    {
      id: 1,
      title: "Doctor Consulting a Patient",
      src: "https://cdn.pixabay.com/video/2020/09/13/49815-458438877_large.mp4",
    },
    {
      id: 2,
      title: "Healthy Food for Wellness",
      src: "https://cdn.pixabay.com/video/2019/11/26/29488-375947200_large.mp4",
    },
    {
      id: 3,
      title: "Healthcare Team Collaboration",
      src: "https://cdn.pixabay.com/video/2016/02/29/2340-157269921_large.mp4",
    },
    {
      id: 4,
      title: "Fitness and Active Lifestyle",
      src: "https://cdn.pixabay.com/video/2022/06/18/120679-721759754_large.mp4",
    },
  ];

  const [playing, setPlaying] = useState({});
  const videoRefs = useRef({});

  const togglePlay = (id) => {
    const currentVideo = videoRefs.current[id];
    if (!currentVideo) return;

    // Pause all other videos
    Object.keys(videoRefs.current).forEach((key) => {
      const vid = videoRefs.current[key];
      if (vid && key !== String(id)) {
        vid.pause();
        setPlaying((prev) => ({ ...prev, [key]: false }));
      }
    });

    // Play or pause the selected one
    if (currentVideo.paused) {
      currentVideo.play();
      setPlaying((prev) => ({ ...prev, [id]: true }));
    } else {
      currentVideo.pause();
      setPlaying((prev) => ({ ...prev, [id]: false }));
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 via-blue-100 to-white py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto text-center space-y-10">
        {/* Heading */}
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 font-Hanken leading-tight">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Medical Video Gallery
            </span>
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover inspiring medical stories, wellness tips, and preventive
            health practices through these short videos.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative group rounded-2xl overflow-hidden bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all duration-500"
            >
              {/* Video */}
              <div className="relative aspect-video overflow-hidden">
                <video
                  ref={(el) => (videoRefs.current[video.id] = el)}
                  src={video.src}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  preload="metadata"
                  playsInline
                ></video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Play/Pause Button */}
                <button
                  onClick={() => togglePlay(video.id)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-primary/60 backdrop-blur-md rounded-full p-4 sm:p-5 transition-transform duration-300 hover:scale-110 shadow-sm">
                    {playing[video.id] ? (
                      <Pause className="text-white w-8 h-8 sm:w-9 sm:h-9" />
                    ) : (
                      <Play className="text-white w-8 h-8 sm:w-9 sm:h-9" />
                    )}
                  </div>
                </button>
              </div>

              {/* Title */}
              <div className="p-4 text-left">
                <h3 className="text-[20px] font-semibold text-blue-800 truncate">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
