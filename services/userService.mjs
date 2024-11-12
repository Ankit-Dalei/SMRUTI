import userLogic from '../businessLogic/userLogic.mjs';

const signup = async (req, res) => {
  try {
    const result = await userLogic.signup(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const result = await userLogic.login(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userLogic.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getAllUsersCount = async (req, res) => {
  try {
    const users = await userLogic.getDashboardCounts();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export default { signup, login, getAllUsers, getAllUsersCount };