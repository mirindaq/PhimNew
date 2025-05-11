export default function MovieCard() {
  return (
    <>
      <div className="relative bg-phimCard rounded overflow-hidden cursor-pointer group shadow">
        <img
          src="https://ext.same-assets.com/595595354/761590175.webp"
          alt="Hoài Thủy Trúc Đình"
          className="object-cover w-full h-36 md:h-44 group-hover:scale-105 transition-transform"
        />
        <div className="absolute top-2 left-2 bg-red-600 text-xs px-2 py-0.5 rounded font-semibold">
          Tập 30 | Vietsub + Thuyết Minh
        </div>
        <div className="absolute bottom-2 left-2 text-base font-bold text-white drop-shadow">
          Hoài Thủy Trúc Đình
        </div>
      </div>
    </>
  )
}
