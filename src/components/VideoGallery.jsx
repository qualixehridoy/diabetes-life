import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import HeroButton from "./Button";

export default function VideoGallery() {
  const video = {
    id: 1,
    title: "Doctor Consulting a Patient",
    src: "/GalleryVideo1.mp4",
    poster: "/GalleryVideo1Fallback.avif",
  };

  const [selectedVideo, setSelectedVideo] = useState(null);
  const modalVideoRef = useRef(null);

  const openModal = () => {
    setSelectedVideo(video);
    setTimeout(() => modalVideoRef.current?.play(), 200);
  };

  const closeModal = () => {
    modalVideoRef.current?.pause();
    setSelectedVideo(null);
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1000px] mx-auto text-center space-y-12">
        {/* Heading */}
        <div className="space-y-5">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black font-Hanken leading-tight">
            Explore Our{" "}
            <span className="bg-accent bg-clip-text text-transparent">
              Medical Video Gallery
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover inspiring medical stories, wellness tips, and preventive
            health practices through our curated video.
          </p>
        </div>

        {/* Single Large Video Card */}
        <div
          onClick={openModal}
          className="group relative mx-auto w-full max-w-4xl rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500"
        >
          {/* Video Thumbnail */}
          <div className="relative aspect-video overflow-hidden">
            <video
              src={video.src}
              poster={video.poster}
              playsInline
              preload="metadata"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            ></video>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary/40 backdrop-blur-md rounded-full p-6 sm:p-8 transition-transform duration-300 hover:scale-110 shadow-xl">
                <Play className="text-white w-10 h-10 sm:w-12 sm:h-12" />
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Modal */}
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
              muted={false}
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Button */}
      <div className="max-w-[1000px] mx-auto pt-12 text-center text-sm">
        <HeroButton text="Learn More" className="mx-auto" />
      </div>
    </section>
  );
}
