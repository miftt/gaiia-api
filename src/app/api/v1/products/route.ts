import { NextResponse } from 'next/server'
import { createApiResponse, createErrorResponse } from '@/types/api'

// Mock data - replace with your database
const products = [
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
  },
  {
    "id": "prod-11",
    "productName": "Dr. Martens 1460 Smooth Leather Boot",
    "description": "Sepatu bot kulit klasik Dr. Martens dengan sol ikonik AirWair, cocok untuk gaya yang tangguh dan abadi.",
    "price": 2899000,
    "imageUrl": "https://cdn.media.amplience.net/i/drmartens/11822006.80?$smart576$&fmt=auto",
    "categoryId": "cat-02",
    "brandId": "brand-03",
    "createdAt": "2025-06-08T10:00:00Z",
    "updatedAt": "2025-06-11T11:55:08Z"
  },
  {
    "id": "prod-12",
    "productName": "Dr. Martens Vegan 1460 Felix Rub Off Boots",
    "description": "Versi vegan dari sepatu bot 1460 klasik Dr. Martens, dibuat dari bahan sintetis berkualitas tinggi.",
    "price": 2999000,
    "imageUrl": "https://cdn.media.amplience.net/i/drmartens/14045001.80?$smart1024$&fmt=auto",
    "categoryId": "cat-02",
    "brandId": "brand-03",
    "createdAt": "2025-06-08T10:00:00Z",
    "updatedAt": "2025-06-11T11:55:08Z"
  },
  {
    "id": "prod-13",
    "productName": "Dr. Martens Jadon Smooth Leather Platform Boots",
    "description": "Sepatu bot platform Dr. Martens dengan sol ganda yang memberikan tampilan berani dan ketinggian ekstra.",
    "price": 3299000,
    "imageUrl": "https://cdn.media.amplience.net/i/drmartens/15265001.80?$smart1024$&fmt=auto",
    "categoryId": "cat-02",
    "brandId": "brand-03",
    "createdAt": "2025-06-08T10:00:00Z",
    "updatedAt": "2025-06-11T11:55:08Z"
  },
  {
    "id": "prod-14",
    "productName": "Dr. Martens Chelsea Boot 2976",
    "description": "Sepatu bot Chelsea klasik Dr. Martens yang mudah dipakai dengan panel elastis samping, memadukan kenyamanan dan gaya ramping.",
    "price": 2999000,
    "imageUrl": "https://cdn.media.amplience.net/i/drmartens/11853001.80?$smart1024$&fmt=auto",
    "categoryId": "cat-02",
    "brandId": "brand-03",
    "createdAt": "2025-06-08T10:00:00Z",
    "updatedAt": "2025-06-11T11:55:08Z"
  },
  {
    "id": "prod-15",
    "productName": "Dr. Martens Pascal Virginia Leather Boots",
    "description": "Sepatu bot Dr. Martens Pascal yang lebih lembut dan lentur, terbuat dari kulit Virginia yang halus dan bertekstur.",
    "price": 2799000,
    "imageUrl": "https://cdn.media.amplience.net/i/drmartens/13512006.80?$smart1024$&fmt=auto",
    "categoryId": "cat-02",
    "brandId": "brand-03",
    "createdAt": "2025-06-08T10:00:00Z",
    "updatedAt": "2025-06-11T11:55:08Z"
  },
  {
    "id": "prod-16",
    "productName": "Timberland 6-Inch Premium Waterproof Boots",
    "description": "Sepatu bot tahan air ikonik Timberland, dirancang untuk daya tahan dan perlindungan di segala cuaca.",
    "price": 2799000,
    "imageUrl": "https://assets.timberland.com/images/t_img/f_auto,h_650,w_650,e_sharpen:60/dpr_2.0/v1741199070/TB110061713-HERO/Mens-Timberland-Premium-6Inch-Waterproof-Boot.png",
    "categoryId": "cat-02",
    "brandId": "brand-04",
    "createdAt": "2025-06-08T10:00:00Z",
    "updatedAt": "2025-06-11T12:00:00Z"
  },
  {
    "id": "prod-17",
    "productName": "Men's Redwood Falls Waterproof Moc-Toe Boot",
    "description": "Sepatu bot **Waterproof Redwood Falls** dirancang untuk medan yang sulit. Bagian atas terbuat dari kulit premium tahan air dan memiliki perangkat keras tali speed-lace anti-karat, menawarkan perlindungan yang tahan lama. Lapisan **ReBOTL™** mengandung 50% plastik daur ulang, alas kaki **OrthoLite®** memberikan kenyamanan, sementara membran **TimberDry™** dan sol luar karet **Gripstick™** dengan desain lug L7 membantu traksi dan daya tahan.",
    "price": 2603527,
    "imageUrl": "https://assets.timberland.com/images/t_img/f_auto,h_650,w_650,e_sharpen:60/dpr_2.0/v1719454458/TB1A2EDRF13-HERO/Mens-Redwood-Falls-Waterproof-MocToe-Boot.png",
    "categoryId": "cat-02",
    "brandId": "brand-04",
    "createdAt": "2025-06-08T10:00:00Z",
    "updatedAt": "2025-06-11T12:01:56Z"
  },
  {
    "id": "prod-18",
    "productName": "Men's Timberland PRO® and Pabst Blue Ribbon Direct Attach 6\" Soft Toe Waterproof Work Boot",
    "description": "Di mana ketangguhan tempat kerja bertemu gaya santai: Sepatu bot kerja **Timberland PRO®** dan **Pabst Blue Ribbon Direct Attach 6\" Soft Toe** dibuat dari kulit tahan bir dengan konstruksi tahan air yang disegel jahitan untuk menjaga kaki tetap kering. Dilengkapi dengan detail **Pabst Blue Ribbon**, termasuk pembuka botol bawaan pada tag sepatu. Teknologi **Anti-Fatigue** meredam setiap langkah Anda, sementara pelat penyebar guncangan berkontur menambah dukungan struktural. Kerah empuk meningkatkan kenyamanan, dan teknologi **Microban®** membantu melawan bau dan keausan. Dengan perlindungan bahaya listrik dan sol luar karet tahan selip, panas, minyak, dan abrasi, sepatu bot ini bekerja sangat keras—lalu bersantai dengan gaya.",
    "price": 2925000,
    "imageUrl": "https://assets.timberland.com/images/t_img/f_auto,h_650,w_650,e_sharpen:60/dpr_2.0/v1748460999/TB0A6413ES2-HERO/Mens-Timberland-PRO-and-Pabst-Blue-Ribbon-Direct-Attach-6-Soft-Toe-Waterproof-Work-Boot.png",
    "categoryId": "cat-02",
    "brandId": "brand-04",
    "createdAt": "2025-06-08T10:00:00Z",
    "updatedAt": "2025-06-11T12:04:38Z"
  },
  {
    "id": "prod-19",
    "productName": "Women's Linden Woods 6-Inch Waterproof Boot",
    "description": "Bergaya, tahan lama, dan siap membawa Anda ke mana pun jalan hidup membawa, sepatu bot pergelangan kaki ini akan membantu Anda tetap kering dan hangat sambil menawarkan keserbagunaan dan fungsi yang sebenarnya. Dimulai dengan bagian atas kulit **Premium Timberland®** tahan air yang disegel jahitannya, kami kemudian menambahkan isolasi **PrimaLoft®** 200g yang dirancang untuk kenyamanan saat suhu mulai turun, lapisan kain **ReBOTL™** yang mengandung 50% plastik PET daur ulang, dan alas kaki busa **OrthoLite®** yang nyaman. Sol luar karetnya membantu memberikan traksi basah dan kering di bawah kaki.",
    "price": 2115366,
    "imageUrl": "https://assets.timberland.com/images/t_img/f_auto,h_650,w_650,e_sharpen:60/dpr_2.0/v1734035611/TB0A2PRVEQ1-HERO/Womens-Linden-Woods-6Inch-Waterproof-Boot.png",
    "categoryId": "cat-02",
    "brandId": "brand-04",
    "createdAt": "2025-06-08T10:00:00Z",
    "updatedAt": "2025-06-11T12:06:53Z"
  },
  {
    "id": "prod-20",
    "productName": "Women's Stone Street Mid 7-Eye Platform Boot",
    "description": "Dipercantik dengan dekorasi kiltie yang menawan, **Stone Street 7-Eye Platform Boot** memiliki gaya dan daya tahan yang sama. Terinspirasi oleh sepatu perahu 3 mata asli kami, dengan bagian atas **Premium Timberland® Leather** dan lapisan kain **ReBOTL™** yang terbuat dari setidaknya 50% plastik daur ulang, ditambah alas kaki **OrthoLite®** untuk kenyamanan yang memicu setiap langkah Anda. Sol luar karet yang kuat, yang dibuat dari 10% karet yang bersumber dari pertanian yang berkomitmen pada pertanian regeneratif, membantu memberikan traksi di setiap medan.",
    "price": 2603527,
    "imageUrl": "https://assets.timberland.com/images/t_img/f_auto,h_650,w_650,e_sharpen:60/dpr_2.0/v1719375380/TB0A27YZEN1-HERO/Womens-Stone-Street-Mid-7Eye-Platform-Boot.png",
    "categoryId": "cat-02",
    "brandId": "brand-04",
    "createdAt": "2025-06-08T10:00:00Z",
    "updatedAt": "2025-06-11T12:06:53Z"
  },
]

export async function GET() {
  try {
    return NextResponse.json(
      createApiResponse(products, 'Products retrieved successfully')
    )
  } catch (error) {
    return NextResponse.json(
      createErrorResponse('Failed to retrieve products', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate request body
    if (!body.productName || !body.price) {
      return NextResponse.json(
        createErrorResponse('Invalid request', 'Product name and price are required'),
        { status: 400 }
      )
    }

    // Create new product
    const newProduct = {
      id: `prod-${Date.now()}`,
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    return NextResponse.json(
      createApiResponse(newProduct, 'Product created successfully'),
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      createErrorResponse('Failed to create product', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
} 