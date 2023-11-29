import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const tokenJwt = authHeader && authHeader.split(" ")[1];
  if (tokenJwt == null) return res.sendStatus(401);
  jwt.verify(tokenJwt, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.email = decoded.email;
    next();
  });
};
