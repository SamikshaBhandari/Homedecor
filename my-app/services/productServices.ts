import { db } from '../db';

export async function getAllProducts() {
    try {
        const [rows] = await db.query('SELECT * FROM products ORDER BY id DESC');
        return rows;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");
    }
}

export async function getProductsByCategory(category: string) {
    try {
        const [rows] = await db.query('SELECT * FROM products WHERE category = ?', [category]);
        return rows;
    } catch (error) {
        console.error("Error fetching products by category:", error);
        throw new Error("Failed to fetch products by category");
    }
}

export async function createProduct(name: string, price: number, description: string, category: string, stock: number) {
    try {
        const [result] = await db.query(
            'INSERT INTO products (name, price, description, category, stock) VALUES (?, ?, ?, ?, ?)',
            [name, price, description, category, stock]
        );
        return result;
    } catch (error) {
        console.error("Error creating product:", error);
        throw new Error("Failed to create product");
    }
}