import { db } from "@/db";
import { TypeUser, LoginTypeUser } from "@/types/type.user";

export async function getUserFromDB(): Promise<TypeUser[]> {
    try {
        const [users] = await db.execute("select * from users");
        return users as TypeUser[];
    } catch (error) {
        throw error;
    }
}

export async function createUserInDB(newUser: TypeUser): Promise<void> {
    try {
        await db.execute(
            "insert into users (email, username, password) values (?, ?, ?)",
            [newUser.email, newUser.username, newUser.password || ""]
        );
    } catch (error) {
        throw error;
    }
}

export async function getUserByEmail(newLogin: LoginTypeUser): Promise<TypeUser[]> {
    try {
        const [validUser] = await db.execute(
            "select * from users where email = ?",
            [newLogin.email]
        );

        return validUser as TypeUser[];
    } catch (error) {
        throw error;
    }
}