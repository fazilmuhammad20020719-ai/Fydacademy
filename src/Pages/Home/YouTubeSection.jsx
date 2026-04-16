import React from 'react';

const videos = [
  {
    id: 'eAbf0D7fVMY',
    title: 'DaVinci Resolve 19.1 – Small Changes, BIG Improvements (Our fav...)',
  },
  {
    id: 'BLNijqxO7vE',
    title: 'MICRO COLOR PANEL Hands On Review – Blackmagic DaVinci Res...',
  },
  {
    id: 'O8gfzGeXncs',
    title: 'Better than After Effects? Incredible FUSION VFX Compositing Ma...',
  },
  {
    id: 'u8nOa9f7d9c',
    title: 'NORMALISATION – Audio Deliveries on DaVinci Resolve 19.5 Mast...',
  },
  {
    id: 'nEuMKAoG0_Y',
    title: 'DaVinci Resolve Color Management MASTERCLASS – LUTs, CSTs, #...',
  },
  {
    id: 'v0M0y_0d5oM',
    title: 'The Secret to Professional Color Grading in DaVinci Resolve',
  },
];

const YouTubeSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="w-[95%] max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1B32] mb-2">
            Follow us on YouTube
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            We regularly release amazing free content to our{' '}
            <a
              href="https://www.youtube.com/@T2Ffilms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1C619A] font-semibold hover:underline"
            >
              Channel
            </a>
          </p>
        </div>

        {/* Video List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              {/* Thumbnail */}
              <div className="relative w-full overflow-hidden bg-black">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#FF0000] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title bar */}
              <div className="px-4 py-3 bg-[#F7F8FA]">
                <p className="text-sm font-semibold text-[#0B1B32] truncate group-hover:text-[#fa4616] transition-colors">
                  {video.title}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">Team 2 Films</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/@T2Ffilms"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF0000] hover:bg-[#cc0000] text-white px-8 py-3 rounded-full font-semibold text-sm transition-colors duration-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.2 5 12 5 12 5s-4.2 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.9C6.8 19 12 19 12 19s4.2 0 7-.2c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l5.5 3L10 15z" />
            </svg>
            Visit our YouTube Channel
          </a>
        </div>

      </div>
    </section>
  );
};

export default YouTubeSection;
