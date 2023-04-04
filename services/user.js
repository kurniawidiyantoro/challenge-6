const Prisma = require("@prisma/client");
const prisma = new Prisma.PrismaClient();

// views
const getAllUsersViews = async (req, res) => {
  const users = await prisma.user_game.findMany();
  res.render("main", { users: users });
};

const updateUserViews = async (req, res) => {
  const id = Number(req.params.id);

  const user = await prisma.user_game.findUnique({ where: { id } });
  res.render("update_user", { user });
};

// form
const loginAdmin = (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "adminkurnia") {
    res.redirect("/");
  } else {
    res.redirect("/login");
  }
};

const createUserForm = async (req, res) => {
  const { username, password } = req.body;
  await prisma.user_game.create({
    data: { username, password },
  });
  res.redirect("/");
};

const updateUserForm = async (req, res) => {
  const { id, username, password } = req.body;
  const numberId = Number(id);

  await prisma.user_game.update({
    where: { id: numberId },
    data: { username, password },
  });
  res.redirect("/");
};

module.exports = {
  getAllUsersViews,
  updateUserViews,
  loginAdmin,
  createUserForm,
  updateUserForm,
};
