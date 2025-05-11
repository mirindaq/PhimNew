export const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-zinc-800 pt-8 pb-4 px-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
        {/* Logo & chứng nhận */}
        <div className="flex flex-col gap-4 min-w-[180px]">
          <div className="flex items-center gap-2 font-bold text-[#ff6600] text-xl">
            <span className="bg-[#ff6600] rounded-full p-1 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <polygon points="7,4 19,12 7,20" />
              </svg>
            </span>
            FPT Play
          </div>

        </div>

        {/* Cột thông tin */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-semibold mb-2">Về FPT Play</div>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-[#ff6600]">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-[#ff6600]">Các gói dịch vụ</a></li>
              <li><a href="#" className="hover:text-[#ff6600]">Liên hệ</a></li>
              <li><a href="#" className="hover:text-[#ff6600]">Trung tâm hỗ trợ</a></li>
              <li><a href="#" className="hover:text-[#ff6600]">Thông tin</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Dịch vụ</div>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-[#ff6600]">Gói DATA</a></li>
              <li><a href="#" className="hover:text-[#ff6600]">Quảng cáo</a></li>
              <li><a href="#" className="hover:text-[#ff6600]">Mua gói</a></li>
              <li><a href="#" className="hover:text-[#ff6600]">Bảo hành</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Quy định</div>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-[#ff6600]">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-[#ff6600]">Chính sách thanh toán</a></li>
              <li><a href="#" className="hover:text-[#ff6600]">Chính sách bảo mật thông tin dữ liệu</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">
              <span className="inline-flex items-center gap-2">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><path d="M22 16.92V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2"></path><rect width="20" height="14" x="2" y="7" rx="2"></rect></svg>
                19006600
              </span>
            </div>
            <div className="mb-2">
              <span className="inline-flex items-center gap-2">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><path d="M4 4h16v16H4z"></path><path d="M22 4L12 14.01 2 4"></path></svg>
                hotrofptplay@fpt.com
              </span>
            </div>
            <div className="font-semibold mb-2">Theo dõi chúng tôi trên:</div>
            {/* Thêm icon mạng xã hội nếu muốn */}
          </div>
        </div>
      </div>


    </footer>
  );
};
