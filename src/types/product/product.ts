export interface Product {
    id: string;
    productName: string;
    description: string;
    price: number;
    imageUrl?: string;
    categoryId: string;
    brandId: string;
    createdAt: string;
    updatedAt: string;
}