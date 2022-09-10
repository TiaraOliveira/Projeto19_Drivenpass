import * as usersRepositories from '../repositories/usersRepositories';
import { TypeUsersData } from '../types/UsersTypes';

export async function findAll() {
  console.log("hdhd")
  const users = await usersRepositories.findAll();
  return users;
}