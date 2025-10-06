const cors = function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
};

// const cors = {
//   origin: "*",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
// };

// export default cors;
module.exports = cors;
