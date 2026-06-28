export type TypeUser = {
    id?: number;
    username: string;
    email: string;
    password?: string;
    role?: string;
};

export type LoginTypeUser = {
    email: string;
    password?: string;
};