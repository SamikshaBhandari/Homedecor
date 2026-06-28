import { db } from "@/db";
import { TypeProducts } from "@/types/type.products";

export async function getAllProducts(): Promise<TypeProducts[]> {
    try {
        const [rows] = await db.execute('SELECT * FROM products ORDER BY id DESC');
        return rows as TypeProducts[];
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");
    }
}

export async function getProductsByCategory(category: string): Promise<TypeProducts[]> {
    try {
        const [rows] = await db.execute('SELECT * FROM products WHERE category = ?', [category]);
        return rows as TypeProducts[];
    } catch (error) {
        console.error("Error fetching products by category:", error);
        throw new Error("Failed to fetch products by category");
    }
}

export async function createProduct(name: string, price: number, description: string, category: string, stock: number) {
    try {
        const [result] = await db.execute(
            'INSERT INTO products (name, price, description, category, stock) VALUES (?, ?, ?, ?, ?)',
            [name, price, description, category, stock]
        );
        return result;
    } catch (error) {
        console.error("Error creating product:", error);
        throw new Error("Failed to create product");
    }
}