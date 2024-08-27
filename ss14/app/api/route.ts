// app/api/products/route.js
import { NextResponse } from 'next/server';

// export async function GET() {
//   try {
//     const res = await fetch('https://fakestoreapi.com/products');
//     const products = await res.json();
//     return NextResponse.json(products);
//   } catch (error) {
//     return NextResponse.json({ message: 'Failed to fetch products' }, { status: 500 });
//   }
// }

// app/api/products/filter/route.ts

export async function GET(req:any) {
  const { searchParams }:any = new URL(req.url);
  const minPrice = parseFloat(searchParams.get('minPrice') || '0');
  const maxPrice = parseFloat(searchParams.get('maxPrice'));

  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  const filteredProducts = products.filter(
    (product:any) => product.price >= minPrice && product.price <= maxPrice
  );

  return NextResponse.json(filteredProducts);
}

