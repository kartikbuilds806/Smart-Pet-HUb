import Image from "next/image";

export default function GalleryPage() {
  const images = [
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800",
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800",
    "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=800",
    "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?q=80&w=800",
    "https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=800",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800",
  ];

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Happy Pets Gallery</h1>
          <p className="text-lg text-foreground/70">A glimpse into the beautiful pets we've united with families in Dehradun.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden group cursor-pointer">
              <Image 
                src={src} 
                alt="Happy pet" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
