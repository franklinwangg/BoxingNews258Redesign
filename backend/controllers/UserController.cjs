// | Route                      | Description               |
// | -------------------------- | ------------------------- |
// | `POST /api/users/register` | Create a new user account |
// | `POST /api/users/login`    | Authenticate a user       |
// | `GET /api/users/:id`       | Get a user’s public info  |
// | `PUT /api/users/:id`       | Update profile info       |
// | `DELETE /api/users/:id`    | Delete account            |

const User = require("../models/User.cjs");

// GET /api/users
const loginAsUser = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        username: req.body.username,
        password: req.body.password,
      },
    });
    if (users.length != 0) {
      res.status(200).json("Successfully logged in!");
      return;
    } else {
      res.status(401).json("Login incorrect.");
      return;
    }
  } catch (err) {
    console.error("Error logging in :", err);
    res.status(500).json({ error: `Error logging in :, ${err}` });
  }
};

// POST /api/users
const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    res.status(201).json(user);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Failed to create user" });
  }
};

module.exports = {
  createUser,
  loginAsUser,
};
