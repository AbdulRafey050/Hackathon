// import { groq } from 'next-sanity';

// export const allProducts = groq`*[_type == "product"]`;

// export const four = groq`*[_type == "product"][0..3]`;



export const GET_PRODUCTS = `*[_type == "product"] {
    _id,
    productName,
    category,
    price,
    inventory,
    colors,
    status,
    "imageUrl": image.asset->url,
    description
  }`;
  export const GET_PRODUCT_BY_ID = `*[_type == "product" && _id == $id][0]`;
