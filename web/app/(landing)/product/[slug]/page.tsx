import Image from "next/image";
import { notFound } from "next/navigation";
import { productData } from "../data";
import BookingModal from "../../components/booking/booking-modal";

type ProductDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

const ProductDetail = async ({ params }: ProductDetailProps) => {
  const { slug } = await params;

  const product = productData.find(
    (item) => item.slug === slug
  );

  if (!product) return notFound();

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-32 px-4">
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <div className="bg-primary-light aspect-square w-full lg:min-w-[520px] flex justify-center items-center rounded-2xl">
            <Image
              src={product.image}
              width={520}
              height={520}
              alt={product.title}
              className="min-w-full min-h-full object-cover"
              priority
            />
          </div>

          <div className="w-full py-4">
            <h1 className="font-bold text-4xl lg:text-5xl mb-6">
              {product.title}
            </h1>

            {product.badge && (
              <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit mb-6">
                {product.badge}
              </div>
            )}

            {product.description && (
              <div className="leading-loose text-gray-700">
                {product.description}
              </div>
            )}
          </div>
        </div>

        {/* ===== MODE 1 : MULTI PACKAGE ===== */}
        {product.packages && product.packages.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Pilihan Paket
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {product.packages.map((pkg) => (
                <div
                  key={pkg.slug}
                  className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition"
                >
                  {pkg.image && (
                    <div className="bg-primary-light aspect-square flex justify-center items-center mb-6 rounded-xl">
                      <Image
                        src={pkg.image}
                        width={260}
                        height={260}
                        alt={pkg.title}
                        className="object-contain"
                      />
                    </div>
                  )}

                  <h3 className="text-2xl font-semibold mb-3">
                    {pkg.title}
                  </h3>

                  {pkg.description && (
                    <div className="text-gray-600 mb-6 leading-loose">
                      {pkg.description}
                    </div>
                  )}
                  
                  <h4 className="font-semibold text-lg mb-4">
                    Informasi Paket
                  </h4>

                  <div
                    className={`grid gap-6 ${
                      pkg.variants.length === 1
                        ? "grid-cols-1 justify-items-center"
                        : "grid-cols-1 md:grid-cols-2"
                    }`}
                  >
                    {pkg.variants.map((variant) => (
                      <div
                        key={variant.slug}
                        className="border border-primary/30 rounded-2xl p-6 bg-primary-light/20 flex flex-col w-full max-w-md"
                      >
                        <h5 className="font-semibold text-lg mb-1">
                          {variant.title}
                        </h5>

                        {variant.note && (
                          <p className="text-sm text-primary mb-2">
                            {variant.note}
                          </p>
                        )}

                        <div className="text-primary font-bold text-xl mb-4">
                          {Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format(variant.price)}
                        </div>

                        <div className="mt-auto flex justify-end">{
                          <BookingModal 
                            tidyCalLink= {pkg.bookingLink || product.bookingLink || "https://tidycal.com/rizqiyahomecare"}
                            productTitle={product.title}
                            variantTitle={variant.title}
                            />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== MODE 2 : VARIANT ONLY (WITHOUT PACKAGE) ===== */}
        {!product.packages &&
          product.variants &&
          product.variants.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold mb-12 text-center">
                Pilihan Paket
              </h2>

              <div
                className={`grid gap-8 max-w-4xl mx-auto ${
                  product.variants.length === 1
                    ? "grid-cols-1 justify-items-center"
                    : "grid-cols-1 md:grid-cols-2"
                }`}
              >
                {product.variants.map((variant) => (
                  <div
                    key={variant.slug}
                    className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition flex flex-col w-full max-w-md"
                  >
                    <h3 className="text-2xl font-semibold mb-2">
                      {variant.title}
                    </h3>

                    {variant.note && (
                      <p className="text-sm text-primary mb-4">
                        {variant.note}
                      </p>
                    )}

                    <div className="text-primary font-bold text-2xl mb-6">
                      {Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(variant.price)}
                    </div>

                    <div className="mt-auto flex justify-end">{
                      <BookingModal 
                        tidyCalLink={product.bookingLink || "https://tidycal.com/rizqiyahomecare"} 
                        productTitle={product.title}
                        variantTitle={variant.title}
                      />}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
      </div>
    </main>
  );
};

export default ProductDetail;
