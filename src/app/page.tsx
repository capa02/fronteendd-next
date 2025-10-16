import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/image/foto2.png", alt: "Karyawan 1", id: 1 },
  { src: "/image/foto1.png", alt: "Karyawan 2", id: 2 },
  { src: "/image/foto3.jpg", alt: "Karyawan 3", id: 3 },
  { src: "/image/foto4.jpg", alt: "Karyawan 4", id: 4 },
  { src: "/image/foto5.jpg", alt: "Karyawan 5", id: 5 },
  { src: "/image/foto6.jpg", alt: "Karyawan 6", id: 6 },
  { src: "/image/foto7.png", alt: "Karyawan 7", id: 7 },
  { src: "/image/foto8.png", alt: "Karyawan 8", id: 8 },
];

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* ========== HERO SECTION ========== */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Grid Background */}
        <div className="grid grid-cols-4 grid-rows-2 w-full h-full">
          {images.map((img, index) => (
            <div key={img.id} className="relative w-full h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
                priority={index < 4}
              />
              <div className="absolute inset-0 bg-black opacity-30 hover:opacity-10 transition duration-300" />
            </div>
          ))}
        </div>

        {/* Navbar */}
        <header className="absolute top-0 left-0 right-0 p-6 z-20 flex justify-between items-center text-white">
          <div className="text-xl font-bold flex items-center gap-2 drop-shadow-lg">
            <span className="text-3xl">L</span>UMÉRA
          </div>
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/brands" className="hover:underline">
              Brands
            </Link>
            <Link href="/innovation" className="hover:underline">
              Innovation
            </Link>
            <Link href="/career" className="hover:underline">
              Career
            </Link>
            <Link href="/news" className="hover:underline">
              News
            </Link>
            <span className="ml-4 cursor-pointer">🔍</span>
          </nav>
        </header>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 z-10">
          <h1 className="text-6xl sm:text-7xl font-extrabold mb-6 drop-shadow-xl">
            About Luméra
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed font-medium drop-shadow-lg max-w-3xl">
            Luméra is an Indonesian skincare brand born from the belief that
            beauty begins with self-care and confidence — powered by nature and
            perfected by science.
          </p>
        </div>
      </section>

      {/* ========== OUR VISION SECTION ========== */}
      <section className="bg-white py-20 px-8 sm:px-24 text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-8">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            To be the leading skincare company that empowers individuals to
            embrace their natural beauty through safe, effective, and
            sustainable products — enhancing confidence and well-being every
            day.
          </p>
        </div>
      </section>

      {/* ========== OUR MISSION SECTION ========== */}
      <section className="bg-gray-50 py-20 px-8 sm:px-24 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-12">Our Mission</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-left">
            <div className="flex items-start gap-4">
              <span className="text-4xl text-blue-500">💧</span>
              <div>
                <h3 className="text-xl font-semibold text-blue-700">
                  Innovating Natural Formulas
                </h3>
                <p className="text-gray-600 mt-2">
                  We combine advanced dermatological science with natural
                  ingredients to create gentle, effective skincare for all skin
                  types.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-4xl text-blue-500">🌿</span>
              <div>
                <h3 className="text-xl font-semibold text-blue-700">
                  Commitment to Sustainability
                </h3>
                <p className="text-gray-600 mt-2">
                  Luméra is dedicated to eco-friendly sourcing, recyclable
                  packaging, and cruelty-free practices to protect our planet.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-4xl text-blue-500">🤝</span>
              <div>
                <h3 className="text-xl font-semibold text-blue-700">
                  Empowering Local Communities
                </h3>
                <p className="text-gray-600 mt-2">
                  We collaborate with local suppliers and communities to promote
                  inclusive growth and shared success.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-4xl text-blue-500">✨</span>
              <div>
                <h3 className="text-xl font-semibold text-blue-700">
                  Building Confidence
                </h3>
                <p className="text-gray-600 mt-2">
                  We strive to inspire confidence in every individual by helping
                  them feel good in their own skin — naturally and beautifully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}