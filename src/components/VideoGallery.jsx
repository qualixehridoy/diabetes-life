import { useRef, useState } from "react";
import { Play, X } from "lucide-react";

export default function VideoGallery() {
  const videos = [
    {
      id: 1,
      title: "Doctor Consulting a Patient",
      src: "/GalleryVideo1.mp4",
      poster:"/GalleryVideo1Fallback.jpg"
    },
    {
      id: 2,
      title: "Healthy Food for Wellness",
      src: "/GalleryVideo2.mp4",
      poster:"/GalleryVideo2Fallback.jpg"
    },
    {
      id: 3,
      title: "Healthcare Team Collaboration",
      src: "/GalleryVideo3.mp4",
      poster:"/GalleryVideo3Fallback.jpg"
    },
    {
      id: 4,
      title: "Fitness and Active Lifestyle",
      src: "/GalleryVideo4.mp4",
      poster:"/GalleryVideo4Fallback.jpg"
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);
  const modalVideoRef = useRef(null);

  const openModal = (video) => {
    setSelectedVideo(video);
    setTimeout(() => {
      modalVideoRef.current?.play();
    }, 200);
  };

  const closeModal = () => {
    modalVideoRef.current?.pause();
    setSelectedVideo(null);
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
              className="relative group rounded-2xl overflow-hidden bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer"
              onClick={() => openModal(video)}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <video
                  src={video.src}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  preload="metadata"
                  muted
                  playsInline
                  loading="lazy"
                  poster={video.poster}
                ></video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/60 backdrop-blur-md rounded-full p-4 sm:p-5 transition-transform duration-300 hover:scale-110 shadow-sm">
                    <Play className="text-white w-8 h-8 sm:w-9 sm:h-9" />
                  </div>
                </div>
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

      {/* === Video Modal === */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300"
          onClick={closeModal}
        >
          <div
            className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] aspect-video bg-black rounded-2xl overflow-hidden shadow-xl transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 z-10 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player */}
            <video
              ref={modalVideoRef}
              src={selectedVideo.src}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
