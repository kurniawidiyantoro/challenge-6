const Prisma = require("@prisma/client");
const prisma = new Prisma.PrismaClient();

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user_game.findMany();
    res.json(users);
  } catch (error) {
    console.log("Ada ERROR!: ", error);
    res.json([]);
  }
};

const getSingleUser = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const user = await prisma.user_game.findUnique({ where: { id: id } });
    if (!user) {
      throw new Error("User not found");
    }
    res.json(user);
  } catch (error) {
    console.log("Ada ERROR!: ", error);
    res.json({ status: "user tidak ditemukan" });
  }
};
const createUser = async (req, res) => {
  if (!req.body) {
    res.json({
      status: "failed to create user",
    });
    return;
  }
  if (!req.body.password) {
    res.json({
      status: "failed to create user",
    });
    return;
  }
  if (!req.body.username) {
    res.json({
      status: "failed to create user",
    });
    return;
  }

  try {
    const result = await prisma.user_game.create({
      data: { username: req.body.username, password: req.body.password },
    });
    res.json({ status: "berhasil membuat user", info: result });
  } catch (error) {
    res.json({ status: "gagal membuat user", info: error });
  }
};
const editUser = async (req, res) => {
  const id = Number(req.params.id);
  if (!req.body) {
    res.json({
      status: "failed to update user",
    });
    return;
  }
  if (!req.body.password) {
    res.json({
      status: "failed to update user",
    });
    return;
  }
  if (!req.body.username) {
    res.json({
      status: "failed to update user",
    });
    return;
  }

  try {
    const result = await prisma.user_game.update({
      where: { id: id },
      data: { username: req.body.username, password: req.body.password },
    });
    res.json({ status: "berhasil update user", info: result });
  } catch (error) {
    res.json({ status: "gagal update user", info: error });
  }
};

const deleteUser = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const user = await prisma.user_game.delete({ where: { id: id } });
    if (!user) {
      throw new Error("User not found");
    }
    res.json(user);
  } catch (error) {
    console.log("Ada ERROR!: ", error);
    res.json({ status: "user tidak ditemukan" });
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  editUser,
  deleteUser,
};
