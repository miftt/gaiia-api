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
  {
    "id": "prod-21",
    "productName": "Crocs Unisex Classic Clog - Black",
    "description": "Ini adalah clog ikonik yang memulai revolusi kenyamanan di seluruh dunia! Sepatu nyaman yang santai dan pasti akan semakin Anda sukai setiap hari. **Crocs Classic Clogs** menawarkan **Iconic Crocs Comfort™** yang ringan, warna untuk setiap kepribadian, dan ajakan berkelanjutan untuk merasa nyaman dengan sepatu Anda sendiri.\n\nTahan air dan mengapung; berat hanya beberapa ons. Mudah dibersihkan dan cepat kering. Dapat disesuaikan dengan **Jibbitz™ charms**.",
    "price": 999000,
    "imageUrl": "https://www.crocs.co.id/media/catalog/product/cache/94b40b305aac1a23ab36b89567ee43e0/0/1/01-CROCS-FFSSDCCR0-CCR10001-001-Black.jpg",
    "categoryId": "cat-03",
    "brandId": "brand-05",
    "createdAt": "2025-06-11T10:00:00Z",
    "updatedAt": "2025-06-11T12:26:44Z"
  },
  {
    "id": "prod-22",
    "productName": "Crocs Unisex Classic Clog - White",
    "description": "Ini adalah clog ikonik yang memulai revolusi kenyamanan di seluruh dunia! Sepatu nyaman yang santai dan pasti akan semakin Anda sukai setiap hari. **Crocs Classic Clogs** menawarkan **Iconic Crocs Comfort™** yang ringan, warna untuk setiap kepribadian, dan ajakan berkelanjutan untuk merasa nyaman dengan sepatu Anda sendiri.\n\nTahan air dan mengapung; berat hanya beberapa ons. Mudah dibersihkan dan cepat kering. Tali tumit berputar untuk kesesuaian yang lebih aman. **Iconic Crocs Comfort™**: Ringan. Fleksibel. Kenyamanan 360 derajat.",
    "price": 999000,
    "imageUrl": "https://www.crocs.co.id/media/catalog/product/cache/94b40b305aac1a23ab36b89567ee43e0/0/1/01-CROCS-FFSSDCCR0-CCR10001-100-White.jpg",
    "categoryId": "cat-03",
    "brandId": "brand-05",
    "createdAt": "2025-06-11T10:00:00Z",
    "updatedAt": "2025-06-11T12:26:44Z"
  },
  {
    "id": "prod-23",
    "productName": "Crocs Bae Women Clog - Bone",
    "description": "The **Classic Clog** telah ditata ulang dengan tinggi, karakter, dan gaya ekstra. Memperkenalkan **Crocs Classic Bae**, menampilkan sol luar ultra-kontur yang mendukung bagian atas yang Anda kenal dan sukai—tetapi ada lebih banyak lagi. Tali belakang baru yang dapat disesuaikan juga dapat menampung **Jibbitz™ charms**, sehingga Anda dapat mempersonalisasi tampilan Anda lebih jauh. Ketika Anda merasa sedikit ekstra, pamerkan dengan berani di **Crocs Classic Bae**.\n\nTinggi unik 2,4 inci / 60mm, diukur dari lantai ke sandaran tumit. Dapat disesuaikan dengan **Jibbitz™ charms**. Mungkin ada perbedaan pengukuran 1-2cm tergantung pada proses pengembangan dan manufaktur.",
    "price": 1499000,
    "imageUrl": "https://www.crocs.co.id/media/catalog/product/cache/94b40b305aac1a23ab36b89567ee43e0/0/8/0888-CCR2063022Y20NAW90-1.jpg",
    "categoryId": "cat-03",
    "brandId": "brand-05",
    "createdAt": "2025-06-11T10:00:00Z",
    "updatedAt": "2025-06-11T12:26:44Z"
  },
  {
    "id": "prod-24",
    "productName": "Crocs Mellow Unisex Slide - Black",
    "description": "Anda baru saja pulang setelah hari yang panjang, tenggelam di sofa, dan bersantai dengan “ahhhhh”. Itulah perasaan yang dibawa oleh **Mellow Collection** ke pikiran dan tubuh. Santai dan rilekslah dengan slide kami yang paling nyaman, dengan desain yang sederhana namun modern. Siluet yang meningkatkan suasana hati ini menciptakan kebahagiaan yang ditemukan dalam kenyamanan murni dengan perpaduan inovatif busa **LiteRide** lembut yang membuat kaki Anda meleleh ke dalam alas kaki. Tenangkan diri dengan kenyamanan empuk dari **Mellow Collection**.\n\nAlas kaki yang dalam dan cekung, menawarkan kenyamanan yang dalam dengan pantulan yang lambat. Jendela atas untuk peningkatan sirkulasi udara.",
    "price": 1099000,
    "imageUrl": "https://www.crocs.co.id/media/catalog/product/cache/94b40b305aac1a23ab36b89567ee43e0/0/1/01-CROCS-FFSSDCCRA-CCR208392001-Black.jpg",
    "categoryId": "cat-03",
    "brandId": "brand-05",
    "createdAt": "2025-06-11T10:00:00Z",
    "updatedAt": "2025-06-11T12:26:44Z"
  },
  {
    "id": "prod-25",
    "productName": "Crocs Mega Crush Triple Strap Unisex Sandal - Black",
    "description": "Tampilan dan nuansa **Classic Mega Crush Clog** kami kini tersedia dalam desain sandal slide yang unik ini. Memperkenalkan **Mega Crush Triple Strap**, menampilkan tapak karet yang ditingkatkan, detail yang diperbarui di sekitar sol luar, dan platform yang siap membawa pakaian apa pun ke level berikutnya. Bagian atas tiga tali yang empuk memberikan tampilan yang stylish, sambil menjaga kaki Anda tetap aman. Apakah Anda siap untuk 'crush' baru Anda?",
    "price": 1599000,
    "imageUrl": "https://www.crocs.co.id/media/catalog/product/cache/94b40b305aac1a23ab36b89567ee43e0/0/8/0888-CCR209842001005M3W-1.jpg",
    "categoryId": "cat-03",
    "brandId": "brand-05",
    "createdAt": "2025-06-11T10:00:00Z",
    "updatedAt": "2025-06-11T12:26:44Z"
  },
  {
    "id": "prod-26",
    "productName": "WOMEN VIRERE ROLL STRAP",
    "description": "Desain stylish dan nyaman dalam setiap langkah, Sandal WS Virere Roll Strap dirancang untuk menemani kegiatan petualang luar ruang. Sandal wanita dari EIGER Women ini dilengkapi dengan bantalan kaki EVA yang empuk dan dirancang sesuai anatomi kaki untuk menunjang kenyamanan. Sandal ini juga memiliki outsole antiselip dari bahan rubber, serta strap yang dapat disesuaikan dengan fitting kaki. Hadir dalam beberapa pilihan warna yang menarik dan mudah di mix and match.",
    "price": 399000,
    "imageUrl": "https://d1yutv2xslo29o.cloudfront.net/product/variant/media/web/51dfda576d9c525df388e7621e2cb466.webp",
    "categoryId": "cat-03",
    "brandId": "brand-06",
    "createdAt": "2025-06-11T10:00:00Z",
    "updatedAt": "2025-06-11T12:40:00Z"
  },
  {
    "id": "prod-27",
    "productName": "CUSCO PINCH",
    "description": "Cusco Pinch merupakan sandal yang cocok untuk berbagai aktivitas, baik sehari-hari maupun saat berada di base camp. Sandal jepit pria dari EIGER Mountaineering ini hadir dengan footbed berbahan phylon yang ringan dan empuk, memberikan kenyamanan serta fleksibilitas maksimal saat dipakai.",
    "price": 229000,
    "imageUrl": "https://d1yutv2xslo29o.cloudfront.net/product/variant/media/web/a66fe60f7c3cd828003a4d30a0f6a936.webp",
    "categoryId": "cat-03",
    "brandId": "brand-06",
    "createdAt": "2025-06-11T10:00:00Z",
    "updatedAt": "2025-06-11T12:40:00Z"
  },
  {
    "id": "prod-28",
    "productName": "VERDANT ROLL STRAP",
    "description": "Jelajahi alam dengan nyaman memakai sandal Verdant Roll Stap. Hadir dengan bobot yang ringan, sandal pria dari EIGER 1989 ini dirancang dengan bantalan kaki anatomis dari bahan EVA yang empuk. Dilengkapi dengan outsole antiselip, sandal ini juga memiliki strap yang dapat disesuaikan dengan fitting kaki, sehingga kamu nyaman memakainya ke mana pun kamu pergi.",
    "price": 279000,
    "imageUrl": "https://d1yutv2xslo29o.cloudfront.net/product/variant/media/web/2b122380dac38171041f45447e7b68a7.webp",
    "categoryId": "cat-03",
    "brandId": "brand-06",
    "createdAt": "2025-06-11T10:00:00Z",
    "updatedAt": "2025-06-11T12:40:00Z"
  },
  {
    "id": "prod-29",
    "productName": "CHARMELEON 2.0",
    "description": "Sandal Charmeleon 2.0 siap mendukung setiap pergerakanmu! Sandal dari EIGER 1989 ini memiliki desain yang mudah dipadupadankan dan cocok dipakai untuk berjalan santai di daerah perkotaan ataupun ke destinasi alam favoritmu. Midsole EVA phylon yang empuk akan meningkatkan kenyamananmu untuk terus bergerak aktif di setiap langkah serta outsole rubber-nya yang bisa memastikan daya cengkeram di berbagai kondisi",
    "price": 249000,
    "imageUrl": "https://d1yutv2xslo29o.cloudfront.net/product/variant/photo/73de94ce-e9ed-4d54-8749-b782655302a0.jpg",
    "categoryId": "cat-03",
    "brandId": "brand-06",
    "createdAt": "2025-06-11T10:00:00Z",
    "updatedAt": "2025-06-11T12:40:00Z"
  },
  {
    "id": "prod-30",
    "productName": "BHARDEV PINCH SOL NAVY",
    "description": "Jalani kegiatan harian dan beraktivitas di area base camp dengan nyaman bersama sandal Bhardev Pinch. Sandal jepit dari EIGER Mountaineering ini hadir dengan desain footbed ergonomis yang mengikuti anatomi kaki dan outsole rubber yang mencengkram lebih baik untuk pemakaian di alam terbuka.",
    "price": 249000,
    "imageUrl": "https://d1yutv2xslo29o.cloudfront.net/product/variant/photo/2a1d2560-7400-482d-9da6-9866e6fc0737.jpg",
    "categoryId": "cat-03",
    "brandId": "brand-06",
    "createdAt": "2025-06-11T10:00:00Z",
    "updatedAt": "2025-06-11T12:40:00Z"
  },
  {
    "id": "prod-31",
    "productName": "Adidas Adizero Boston 12",
    "description": "Maraton Boston adalah sebuah perlombaan. Tapi juga merupakan tujuan, dan rencana latihan serta semua hari yang terus terpikirkan sebelum hari besar tiba. Sepatu **Adizero Boston 12** dibuat untuk lari jarak menengah hingga jauh. Mereka membawa sensasi hari perlombaan ke dalam latihan dengan nuansa pendorong yang berasal dari **Energyrods 2.0** yang diinfus serat kaca. Mereka cepat, tetapi itu tidak mengorbankan daya tahan — midsole melapisi bantalan **Lightstrike Pro** yang sangat ringan dengan versi baru.",
    "price": 2300000,
    "imageUrl": "https://img.ncrsport.com/img/storage/large/ID4236-1.jpg?2025-06-11%2012:42:45",
    "categoryId": "cat-04",
    "brandId": "brand-07",
    "createdAt": "2025-06-11T12:45:00Z",
    "updatedAt": "2025-06-11T12:55:00Z"
  },
  {
    "id": "prod-32",
    "productName": "Adidas Harden Vol. 9",
    "description": "Sepatu signature baru **James Harden** dan **Adidas Basketball** dirancang untuk pemain yang suka menghidupkan kembali momen terbesar dalam sejarah bola basket. Sepatu basket performa ini dirancang untuk mendukung jenis gerakan yang menjadikan Harden seorang superstar.",
    "price": 2600000,
    "imageUrl": "https://img.ncrsport.com/img/storage/large/JH6482-1.jpg?2025-06-11%2012:41:29",
    "categoryId": "cat-04",
    "brandId": "brand-07",
    "createdAt": "2025-06-11T12:45:00Z",
    "updatedAt": "2025-06-11T12:55:00Z"
  },
  {
    "id": "prod-33",
    "productName": "Adidas Wmns Adizero Adios Pro 3",
    "description": "Fitur Material:\n- Fitur Reguler\n- Bagian Atas Sintetis\n- Lapisan Tekstil\n- **Energyrods 2.0** Membatasi Kehilangan Energi\n- Bantalan **Lightstrike Pro**\n- Berat: 6.5 Ons (ukuran 7)\n- **Midsole Drop**: 6 Mm (tumit: 38 Mm / kaki depan: 32 Mm)\n- Bagian Atas Mengandung Minimal 50% Konten Daur Ulang\n- Impor",
    "price": 4000000,
    "imageUrl": "https://img.ncrsport.com/img/storage/large/IG6427-1.jpg?2025-06-11%2012:36:57",
    "categoryId": "cat-04",
    "brandId": "brand-07",
    "createdAt": "2025-06-11T12:45:00Z",
    "updatedAt": "2025-06-11T12:55:00Z"
  },
  {
    "id": "prod-34",
    "productName": "Adidas Adizero Boston 12",
    "description": "Maraton Boston adalah sebuah perlombaan. Tapi juga merupakan tujuan, dan rencana latihan serta semua hari yang terus terpikirkan sebelum hari besar tiba. Sepatu **Adizero Boston 12** dibuat untuk lari jarak menengah hingga jauh. Mereka membawa sensasi hari perlombaan ke dalam latihan dengan nuansa pendorong yang berasal dari **Energyrods 2.0** yang diinfus serat kaca. Mereka cepat, tetapi itu tidak mengorbankan daya tahan — midsole melapisi bantalan **Ultra-light Lightstrike Pro Cushioning** dengan versi baru.",
    "price": 2300000,
    "imageUrl": "https://img.ncrsport.com/img/storage/large/IF9211-1.jpg?2025-06-11%2012:42:45",
    "categoryId": "cat-04",
    "brandId": "brand-07",
    "createdAt": "2025-06-11T12:45:00Z",
    "updatedAt": "2025-06-11T12:55:00Z"
  },
  {
    "id": "prod-35",
    "productName": "Adidas Wmns Duramo Sl",
    "description": "Material:\n- Bagian Atas Jaring\n- Perasaan Ringan\n- Sepatu Lari Serbaguna\n- Midsole **Lightmotion**\n- **Ortholite® Sockliner**\n\nTeknologi & Manfaat:\nSepatu lari serbaguna Adidas ini siap untuk treadmill, lintasan, atau latihan luar ruangan yang panjang. Jaring ringan dan bantalan lembut menjaga Anda tetap sejuk dan nyaman dalam cuaca hangat.",
    "price": 900000,
    "imageUrl": "https://img.ncrsport.com/img/storage/large/IF9472-1.jpg?2025-06-11%2012:50:06",
    "categoryId": "cat-04",
    "brandId": "brand-07",
    "createdAt": "2025-06-11T12:45:00Z",
    "updatedAt": "2025-06-11T12:55:00Z"
  },
  {
      "id": "prod-36",
      "productName": "ASICS Women Gel-Kayano 32 Luxe Standard Platinum",
      "description": "Gerakkan pikiran Anda dengan stabilitas adaptif dan kenyamanan premium dari sepatu **GEL-KAYANO™ 32 LUXE**. Bantalan **FF BLAST™ PLUS** dipadukan dengan tinggi tumpukan midsole yang lebih tinggi. Selain membuatnya lebih lembut dan ringan, fitur-fitur ini juga membuat latihan jarak jauh Anda terasa lebih halus dan nyaman. **4D GUIDANCE SYSTEM™** membantu memberikan stabilitas adaptif. Ini membantu Anda merasakan langkah yang lebih mendukung dan seimbang selama latihan jarak jauh Anda. Ada juga **3D SPACE CONSTRUCTION™** yang membantu meningkatkan kenyamanan dan fleksibilitas saat melangkah.",
      "price": 2799000,
      "imageUrl": "https://thumbor.sirclocdn.com/unsafe/960x1120/filters:format(webp):quality(80)/https://bo.asics.co.id/media/catalog/product/cache/5851c493ecee7427253955673b4ab287/1/0/1012b904_001-1.jpg",
      "categoryId": "cat-04",
      "brandId": "brand-08",
      "createdAt": "2025-06-11T12:45:00Z",
      "updatedAt": "2025-06-11T13:03:11Z"
  },
  {
      "id": "prod-37",
      "productName": "ASICS Men Novablast 5 Luxe Standard Platinum",
      "description": "Geometri sol tengah dan sol luar sepatu lari **NOVABLAST™ 5 LUXE** membantu menghasilkan gerakan yang bertenaga. Corak warnanya terinspirasi oleh jam-jam di siang hari saat matahari terbit dan terbenam. Konstruksi sayap lidah di bagian atas membantu meningkatkan kecocokan sekaligus mengurangi gerakan lidah. Dilengkapi dengan bagian atas jala jacquard yang direkayasa yang menawarkan lebih banyak kelenturan, ventilasi, dan daya tahan. Terakhir, bantalan **FF BLAST™ MAX** membantu menciptakan pendaratan yang lebih lembut dan gerakan kaki yang lebih bertenaga selama latihan Anda.",
      "price": 2299000,
      "imageUrl": "https://thumbor.sirclocdn.com/unsafe/960x1120/filters:format(webp):quality(80)/https://bo.asics.co.id/media/catalog/product/cache/5851c493ecee7427253955673b4ab287/1/0/1011c031_001-1.jpg",
      "categoryId": "cat-04",
      "brandId": "brand-08",
      "createdAt": "2025-06-11T12:45:00Z",
      "updatedAt": "2025-06-11T13:03:11Z"
  },
  {
      "id": "prod-38",
      "productName": "ASICS Women Gel-Resolution X Padel Standard",
      "description": "Sepatu **GEL-RESOLUTION™ X PADEL** menciptakan stabilitas dan bantalan tingkat lanjut bagi pemain yang suka mengontrol permainan dari baseline. Teknologi **DYNALACING™** telah dirancang secara strategis untuk bertahan ketika dukungan ekstra diperlukan. Hal ini memungkinkan Anda merasakan perasaan terkunci saat melakukan transisi cepat. Terdapat juga desain midsole dua bagian yang membantu meningkatkan stabilitas saat kaki Anda mendarat di lapangan. Teknologi **DYNAWALL™** di midsole kini meluas hingga ke tumit untuk menambah stabilitas selama gerakan lateral. Ini adalah fitur fungsional yang efektif saat Anda berlari menutupi kedua sisi garis dasar.",
      "price": 2299000,
      "imageUrl": "https://thumbor.sirclocdn.com/unsafe/960x1120/filters:format(webp):quality(80)/https://bo.asics.co.id/media/catalog/product/cache/5851c493ecee7427253955673b4ab287/1/0/1042a285.500_0000s_0000_1.jpg",
      "categoryId": "cat-04",
      "brandId": "brand-08",
      "createdAt": "2025-06-11T12:45:00Z",
      "updatedAt": "2025-06-11T13:03:11Z"
  },
  {
      "id": "prod-39",
      "productName": "ASICS Men Gel-Task MT 4 Standard",
      "description": "Sepatu lapangan dalam ruangan **GEL-TASK™ MT 4** menampilkan desain serbaguna yang memberikan dukungan, fleksibilitas, dan bantalan luar biasa. Menerapkan konstruksi wrap-up pada bagian kaki depan, sepatu ini memberikan topangan yang stabil saat melakukan gerakan multi arah. Sepatu lapangan ini juga terbuat dari kulit sintetis yang tahan lama dan panel jaring untuk membantu menjaga kaki Anda tetap sejuk. Sementara itu, teknologi **GEL™** di bagian kaki depan meredam benturan keras yang mungkin terjadi saat melompat atau berhenti mendadak.",
      "price": 1399000,
      "imageUrl": "https://thumbor.sirclocdn.com/unsafe/960x1120/filters:format(webp):quality(80)/https://bo.asics.co.id/media/catalog/product/cache/5851c493ecee7427253955673b4ab287/1/0/1071a102.101_1.jpg",
      "categoryId": "cat-04",
      "brandId": "brand-08",
      "createdAt": "2025-06-11T12:45:00Z",
      "updatedAt": "2025-06-11T13:03:11Z"
    },
    {
      "id": "prod-40",
      "productName": "ASICS Men Court FF 3 Novak Standard",
      "description": "Sepatu tenis **COURT FF™ 3 NOVAK** meniru gaya bermain Novak Djokovic. Sepatu ini dirancang untuk membantu Anda mengayun lebih kuat dan pulih lebih cepat di antara pukulan. Novak memiliki tembakan tanpa langkah. Artinya dia mengayunkan raketnya saat mendarat. Dengan meningkatkan area kontak sol luar, sepatu membantu menciptakan pendaratan yang stabil dan dapat mengurangi beban pada tubuh. Hasilnya, Anda dapat mengerahkan lebih banyak energi untuk menghasilkan ayunan yang kuat. Untuk langkah crossover yang lebih mulus, sepatu ini memungkinkan Anda melakukan belokan lebih cepat dalam jangka waktu yang lebih singkat. Dengan cengkeraman sol luar yang baik dan sistem pendukung **TWISTRUSS™**, Anda dapat mendorong permukaan tanah dengan lebih kuat. Ini membantu Anda pulih dengan cepat dan kembali ke posisi siap dengan lebih lancar.",
      "price": 2799000,
      "imageUrl": "https://thumbor.sirclocdn.com/unsafe/960x1120/filters:format(webp):quality(80)/https://bo.asics.co.id/media/catalog/product/cache/5851c493ecee7427253955673b4ab287/1/0/1041a522_966-packshot-01.jpg",
      "categoryId": "cat-04",
      "brandId": "brand-08",
      "createdAt": "2025-06-11T12:45:00Z",
      "updatedAt": "2025-06-11T13:03:11Z"
    },
    {
      "id": "prod-41",
      "productName": "Charles & Keith Sepatu Flats Boat-Shoe Bow Two-Tone - Chalk",
      "description": "Sepatu boat sedang membuat gelombang lagi — dan pasangan ini sangat luar biasa. Dengan twist yang terinspirasi ballerina dan finishing two-tone yang bold, sepatu ini dijamin akan menarik perhatian. Square toe menambahkan sentuhan refined yang akan meninggikan outfit apa pun.",
      "price": 1099000,
      "imageUrl": "https://www.charleskeith.co.id/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-id-products/default/dw7885be27/images/hi-res/2025-L4-CK1-70920188-41-3.jpg?sw=756&sh=1008",
      "categoryId": "cat-05",
      "brandId": "brand-09",
      "createdAt": "2025-06-11T13:05:00Z",
      "updatedAt": "2025-06-11T13:16:00Z"
    },
    {
      "id": "prod-42",
      "productName": "Charles & Keith Sepatu Slingback Flats Pointed-Toe Chain-Strap - Brown",
      "description": "Slingback flats pointed-toe adalah keharusan di lemari pakaian Anda. Sepatu ini memancarkan keanggunan halus sambil tetap nyaman secara keseluruhan. Sepasang ini menampilkan kombinasi klasik cokelat dan emas, dengan detail rantai terinspirasi arloji yang menambahkan sentuhan gaya glamor.",
      "price": 999000,
      "imageUrl": "https://www.charleskeith.co.id/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-id-products/default/dwe6775b06/images/hi-res/2025-L3-CK1-70580268-02-3.jpg?sw=756&sh=1008",
      "categoryId": "cat-05",
      "brandId": "brand-09",
      "createdAt": "2025-06-11T13:05:00Z",
      "updatedAt": "2025-06-11T13:16:00Z"
    },
    {
      "id": "prod-43",
      "productName": "Charles & Keith Sepatu Ballet Flats Bow Patent - Black Patent",
      "description": "Tambahkan kilau anggun pada penampilan Anda dengan ballet flats ini. Terbuat dari faux patent leather, sepatu ini memiliki sentuhan mengkilap yang elegan. Dihiasi pita-pita cantik, sepatu ini juga dilengkapi hiasan liontin logam bulat untuk menambah daya tarik visual.",
      "price": 949000,
      "imageUrl": "https://www.charleskeith.co.id/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-id-products/default/dwb528b303/images/hi-res/2025-L2-CK1-70900551-J5-3.jpg?sw=756&sh=1008",
      "categoryId": "cat-05",
      "brandId": "brand-09",
      "createdAt": "2025-06-11T13:05:00Z",
      "updatedAt": "2025-06-11T13:16:00Z"
    },
    {
      "id": "prod-44",
      "productName": "Charles & Keith Sepatu Flats Mary Jane Clover-Knot - Red",
      "description": "Sempurna untuk menambahkan elemen keberuntungan pada busana Tahun Baru Imlek Anda, Mary Jane flats ini menampilkan detail simpul semanggi yang melambangkan keberuntungan dan kesejahteraan. Dalam warna merah cerah, sepatu ini akan menambahkan sentuhan warna yang berani pada penampilan Anda, memastikan Anda menonjol ke mana pun Anda pergi.",
      "price": 999000,
      "imageUrl": "https://www.charleskeith.co.id/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-id-products/default/dwebe15bbc/images/hi-res/2025-L2-CK1-70381103-08-3.jpg?sw=756&sh=1008",
      "categoryId": "cat-05",
      "brandId": "brand-09",
      "createdAt": "2025-06-11T13:05:00Z",
      "updatedAt": "2025-06-11T13:16:00Z"
    },
    {
      "id": "prod-45",
      "productName": "Charles & Keith Sepatu Flats Bow Woven - Chalk",
      "description": "Dianyam dengan sempurna, flat ini ditingkatkan dengan finishing intrecciato. Ini sangat bagus di hari-hari ketika Anda ingin menambahkan sedikit lebih banyak semangat pada langkah dan gaya Anda. Dipasang pada block heels yang sangat rendah, sepatu ini menjanjikan kenyamanan sepanjang hari.",
      "price": 1199000,
      "imageUrl": "https://www.charleskeith.co.id/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-id-products/default/dw3235b314/images/hi-res/2024-L2-CK1-70900563-41-3.jpg?sw=756&sh=1008",
      "categoryId": "cat-05",
      "brandId": "brand-09",
      "createdAt": "2025-06-11T13:05:00Z",
      "updatedAt": "2025-06-11T13:16:00Z"
    },
    {
      "id": "prod-46",
      "productName": "MARY JANE KOTAK-KOTAK",
      "description": "Sepatu rata dengan motif kotak-kotak. Tali dengan penutup menggunakan gesper logam dan elastis. Selesaian bagian ujung bundar. Tinggi sol: 1 cm.",
      "price": 699900,
      "imageUrl": "https://static.zara.net/assets/public/af52/6137/189942319d24/c4a2f4f445c3/13604610202-e2/13604610202-e2.jpg?ts=1748877149087&w=563",
      "categoryId": "cat-05",
      "brandId": "brand-10",
      "createdAt": "2025-06-11T13:05:00Z",
      "updatedAt": "2025-06-11T13:24:49Z"
    },
    {
      "id": "prod-47",
      "productName": "SEPATU BALERINA RATA KULIT 50TH ANNIVERSARY",
      "description": "Sepatu rata jenis balerina dari kulit. Tali dengan gesper logam yang mudah disesuaikan di bagian depan. Setik balik kontras. Garis leher persegi. Selesaian bagian ujung bundar.",
      "price": 799900,
      "imageUrl": "https://static.zara.net/assets/public/0af9/3951/d4564feab15d/668c65b54be0/13502510800-e1/13502510800-e1.jpg?ts=1746442644822&w=750",
      "categoryId": "cat-05",
      "brandId": "brand-10",
      "createdAt": "2025-06-11T13:05:00Z",
      "updatedAt": "2025-06-11T13:24:49Z"
    },
    {
      "id": "prod-48",
      "productName": "SEPATU BALERINA EFEK SATIN 50TH ANNIVERSARY",
      "description": "Sepatu model balerina efek satin. Detail tali di bagian depan dengan lubang kancing logam. Selesaian bagian ujung bundar.",
      "price": 799900,
      "imageUrl": "https://static.zara.net/assets/public/763d/8f78/515341f49c3f/d9be91266fb0/11502510800-e1/11502510800-e1.jpg?ts=1746442673368&w=850",
      "categoryId": "cat-05",
      "brandId": "brand-10",
      "createdAt": "2025-06-11T13:05:00Z",
      "updatedAt": "2025-06-11T13:24:49Z"
    },
    {
      "id": "prod-49",
      "productName": "SEPATU BALERINA KAIN MENYILANG",
      "description": "Sepatu jenis balerina dari kain. Tali menyilang dobel di bagian depan. Selesaian bagian ujung bundar.",
      "price": 699900,
      "imageUrl": "https://static.zara.net/assets/public/6dc8/c24d/e986491f96de/ca5371fcaa13/13585510800-e2/13585510800-e2.jpg?ts=1742311810068&w=563",
      "categoryId": "cat-05",
      "brandId": "brand-10",
      "createdAt": "2025-06-11T13:05:00Z",
      "updatedAt": "2025-06-11T13:24:49Z"
    },
    {
      "id": "prod-50",
      "productName": "SEPATU BALERINA DENGAN GESPER",
      "description": "Sepatu rata jenis balerina dengan efek kulit paten. Detail tali lebar dengan gesper mudah disesuaikan di bagian depan.",
      "price": 699900,
      "imageUrl": "https://static.zara.net/assets/public/6a36/6067/683b4f53803a/5d0afbfec536/13523410624-e5/13523410624-e5.jpg?ts=1724754652863&w=563",
      "categoryId": "cat-05",
      "brandId": "brand-10",
      "createdAt": "2025-06-11T13:05:00Z",
      "updatedAt": "2025-06-11T13:24:49Z"
    },
    {
      "id": "prod-51",
      "productName": "Old Skool Shoes",
      "description": "Old Skool adalah desain alas kaki pertama kami yang menampilkan Sidestripe Vans yang terkenal, meskipun saat itu, itu hanyalah coretan acak yang digambar oleh pendiri Paul Van Doren. Sejak debutnya pada tahun 1977, siluet low-top ini telah memantapkan dirinya sebagai ikon di kancah skate, musik, dan mode. Dari skater jalanan dan punk tahun 90-an hingga legenda hip hop dan mode saat ini, Old Skool secara konsisten menjadi sepatu pilihan bagi para kreatif yang melakukan sesuatu dengan cara mereka sendiri.",
      "price": 1137500,
      "imageUrl": "https://assets.vans.com/images/t_img/c_fill,g_center,f_auto,h_573,w_458,e_unsharp_mask:100/dpr_2.0/v1747942437/VN000D3HY28-ALT1/Old-Skool-Shoe.png",
      "categoryId": "cat-06",
      "brandId": "brand-11",
      "createdAt": "2025-06-11T13:26:00Z",
      "updatedAt": "2025-06-11T13:44:55Z"
    },
    {
      "id": "prod-52",
      "productName": "Skate Half Cab Daz Shoe",
      "description": "Didesain ulang sepenuhnya untuk skateboarding modern, koleksi Skate Classics memberikan lebih banyak dari apa yang dibutuhkan skateboarder untuk memungkinkan kemajuan maksimal. Dibuat dengan bagian atas suede dan kanvas klasik, Skate Half Cab Daz memberi Anda tampilan ikonik yang Anda inginkan sambil membawa semua manfaat performa yang dituntut oleh skateboarder.",
      "price": 1462500,
      "imageUrl": "https://assets.vans.com/images/t_img/c_fill,g_center,f_auto,h_573,w_458,e_unsharp_mask:100/dpr_2.0/v1734655972/VN0A5FCDWWW-ALT1/Skate-Half-Cab-Daz-Shoe.png",
      "categoryId": "cat-06",
      "brandId": "brand-11",
      "createdAt": "2025-06-11T13:26:00Z",
      "updatedAt": "2025-06-11T13:44:55Z"
    },
    {
      "id": "prod-53",
      "productName": "Classic Slip on Shoes",
      "description": "Sejak debutnya pada tahun 1979, Slip-On telah mewujudkan semangat santai dan kreatif Southern California. Apa yang dimulai sebagai kebutuhan pokok skate yang santai telah menjadi ikon budaya pop—simbol global pemberontakan dan ekspresi diri.",
      "price": 893750,
      "imageUrl": "https://assets.vans.com/images/t_img/c_fill,g_center,f_auto,h_573,w_458,e_unsharp_mask:100/dpr_2.0/v1743114752/VN000EYEBLK-ALT3/Classic-SlipOn-Shoe.png",
      "categoryId": "cat-06",
      "brandId": "brand-11",
      "createdAt": "2025-06-11T13:26:00Z",
      "updatedAt": "2025-06-11T13:44:55Z"
    },
    {
      "id": "prod-54",
      "productName": "Authentic Shoe",
      "description": "Authentic adalah siluet Vans asli. Pertama kali diperkenalkan pada tahun 1966 dan terus berkembang berkat budaya kreatif sejak saat itu, sepatu klasik ini menjaga nuansa old school tetap hidup dengan bagian atas kanvas kokoh dalam warna-warna musiman. Dengan desain low-top klasik dan sol luar waffle karet ikoniknya, Authentic adalah kanvas kosong untuk kreativitas yang memungkinkan Anda melakukan hal Anda dengan cara unik Anda sendiri.",
      "price": 893750,
      "imageUrl": "https://assets.vans.com/images/t_img/c_fill,g_center,f_auto,h_573,w_458,e_unsharp_mask:100/dpr_2.0/v1740713845/VN000EE3W00-HERO/Authentic-Shoe.png",
      "categoryId": "cat-06",
      "brandId": "brand-11",
      "createdAt": "2025-06-11T13:26:00Z",
      "updatedAt": "2025-06-11T13:44:55Z"
    },
    {
      "id": "prod-55",
      "productName": "Skate Curren Caples Shoe",
      "description": "Dalam pencarian tiada henti untuk Vulcanized Perfection, Curren Caples menghadirkan sepatu Skate signature pertamanya. Dengan pola sol luar kustom baru, bagian bawah dioptimalkan untuk cengkeraman dan rasa papan dengan karet SICKSTICK™. Bagian atas kulit diperkuat dengan pelapis DURACAP™ untuk umur panjang, dan insole POPCUSH™ menawarkan perlindungan benturan yang tahan lama. Kerah yang empuk dan penutup tali memastikan kecocupan yang sempurna—dan nyaman—untuk sesi yang lebih lama.",
      "price": 1300000,
      "imageUrl": "https://assets.vans.com/images/t_img/c_fill,g_center,f_auto,h_573,w_458,e_unsharp_mask:100/dpr_2.0/v1748632987/VN000D85DRB-ALT1/Skate-Curren-Caples-Shoe.png",
      "categoryId": "cat-06",
      "brandId": "brand-11",
      "createdAt": "2025-06-11T13:26:00Z",
      "updatedAt": "2025-06-11T13:44:55Z"
    },
    {
      "id": "prod-56",
      "productName": "New Balance 1906 Men's Sneakers Shoes - Multi",
      "description": "New Balance 1906R adalah sepatu yang menggabungkan gaya dan fungsi dalam satu paket yang tak tertandingi. Terinspirasi dari sepatu lari tahun 2000-an, sepatu ini menawarkan kenyamanan dengan midsole ABZORB dan teknologi Stability Web untuk dukungan lengkung. Desain upper sintetis yang sleek dan stylish melengkapi tampilan ini.",
      "price": 2599000,
      "imageUrl": "https://www.newbalance.co.id/media/catalog/product/cache/b444f50a64a092a2138a5e1cbd49879a/0/8/0888-NEWM1906RA0MI11H-1.jpg",
      "categoryId": "cat-06",
      "brandId": "brand-12",
      "createdAt": "2025-06-11T13:26:00Z",
      "updatedAt": "2025-06-11T13:56:32Z"
    },
    {
      "id": "prod-57",
      "productName": "New Balance 2002 Men's Sneakers Shoes - Grey",
      "description": "Hadir sebagai versi modern dari desain-desain khas tahun 2000-an, sepatu 2002R khusus pria ini siap untuk membuat penampilan Anda menjadi semakin bergaya. Sepatu ini hadir dengan tampilannya yang penuh dengan nuansa nostalgia serta dibuat dengan menggunakan material suede dan mesh berkualitas premium untuk sebuah tampilan yang unik. Di bagian underfoot, sepatu ini juga dilengkapi dengan berbagai teknologi seperti ACTEVA LITE, N-ergy, dan Stability Web yang dapat memberikan dukungan serta kenyamanan ekstra di setiap langkah Anda setiap hari.",
      "price": 2599000,
      "imageUrl": "https://www.newbalance.co.id/media/catalog/product/cache/b444f50a64a092a2138a5e1cbd49879a/0/8/0888-NEWML2002RA00015H-1.jpg",
      "categoryId": "cat-06",
      "brandId": "brand-12",
      "createdAt": "2025-06-11T13:26:00Z",
      "updatedAt": "2025-06-11T13:56:32Z"
    },
    {
      "id": "prod-58",
      "productName": "New Balance 327 Women's Sneakers- Moonbeam with Outerspace",
      "description": "New Balance 327 Moonbeam dengan Outerspace adalah sepatu lifestyle yang menggabungkan desain modern dengan heritage sporty. Upper suede dan nylon memberikan kenyamanan breathable, sementara outsole bergerigi terinspirasi dari sepatu trail 355 memberikan traksi maksimal. Dengan logo N yang bold dan midsole yang nyaman, sepatu ini cocok untuk pecinta gaya retro-modern. Tambahkan sentuhan stylish pada outfit harianmu dengan sepatu ini!",
      "price": 1899000,
      "imageUrl": "https://www.newbalance.co.id/media/catalog/product/cache/b444f50a64a092a2138a5e1cbd49879a/0/1/01-NEW-BALANCE-FFSSBNEWA-NEWWS327KB-White.jpg",
      "categoryId": "cat-06",
      "brandId": "brand-12",
      "createdAt": "2025-06-11T13:26:00Z",
      "updatedAt": "2025-06-11T13:56:32Z"
    },
    {
      "id": "prod-59",
      "productName": "New Balance 530 Unisex Sneakers Shoes - Beige/Blue",
      "description": "New Balance 530 adalah sepatu yang menggabungkan estetika awal milenium dengan keandalan sepatu lari jarak jauh. Desainnya yang modern dan fungsional membuatnya cocok untuk gaya hidup sehari-hari. Dengan midsole ABZORB yang tersegmentasi dan upper yang terbuat dari mesh dan overlay sintetis, sepatu ini menawarkan tampilan yang high-tech dan kenyamanan yang breathable. Cocok untuk pecinta fashion dan aktivitas outdoor.",
      "price": 1599000,
      "imageUrl": "https://www.newbalance.co.id/media/catalog/product/cache/b444f50a64a092a2138a5e1cbd49879a/0/8/0888-NEWU530NEA01810H-1.jpg",
      "categoryId": "cat-06",
      "brandId": "brand-12",
      "createdAt": "2025-06-11T13:26:00Z",
      "updatedAt": "2025-06-11T13:56:32Z"
    },
    {
      "id": "prod-60",
      "productName": "New Balance 530 Unisex Sneakers Shoes - Pink",
      "description": "Asli MR530 menggabungkan estetika pergantian milenium dengan keandalan sepatu lari berjarak jauh. MR530 yang diperkenalkan kembali menerapkan pandangan gaya sehari-hari kontemporer pada desain yang berfokus pada kinerja ini. Midsole ABZORB tersegmentasi dipadukan dengan desain bagian atas mesh klasik dan overlay sintetis, yang menggunakan kurva dan sudut melengkung untuk tampilan futuristik yang khas.",
      "price": 1599000,
      "imageUrl": "https://www.newbalance.co.id/media/catalog/product/cache/b444f50a64a092a2138a5e1cbd49879a/0/8/0888-NEWU530TBDROS08H-1.jpg",
      "categoryId": "cat-06",
      "brandId": "brand-12",
      "createdAt": "2025-06-11T13:26:00Z",
      "updatedAt": "2025-06-11T13:56:32Z"
    }
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