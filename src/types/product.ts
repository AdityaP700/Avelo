export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  supplier: {
    name: string;
    location: string;
    processingTime: string;
  };
  shipping: {
    estimatedDelivery: string;
    cost: number;
    methods: string[];
  };
  variants: {
    color?: string[];
    size?: string[];
  };
  stock: number;
  rating: number;
  reviews: number;
}
