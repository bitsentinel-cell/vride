import { Request, Response } from 'express';

 const getUsers = (req: Request, res: Response) => {
    return res.send('hello')
};

 const getUserById = (req: Request, res: Response) => {
    // logic to fetch and return user by ID from the database
};

 const createUser = (req: Request, res: Response) => {
    // logic to create a new user in the database
};

 const updateUser = (req: Request, res: Response) => {
    // logic to update user by ID in the database
};

 const deleteUser = (req: Request, res: Response) => {
    // logic to delete user by ID from the database
};

export {getUsers,
        getUserById,
        createUser,
        updateUser,
        deleteUser,
}