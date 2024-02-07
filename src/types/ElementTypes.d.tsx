import React from "react";

export type Children = {
  children: React.ReactNode;
};

export type SubLink = {
  sub_link_title: string;
  link: string;
};

export type ProductVariant = {
  variant_type: string;
  variant_value: string;
  variant_original_price: number;
  variant_sale_price: number;
};

export type Product = {
  _id: string;
  product_name: string;
  product_images: string[];
  likedby: string[];
  likes: number;
  category: string;
  product_type: string;
  description: string;
  featured: boolean;
  visible_in_store: boolean;
  variants: ProductVariant[];
  created_at: number;
  count?: number;
  selectedVariant: ProductVariant;
  __v: number;
};

export type Route = {
  sub_title: string;
  sub_links: SubLink[];
};


export type Category = {
  _id: string,
  category_name: string,
  category_image: string,
  __v: number
}