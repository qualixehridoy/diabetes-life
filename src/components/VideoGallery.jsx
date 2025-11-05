import { useRef, useState } from "react";
import { Play, X } from "lucide-react";

export default function VideoGallery() {
  const videos = [
    {
      id: 1,
      title: "Doctor Consulting a Patient",
      src: "/GalleryVideo1.mp4",
      poster: "/GalleryVideo1Fallback.jpg",
    },
    {
      id: 2,
      title: "Healthy Food for Wellness",
      src: "/GalleryVideo2.mp4",
      poster: "/GalleryVideo2Fallback.jpg",
    },
    {
      id: 3,
      title: "Healthcare Team Collaboration",
      src: "/GalleryVideo3.mp4",
      poster: "/GalleryVideo3Fallback.jpg",
    },
    {
      id: 4,
      title: "Fitness and Active Lifestyle",
      src: "/GalleryVideo4.mp4",
      poster: "/GalleryVideo4Fallback.jpg",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);
  const modalVideoRef = useRef(null);

  const openModal = (video) => {
    setSelectedVideo(video);
    setTimeout(() => modalVideoRef.current?.play(), 200);
  };

  const closeModal = () => {
    modalVideoRef.current?.pause();
    setSelectedVideo(null);
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto text-center space-y-12">
        {/* Heading */}
        <div className="space-y-5">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 font-Hanken leading-tight">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Medical Video Gallery
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover inspiring medical stories, wellness tips, and preventive
            health practices through our curated video collection.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => openModal(video)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <video
                  src={video.src}
                  poster={video.poster}
                  muted
                  playsInline
                  preload="metadata"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                ></video>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-50 group-hover:opacity-60 transition-opacity duration-500"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-blue-600/70 backdrop-blur-md rounded-full p-4 sm:p-5 transition-all duration-300 hover:scale-110 shadow-lg">
                    <Play className="text-white w-8 h-8 sm:w-9 sm:h-9" />
                  </div>
                </div>

                {/* Beautiful Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-5 py-4">
                  <h3 className="text-white text-xl font-semibold tracking-tight drop-shadow-md transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] aspect-video bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
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
