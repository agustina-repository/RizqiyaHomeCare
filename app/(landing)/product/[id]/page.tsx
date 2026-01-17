import Image from "next/image";
import ProductAction from "../../components/product-detail/product-action";

const ProductDetail = () => {
  return (<main className="min-h-screen bg-gray-100">
    <div className="container mx-auto py-40 flex gap-12">
      <div className ="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
        <Image src="/images/products/Group 16.png"
            width={550}
            height={550}
            alt="Product 4 Image"
            className="aspect-square object-contain w-full"        
        />
      </div>
      <div className="w-full py-7">
        <h1 className="font-bold text-5xl mb-6">SportsOn HyperSoccer v2</h1>
        <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit"> 
            Kelas Sebelum Melahirkan
        </div>
        <p className="leading-loose mb-8"> 
             {/* Kelas sebelum kelahiran atau <em>Parenting Class</em> merupakan wadah bagi para orangtua
             adik bayi untuk mempersiapkan kepercayaan diri dalam merawat adik bayi.
             Kelas ini terdiri dari edukasi laktasi(menyusui), memandikan bayi, melakukan
             perawatan tali pusat, serta pijat bayi. 
             Harga yang tertera merupakan paket 60 menit dan konsultasi */}

             <strong>Kelas Sebelum Kelahiran</strong> atau <em>Parenting Class</em> merupakan wadah edukatif bagi calon orang tua dalam mempersiapkan diri menyambut kehadiran buah hati.
             Kelas ini dirancang untuk membantu meningkatkan kepercayaan diri orang tua dalam merawat bayi sejak hari pertama kelahiran.
             Materi yang diberikan meliputi edukasi laktasi (menyusui), teknik memandikan bayi, perawatan tali pusat, serta pijat bayi yang aman dan tepat.<br />
             <strong>Informasi Paket</strong> <br/>
             Biaya yang tercantum merupakan harga untuk paket sesi berdurasi 60 menit dan sudah termasuk konsultasi bersama tenaga profesional
        </p>
        <div className="text-primary text-3xl font-semibold mb-12">
            { Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 3,
            }).format(250000)
            }
        </div>
        <ProductAction/>
      </div>
    </div>
  </main>); 
}
export default ProductDetail;   