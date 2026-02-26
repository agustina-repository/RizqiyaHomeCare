"use client";

export default function VipTrust() {
  const vvipClients = [
    { id: 1, img: "/images/vip/vip.jpeg" },
    { id: 2, img: "/images/vip/vip2.png" },
    { id: 3, img: "/images/vip/vip6.jpeg" },
    { id: 6, img: "/images/vip/vip3.png" },
    { id: 4, img: "/images/vip/vip4.png" },
    { id: 5, img: "/images/vip/vip5.png" },
  ];

  return (
    <section id="vip" className="py-16 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
          <div className="text-left">
            <h2 className="text-3xl font-black text-gray-900">
              Dipercaya oleh{" "}
              <span className="text-orange-600">Moms & Public Figures</span>
            </h2>
            <p className="text-gray-500 mt-2">
              Kualitas layanan profesional untuk kenyamanan buah hati tercinta.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b-2 border-orange-200 pb-1">
              Professional Choice
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {vvipClients.map((client) => (
            <div
              key={client.id}
              className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
            >
              <img
                src={client.img}
                alt="VVIP Client Testimony"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

              <div className="absolute bottom-4 left-4">
                <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                  <p className="text-[10px] text-white font-bold tracking-tight">
                    VVIP MOM
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
