import React from "react";

export type Children = {
    children: React.ReactNode
}
export type ProductVariant = {
    variant_type: string;
    variant_value: string;
    variant_original_price: number;
    variant_sale_price: number;
};
export type Product = {
    _id: string;
    product_name: string;
    product_images: string | undefined[];
    likedby: string[];
    likes: number;
    category: string;
    product_type: string;
    description: string;
    featured: boolean;
    visible_in_store: boolean;
    variants: ProductVariant[];
    created_at: number;
    __v: number;
}