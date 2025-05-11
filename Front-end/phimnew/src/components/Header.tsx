import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Search, Bell, Wallet } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-black w-full border-b border-zinc-800 sticky top-0 z-50 py-3">
      <nav className="max-w-7xl mx-auto flex items-center h-14 px-4 gap-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-[#ff6600] text-xl">
          <span className="bg-[#ff6600] rounded-full p-1 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <polygon points="7,4 19,12 7,20" />
            </svg>
          </span>
          FPT Play
        </a>

        {/* Main Navigation */}
        <ul className="flex-1 flex gap-6 items-center text-[15px] font-medium ml-6">
          <li>
            <a href="/" className="text-white font-bold hover:text-[#ff6600]">Trang chủ</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-[#ff6600]">Truyền hình</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-[#ff6600]">Phim bộ</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-[#ff6600]">V.League</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-[#ff6600]">Anime</a>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-[#ff6600] px-0 h-auto font-normal">
                  Xem thêm <span className="ml-1">▼</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-zinc-900 border-zinc-800 min-w-[140px]">
                <DropdownMenuItem className="hover:bg-zinc-800 hover:text-[#ff6600]">Thiếu nhi</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-zinc-800 hover:text-[#ff6600]">TV Show</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-zinc-800 hover:text-[#ff6600]">Thể thao</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-white hover:text-[#ff6600]">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-[#ff6600]">
            <Bell className="w-5 h-5" />
          </Button>
          <Button className="bg-[#ff6600] hover:bg-[#e65c00] text-white font-semibold rounded-lg px-4 h-9 flex items-center gap-2">
            <Wallet className="w-5 h-5" /> Mua gói
          </Button>
          <a href="#" className="text-white hover:text-[#ff6600] ml-2 text-[15px]">Đăng nhập</a>
        </div>
      </nav>
    </header>
  );
};