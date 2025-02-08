// export interface Product {
//     _id: string;
//     productName: string;
//     _type: 'product';
//     image?: {
//       asset: {
//         _ref: string;
//         _type: 'image';
//       };
//     };
//     price: number;
//     description?: string;
//   }




export interface Product {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  imageUrl?: string; // Optional field
  description: string;
}
