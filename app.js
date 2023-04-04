const express = require("express");
const {
  getAllUsers,
  getSingleUser,
  createUser,
  editUser,
  deleteUser,
} = require("./services/api");
const {
  getAllUsersViews,
  updateUserViews,
  loginAdmin,
  createUserForm,
  updateUserForm,
} = require("./services/user");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

// route views
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/", getAllUsersViews);
app.get("/user/create", (req, res) => {
  res.render("create_user");
});
app.get("/user/update/:id", updateUserViews);

// route form
app.post("/login", loginAdmin);
app.post("/user/create", createUserForm);
app.post("/user/update", updateUserForm);

//  route api
app.get("/api/user", getAllUsers);
app.get("/api/user/:id", getSingleUser);
app.post("/api/user", createUser);
app.put("/api/user/:id", editUser);
app.delete("/api/user/:id", deleteUser);

app.listen(3000, () => console.log("app berjalan di localhost 3000"));
