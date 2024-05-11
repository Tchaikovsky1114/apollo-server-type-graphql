import { connection } from './connection';

const getUserTable = () => connection.table('user');

// @ts-ignore
export async function getUser(id) {
  return await getUserTable().first().where({ id });
}

// @ts-ignore
export async function getUserByEmail(email) {
  return await getUserTable().first().where({ email });
}
