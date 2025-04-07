import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            Sport<span className="text-orange-500"> Ink</span>
          </h1>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-orange-500 border-b-2 border-orange-400 pb-1">Home</a>
          <a href="#" className="hover:text-orange-500">About Us</a>
          <a href="#" className="hover:text-orange-500">Invest in Sport<span className="text-orange-500">Ink</span></a>
        </div>
        <button className="bg-orange-500 text-black rounded-full px-6 py-2 font-medium">
          Coming Soon
        </button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="bg-orange-800 bg-opacity-30 hover:text-orange-500 inline-block px-4 py-2 rounded-full mb-6">
              Chơi cùng nhau. Vui cùng nhau. Thông qua SportInk.
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Kênh kết nối cộng đồng thông qua <span className="text-orange-400">Thể thao</span> & <span className="text-orange-400">Và các hoạt động</span>
            </h2>
            
            <p className="mb-8 text-gray-300">
              Sport Ink là một kênh kết nối cộng đồng thông qua thể thao và các hoạt động. Với mục tiêu tạo ra một cộng đồng thông tin và chia sẻ về các thể thao, Sport Ink cung cấp cho người dùng một nền tảng để tìm kiếm và tham gia vào các hoạt động thể thao, từ thể thao cá nhân đến thể thao tổ chức.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://drive.google.com/drive/folders/1gbyfF3BPY7FpQrxWKoXUV9_Rmfhtf5sR?usp=sharing" className="inline-block">
                <Image 
                  src="/app-store.png" 
                  alt="Download on the App Store" 
                  width={150} 
                  height={50}
                />
              </a>
              <a href="https://drive.google.com/drive/folders/1gbyfF3BPY7FpQrxWKoXUV9_Rmfhtf5sR?usp=sharing" className="inline-block">
                <Image 
                  src="/google-play.png" 
                  alt="Get it on Google Play" 
                  width={150} 
                  height={50}
                />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/phone-mockup.png"
              alt="GoActive App"
              width={400}
              height={800}
              priority
            />
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      {/* <section className="container mx-auto px-6 py-12">
        <p className="text-gray-500 mb-6">Sponsored by :</p>
        <div className="flex flex-wrap justify-between items-center gap-8">
          <Image src="/sponsor-maze.png" alt="Maze" width={100} height={30} />
          <Image src="/sponsor-trello.png" alt="Trello" width={100} height={30} />
          <Image src="/sponsor-culture-amp.png" alt="Culture Amp" width={100} height={30} />
          <Image src="/sponsor-dropbox.png" alt="Dropbox" width={100} height={30} />
          <Image src="/sponsor-culture-amp-2.png" alt="Culture Amp" width={100} height={30} />
        </div>
      </section> */}

      {/* Testimonial Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h3 className="text-4xl font-bold mb-4">
          3,583 khách hàng có trải nghiệm tuyệt vời cùng 
          Sport<span className="text-orange-500"> Ink</span>
          {/* <span className="text-green-400">GoActive</span> */}
        </h3>
        {/* <p className="text-gray-300 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry&apos;s
        </p> */}
      </section>
    </div>
  );
}
