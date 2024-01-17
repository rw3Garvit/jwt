const { createToken, verifyToken } = require("../middleware/auth");
const { userService } = require("../services");

const registerUser = async (req, res) => {
  console.log(req.body);

  const body = req.body;

  const user = await userService.addUser(body);

  res.status(200).json({
    message: "user created success",
    data: user,
  });
};

const loginUser = async (req, res) => {
  const body = req.body;

  console.log(body);

  const findUser = await userService.findUser(body.username);

  console.log(findUser);

  if (!findUser) {
    res.status(500).json({ message: "user not found" });
  } else {
    if (findUser.password === body.password) {
      const token = createToken(findUser);

      res.cookie("access-token", token);

      res.status(200).json({
        message: "login success",
      });
    } else {
      res.status(500).json({ message: "password invalid" });
    }
  }
};

const getProfile = async (req, res) => {
  const token = req.cookies["access-token"];

  if (!token) {
    res.status(500).json({
      mesasge: "you are not login",
    });
  }

  const profile = await verifyToken(token);

  console.log(profile, "profile");

  res.status(200).json({ message: "profile get success", profile });
};

module.exports = { registerUser, loginUser, getProfile };
