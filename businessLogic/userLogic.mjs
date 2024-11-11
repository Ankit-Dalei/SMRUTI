import User from '../models/User.mjs';

const signup = async ({ username, email, password, role }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('User already exists');

  const user = new User({ username, email, password, role });
  await user.save();
  return { message: 'User registered successfully' };
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  
  if (!user) {
    throw new Error('Invalid credentials');
  }

  if (user.password !== password) {
    throw new Error('Invalid credentials');
  }

  return { message: 'Login successful', userId: user };
};

const getAllUsers = async () => {
  return await User.find({});
};

export default { signup, login, getAllUsers };