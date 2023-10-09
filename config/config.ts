import "dotenv/config";

const config = {
  port: process.env.PORT,
  mongoose: {
    url: process.env.MONGODB_URL || "mongodb://mongo:27017/books-crud",
  },
};

export default config;
