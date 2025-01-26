export interface IDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface IProduct {
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  tags: string[];
  brand: string;
  sku: string;
  dimensions?: IDimensions;
  images: string[];
  thumbnail: string;

}