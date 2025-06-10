import { NextResponse } from "next/server";
import { Product } from "@/types/product/product";

const products: Product[] = [
    {
      "id": "prod-1",
      "productName": "Air Jordan 1 Low Purple Mocha GS Women",
      "description": "Air Jordan 1 Low Purple Mocha GS adalah salah satu varian dari model ikonik Air Jordan 1 yang terkenal dengan desainnya yang stylish dan warna yang menarik. Sepatu ini dirilis sebagai bagian dari koleksi yang menargetkan pasar wanita dan remaja (GS - Grade School). Sepatu ini menonjol dengan kombinasi warna ungu dan mocha, memberikan tampilan yang elegan dan berbeda dari varian lainnya. Secara keseluruhan, sepatu ini merupakan contoh upaya Nike untuk terus memperbarui desain klasik Air Jordan 1 agar tetap sesuai dengan tren masa kini.",
      "price": 2299000,
      "imageUrl": "https://image.807garage.com/content/uploads/2024/6/air-jordan-1-low-purple-mocha-gs-women-1.jpg",
      "categoryId": "cat-01",
      "brandId": "brand-01",
      "createdAt": "2025-06-08T10:00:00Z",
      "updatedAt": "2025-06-11T10:00:00Z"
    },
    {
      "id": "prod-2",
      "productName": "Air Jordan 1 Low Armory Navy Blue",
      "description": "Air Jordan 1 Low Armory Navy Blue adalah salah satu varian dari model ikonik Air Jordan 1 Low, yang dikenal dengan desain klasik dan warna-warna bold namun tetap elegan. Sepatu ini menggabungkan elemen retro dengan nuansa modern, memberikan keseimbangan antara kenyamanan dan gaya. Dengan kombinasi bahan kulit premium dan material sintetis, sepatu ini menawarkan tampilan mewah, daya tahan tinggi, serta fleksibilitas dan kenyamanan dalam penggunaan sehari-hari.",
      "price": 2399000,
      "imageUrl": "https://image.807garage.com/content/uploads/2025/1/air-jordan-1-low-armory-navy-blue-5.jpg",
      "categoryId": "cat-01",
      "brandId": "brand-01",
      "createdAt": "2025-06-08T10:00:00Z",
      "updatedAt": "2025-06-11T10:00:00Z"
    },
    {
      "id": "prod-3",
      "productName": "Air Jordan 1 Mid True Blue Cement GS Women",
      "description": "Air Jordan 1 Mid True Blue Cement GS Women menggabungkan desain klasik Air Jordan 1 dengan sentuhan warna biru yang segar. Warna True Blue mendominasi bagian toe box, Swoosh, dan collar, sedangkan aksen abu-abu dengan motif 'cement' di bagian midsole menambah kesan dinamis. Upper berbahan kulit premium memberikan kesan mewah, sementara teknologi Nike Air di midsole memastikan kenyamanan maksimal. Cocok dipakai untuk gaya streetwear yang sporty dan bold, serta tetap nyaman untuk aktivitas sehari-hari.",
      "price": 2599000,
      "imageUrl": "https://image.807garage.com/content/uploads/2024/6/air-jordan-1-mid-true-blue-cement-gs-women-1.jpg",
      "categoryId": "cat-01",
      "brandId": "brand-01",
      "createdAt": "2025-06-08T10:00:00Z",
      "updatedAt": "2025-06-11T10:00:00Z"
    },
    {
      "id": "prod-4",
      "productName": "Air Jordan 1 Mid Legend Pink GS Women",
      "description": "Air Jordan 1 Mid Legend Pink GS Women adalah varian mid-top yang dirancang untuk wanita dan remaja. Sepatu ini menampilkan warna pink lembut dengan aksen putih, memberikan tampilan yang feminin dan elegan. Tetap mempertahankan elemen klasik seperti logo Swoosh, perforasi toe box, dan siluet khas Air Jordan 1, sepatu ini menawarkan perpaduan sempurna antara gaya retro dan sentuhan modern yang chic.",
      "price": 2299000,
      "imageUrl": "https://image.807garage.com/content/uploads/2024/6/air-jordan-1-mid-legend-pink-gs-women-1.png",
      "categoryId": "cat-01",
      "brandId": "brand-01",
      "createdAt": "2025-06-08T10:00:00Z",
      "updatedAt": "2025-06-11T10:00:00Z"
    },
    {
      "id": "prod-5",
      "productName": "Air Jordan 1 High Dark Mocha GS Women",
      "description": "Dirilis pada tahun 2020, Air Jordan 1 High Dark Mocha GS Women menjadi favorit banyak penggemar sneaker karena kombinasi warnanya yang elegan. Sepatu ini mengusung warna coklat gelap (Dark Mocha) yang berpadu apik dengan aksen putih di bagian Swoosh dan midsole. Desain ini menyasar pasar wanita dan anak-anak (GS), dengan bahan berkualitas dan sentuhan klasik yang cocok untuk kolektor maupun pengguna sehari-hari.",
      "price": 8499000,
      "imageUrl": "https://image.807garage.com/content/uploads/2024/6/air-jordan-1-high-dark-mocha-gs-women-5.jpg",
      "categoryId": "cat-01",
      "brandId": "brand-01",
      "createdAt": "2025-06-08T10:00:00Z",
      "updatedAt": "2025-06-11T10:00:00Z"
    },
    {
      "id": "prod-6",
      "productName": "Chuck Taylor All Star Leather",
      "description": "Sepatu kulit lembut yang klasik, cocok untuk tampilan elegan maupun edgy.",
      "price": 1299000,
      "imageUrl": "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/1/01-CONVERSE-FFSSBCONA-CON132170C-Black.jpg",
      "categoryId": "cat-01",
      "brandId": "brand-02",
      "createdAt": "2025-06-08T10:00:00Z",
      "updatedAt": "2025-06-11T10:00:00Z"
    },
    {
      "id": "prod-7",
      "productName": "Chuck Taylor All Star",
      "description": "Sepatu kanvas ikonik dengan desain sederhana dan kenyamanan klasik.",
      "price": 899000,
      "imageUrl": "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONM9160C000012-1.jpg",
      "categoryId": "cat-01",
      "brandId": "brand-02",
      "createdAt": "2025-06-08T10:00:00Z",
      "updatedAt": "2025-06-11T10:00:00Z"
    },
    {
      "id": "prod-8",
      "productName": "One Star Pro Intro Pack",
      "description": "Sepatu suede ikonik dengan peningkatan performa untuk skateboard.",
      "price": 1049300,
      "imageUrl": "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CON171327C00005H-1.jpg",
      "categoryId": "cat-01",
      "brandId": "brand-02",
      "createdAt": "2025-06-08T10:00:00Z",
      "updatedAt": "2025-06-11T10:00:00Z"
    },
    {
      "id": "prod-9",
      "productName": "Cons One Star Academy Pro Suede",
      "description": "Sepatu suede klasik yang diperbarui untuk aktivitas skateboard.",
      "price": 1039200,
      "imageUrl": "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONA10579CNAV09H-1.jpg",
      "categoryId": "cat-01",
      "brandId": "brand-02",
      "createdAt": "2025-06-08T10:00:00Z",
      "updatedAt": "2025-06-11T10:00:00Z"
    },
    {
      "id": "prod-10",
      "productName": "Chuck 70",
      "description": "Versi modern Chuck klasik dengan bahan premium dan tampilan vintage.",
      "price": 1199000,
      "imageUrl": "https://www.converse.id/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0888-CONA10530C12W006-1.jpg",
      "categoryId": "cat-01",
      "brandId": "brand-02",
      "createdAt": "2025-06-08T10:00:00Z",
      "updatedAt": "2025-06-11T10:00:00Z"
    }  
];


export async function GET() {
    return NextResponse.json(products);
}