export const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: process.env.HOST || "localhost",
      user: process.env.USER || "root",
      password: process.env.PASSWORD || "Mysql@7881",
      database: "taskmanagement",
      connectTimeout: 60000
    },
  };