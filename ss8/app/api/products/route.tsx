import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(req: NextRequest) {
  try {
    // Lấy dữ liệu từ request body
    const newProduct = await req.json();

    // Đường dẫn tới file products.json
    const filePath = path.join(process.cwd(), "database", "product.json");

    // Đọc dữ liệu từ file products.json
    const products = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // Thêm sản phẩm mới vào mảng sản phẩm
    products.push(newProduct);

    // Ghi lại mảng sản phẩm đã cập nhật vào file products.json
    fs.writeFileSync(filePath, JSON.stringify(products), "utf8");

    // Trả về phản hồi thành công
    return NextResponse.json({ message: "Thêm mới sản phẩm thành công" });
  } catch (error:any) {
    // Trả về phản hồi lỗi
    return NextResponse.json({ error: error.message });
  }
}


export async function GET() {
  try {
    // B1: Lấy ra đường dãn của file cần đọc
    const filePath = path.join(process.cwd(), "database", "product.json");
    // B2: sử dụng fs để đọc file
    const data = fs.readFileSync(filePath, "utf8");
    // B3: ép kiểu từ dạng JSON sang TS
    const users = JSON.parse(data);
    // Trả về dữ liệu cho phía client
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(error);
  }
}


export async function DELETE(req: NextRequest) {
  try {
    // Lấy ID sản phẩm từ URL query
    const url = new URL(req.url);
    const productId = url.searchParams.get("id");

    if (!productId) {
      return NextResponse.json(
        { error: "ID sản phẩm không được cung cấp" },
        { status: 400 }
      );
    }

    // Đường dẫn tới file products.json
    const filePath = path.join(process.cwd(), "database", "product.json");

    // Đọc dữ liệu từ file products.json
    const products = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // Lọc bỏ sản phẩm có ID cần xóa
    const updatedProducts = products.filter(
      (product: { id: number }) => product.id !== parseInt(productId)
    );

    // Ghi lại mảng sản phẩm đã cập nhật vào file products.json
    fs.writeFileSync(filePath, JSON.stringify(updatedProducts), "utf8");

    // Trả về danh sách sản phẩm mới sau khi đã xóa
    return NextResponse.json(updatedProducts);
  } catch (error:any) {
    // Trả về phản hồi lỗi
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // B1: lấy vị trí file cần đọc
    const filePath = path.join(process.cwd(), "data", "products.json");

    // Đọc file cần ghi vào
    const products = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // B2: tìm vị trí phần tử cần cập nhật
    const findIndex = products.findIndex(
      (product: any) => product.id === params.id
    );

    // B3: Nếu tìm thấy phần tử cần cập nhật, cập nhật dữ liệu từ body request
    if (findIndex !== -1) {
      const updatedProduct = await req.json();
      products[findIndex] = { ...products[findIndex], ...updatedProduct };

      // B4: Ghi lại file JSON
      fs.writeFileSync(filePath, JSON.stringify(products, null, 2), "utf8");

      return NextResponse.json({
        message: "Product updated successfully",
        product: products[findIndex],
      });
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}