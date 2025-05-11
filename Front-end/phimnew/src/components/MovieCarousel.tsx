import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { Heart, Share2 } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const slides = [
  {
    bg: "https://images.fptplay53.net/media/OTT/playlist/2025/04/04/cauhatgianthuong1920x1080clean_1743755632095.jpg", // background image
    poster: "https://i.imgur.com/0y8Ftya.png", // logo phim
    title: "SĂN LÙNG THỎ NGỌC MÙA 3",
    year: "2025",
    age: "T13",
    episodes: "6/22 tập",
    country: "Hàn Quốc",
    btn: "Xem ngay",
    desc: "",
  },
  {
    bg: "https://images.fptplay53.net/media/OTT/playlist/2025/04/04/cauhatgianthuong1920x1080clean_1743755632095.jpg", // background image
    poster: "https://i.imgur.com/0y8Ftya.png", // logo phim
    title: "SĂN LÙNG THỎ NGỌC MÙA 3",
    year: "2025",
    age: "T13",
    episodes: "6/22 tập",
    country: "Hàn Quốc",
    btn: "Xem ngay",
    desc: "",
  },
  {
    bg: "https://images.fptplay53.net/media/OTT/playlist/2025/04/04/cauhatgianthuong1920x1080clean_1743755632095.jpg", // background image
    poster: "https://i.imgur.com/0y8Ftya.png", // logo phim
    title: "SĂN LÙNG THỎ NGỌC MÙA 3",
    year: "2025",
    age: "T13",
    episodes: "6/22 tập",
    country: "Hàn Quốc",
    btn: "Xem ngay",
    desc: "",
  },
  // Thêm các slide khác nếu muốn
];

export default function MovieCarousel() {
  return (
    <div className="w-full bg-black flex justify-center">
      <div className="relative w-full aspect-[16/6] flex items-center">
        <Swiper
          modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {slides.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="!w-full h-full flex items-center relative"
                style={{
                  background: `url(${item.bg}) center/cover`,
                  borderRadius: 0,
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end h-full pl-12 pb-12 max-w-[60%]">

                  <div className="text-4xl font-bold mb-2" style={{ color: "#fff", textShadow: "0 2px 8px #000" }}>
                    {item.title}
                  </div>
                  <div className="flex gap-4 text-white/80 text-base mb-6">
                    <span>{item.year}</span>
                    <span>{item.age}</span>
                    <span>{item.episodes}</span>
                    <span>{item.country}</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <button className="bg-[#ff4b20] hover:bg-[#e03d13] text-white font-semibold rounded-lg px-6 py-2 text-base transition cursor-pointer">
                      {item.btn}
                    </button>
                    <button className="bg-zinc-800/80 hover:bg-zinc-700 text-white rounded-full w-10 h-10 flex items-center justify-center  cursor-pointer">
                      <Heart className="w-5 h-5 " />
                    </button>
                    <button className="bg-zinc-800/80 hover:bg-zinc-700 text-white rounded-full w-10 h-10 flex items-center justify-center  cursor-pointer">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}