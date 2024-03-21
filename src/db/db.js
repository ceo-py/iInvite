import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(username, password) {
  return await prisma.user.create({
    data: {
      username: username,
      password: password,
    },
  });
}

export async function getAllUsers() {
  return await prisma.user.findMany();
}

async function getUserByUsername(username) {
  return await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
}

async function updateUserPassword(username, newPassword) {
  return await prisma.user.update({
    where: {
      username: username,
    },
    data: {
      password: newPassword,
    },
  });
}

async function deleteUser(username) {
  return await prisma.user.delete({
    where: {
      username: username,
    },
  });
}
