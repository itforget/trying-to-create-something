import { Request, Response } from "express";
import type User from "../user/user";

let listOfUsers: Array<User> = [];

export default class UserController {
  addUser(req: Request, res: Response) {
    const { id, name, password, dateBirth, email } = <User>req.body;
    const newUser: User = {
      id,
      name,
      password,
      dateBirth,
      email,
    };
    listOfUsers.push(newUser);
    return res.status(201).json({ message: "New user created!" });
  }

  listUsers(req: Request, res: Response) {
    return res.status(200).json(listOfUsers);
  }

  getUserById(req: Request, res: Response) {
    const { id } = req.params;
    const user = listOfUsers.find((user) => user.id === Number(id));
    if (!user) {
      return res.status(404).json({ erro: "User not found" });
    }
    return res.status(200).json(user);
  }

  updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { name, password, dateBirth, email } = req.body as User;
    const user = listOfUsers.find((user) => user.id === Number(id));
    if (!user) {
      return res.status(404).json({ erro: "User not found" });
    }

    user.name = name;
    user.dateBirth = dateBirth;
    user.password = password;
    user.email = email;

    return res.status(200).json(user);
  }

  deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    const user = listOfUsers.find((user) => user.id === Number(id));
    if (!user) {
      return res.status(404).json({ erro: "User not found" });
    }
    const index = listOfUsers.indexOf(user);
    listOfUsers.slice(index, 1);
    return res.status(200).json({ mensagem: "User delete complete" });
  }
}
