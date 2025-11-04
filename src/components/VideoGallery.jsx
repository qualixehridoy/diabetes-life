import { useRef, useState } from "react";
import { Play, Pause, ExternalLink } from "lucide-react";

export default function VideoGallery() {
  const videos = [
    {
      id: 1,
      title: "Living Well with Diabetes",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      url: "https://example.com/video1",
    },
    {
      id: 2,
      title: "Healthy Eating Tips",
      src: "https://www.w3schools.com/html/movie.mp4",
      url: "https://example.com/video2",
    },
    {
      id: 3,
      title: "Managing Stress Effectively",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      url: "https://example.com/video3",
    },
    {
      id: 4,
      title: "Physical Activity and Diabetes",
      src: "https://www.w3schools.com/html/movie.mp4",
      url: "https://example.com/video4",
    },
  ];

  const [playing, setPlaying] = useState({});
  const videoRefs = useRef({});

  const togglePlay = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying((prev) => ({ ...prev, [id]: true }));
    } else {
      video.pause();
      setPlaying((prev) => ({ ...prev, [id]: false }));
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary">
          🎥 Explore Our Awareness Video Gallery
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Learn more about diabetes care, healthy living, and mental well-being
          through these short videos.
        </p>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Video Container */}
              <div className="relative group">
                <video
                  ref={(el) => (videoRefs.current[video.id] = el)}
                  src={video.src}
                  className="w-full h-60 object-cover"
                  preload="metadata"
                ></video>

                {/* Overlay Play Button */}
                <button
                  onClick={() => togglePlay(video.id)}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {playing[video.id] ? (
                    <Pause className="text-white w-12 h-12" />
                  ) : (
                    <Play className="text-white w-12 h-12" />
                  )}
                </button>
              </div>

              {/* Video Info */}
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  {video.title}
                </h3>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium text-sm transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  Watch More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
