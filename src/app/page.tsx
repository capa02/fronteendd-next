import Image from "next/image";
import Link from "next/link";

// Data placeholder untuk 8 gambar
// CATATAN: Anda HARUS menempatkan file gambar di folder '/public/images/' proyek Next.js Anda
const images = [
    { src: 'foto2.png', alt: 'Karyawan 1', id: 1 },
    { src: 'foto1.png', alt: 'Karyawan 2', id: 2 },
    { src: 'foto3.png', alt: 'Karyawan 3', id: 3 },
    { src: 'foto4.png', alt: 'Karyawan 4', id: 4 },
    { src: 'foto5.png', alt: 'Karyawan 5', id: 5 },
    { src: 'foto6.png', alt: 'Karyawan 6', id: 6 },
    { src: 'foto7.png', alt: 'Karyawan 7', id: 7 },
    { src: 'foto8.png', alt: 'Karyawan 8', id: 8 },
];

export default function AboutParagon() {
    return (
        // 1. Container Utama: Full screen (h-screen), posisi relatif untuk menampung elemen absolut
        <div className="relative w-screen h-screen overflow-hidden">

            {/* 2. Grid Latar Belakang (8 Gambar) */}
            <div className="grid grid-cols-4 grid-rows-2 w-full h-full">
                {images.map((img, index) => (
                    // Setiap kotak grid
                    <div key={img.id} className="relative w-full h-full">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill // Properti 'fill' Next.js agar gambar mengisi penuh div parent
                            sizes="(max-width: 768px) 50vw, 25vw"
                            style={{ objectFit: 'cover' }}
                            priority={index < 4} // Prioritas untuk gambar yang terlihat di awal
                        />
                        {/* Overlay untuk menggelapkan gambar agar teks putih terbaca */}
                        <div className="absolute inset-0 bg-black opacity-30 transition duration-300 hover:opacity-10"></div>
                    </div>
                ))}
            </div>

            {/* 3. Navbar/Header (Posisikan di atas semua) */}
            <header className="absolute top-0 left-0 right-0 p-6 z-20 flex justify-between items-center text-white">

                {/* Logo dan Teks */}
                <div className="text-xl font-bold flex items-center gap-2 drop-shadow-lg">
                    <span className="text-3xl">P</span>ARAGON CORP
                </div>

                {/* Navigasi Tautan */}
                <nav className="flex gap-6 text-sm font-medium">
                    <Link href="/about" className="hover:underline">About Us</Link>
                    <Link href="/brands" className="hover:underline">Brands</Link>
                    <Link href="/innovation" className="hover:underline">Innovation</Link>
                    <Link href="/career" className="hover:underline">Career</Link>
                    <Link href="/news" className="hover:underline">News</Link>
                    <span className="ml-4 cursor-pointer">🔍</span>
                </nav>
            </header>

            {/* 4. Konten Utama Teks (Overlay) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 z-10">
                <div className="max-w-4xl text-center">
                    <h1 className="text-6xl sm:text-7xl font-extrabold mb-6 drop-shadow-xl">
                        About Paragon
                    </h1>
                    <p className="text-xl sm:text-2xl leading-relaxed font-medium drop-shadow-lg">
                        Paragon is an Indonesia beauty company with the purpose of creating a greater good for the society through innovation.
                    </p>
                </div>
            </div>
        </div>
    );
}