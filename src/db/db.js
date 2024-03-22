import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser(name, email, emailVerified, image) {
  return await prisma.user.create({
    data: {
      name,
      email,
      emailVerified,
      image,
    },
  });
}

async function getUserByEmail(email) {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
}

async function createSession(userId, sessionToken, expires) {
  return await prisma.session.create({
    data: {
      userId,
      sessionToken,
      expires,
    },
  });
}

async function getSessionByToken(sessionToken) {
  return await prisma.session.findUnique({
    where: {
      sessionToken,
    },
  });
}
async function createAccount(
  userId,
  type,
  provider,
  providerAccountId,
  refresh_token,
  access_token,
  expires_at,
  token_type,
  scope,
  id_token,
  session_state
) {
  return await prisma.account.create({
    data: {
      userId,
      type,
      provider,
      providerAccountId,
      refresh_token,
      access_token,
      expires_at,
      token_type,
      scope,
      id_token,
      session_state,
    },
  });
}

module.exports = {
  createUser,
  getUserByEmail,
  createSession,
  getSessionByToken,
  createAccount,
};
