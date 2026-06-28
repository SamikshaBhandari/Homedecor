import { db } from "@/db";
import { TypeUser, LoginTypeUser } from "@/types/type.user";

export async function getUserFromDB() {
    try {
        const [users] = await db.execute("SELECT * FROM users");
        return users;
    } catch (error) {
        throw error;
    }
}

export async function createUserInDB(newUser: TypeUser) {
    try {
        const userPassword = newUser.password || "";

        await db.execute(
            "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
            [newUser.email, newUser.username, userPassword]
        );
    } catch (error) {
        throw error;
    }
}

export async function getUserByEmail(newLogin: Partial<LoginTypeUser>) {
    try {
        const [validUser]: any = await db.execute(
            "SELECT * FROM users WHERE email = ?",
            [newLogin.email || ""]
        );
        return validUser[0] || null;
    } catch (error) {
        throw error;
    }
}