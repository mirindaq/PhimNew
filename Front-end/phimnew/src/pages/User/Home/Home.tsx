import MovieCard from "@/components/MovieCard";
import MovieCarousel from "@/components/MovieCarousel";

export default function Home() {
  return (
    <>
      <MovieCarousel />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  )
}
