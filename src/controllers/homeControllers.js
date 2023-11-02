import {
  getAllUsers,
  createAUsers,
  hashPassWord,
  deleteUserById,
  getUpdateUserById,
  updateUsers,
} from "../services/userServices";

const getUsers = (req, res) => {
  res.render("users");
};

const createUser = async (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;
  await createAUsers(email, username, hashPassWord(password));
  res.redirect("/");
};

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  res.render("home", { users: results });
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  await deleteUserById(id);
  res.redirect("/");
};

const getUpdateUser = async (req, res) => {
  const id = req.params.id;
  let users = await getUpdateUserById(id);
  console.log(users);
  res.render("users-update", { users });
};

const updateUser = async (req, res) => {
  const id = req.body.id;
  const email = req.body.email;
  const username = req.body.username;
  await updateUsers(email, username, id);
  res.redirect("/");
};

module.exports = { getHomepage, getUsers, createUser, deleteUser, getUpdateUser, updateUser };
