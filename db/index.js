import pg from "pg";

//pg is an object coming back from the pg library. pool is a method available on this obj
const pool = new pg.Pool({
  user: "ftmovxbngkvsaq",
  host: "ec2-54-170-163-224.eu-west-1.compute.amazonaws.com",
  database: "d6k9t4vp87793d",
  password: "a700b80edad14c8984e427472850f5478d9caf135244603dcc0ddfe1967f66d5",
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

// export query function - this function exposes the query method from pool and exports it - allowing us to query elsewhere
export default async function query(text, params) {
  return pool.query(text, params); // returns a promise - we can await this in the function we use it in
}

//ssl - heroku security uses ssl - secure socket layer - don't reject unauthorized queries - can query db
