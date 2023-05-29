const { createToken } = require('../../utils/createToken');

const resignToken = async (req, res) => {
  const { user } = req;

  const token = await createToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  return res.json({ token });
};

module.exports = {
  resignToken,
};
