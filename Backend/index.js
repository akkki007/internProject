const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://nazareakshay:akshay2006@internshipproject.6lqpele.mongodb.net/?retryWrites=true&w=majority&appName=InternshipProject";

async function register(data) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    await createListing(client, {
      name: `${data.username}`,
      enrollment: `${data.enrollment}`,
      password: `${data.password}`,
      address: `${data.address}`,
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function login(data) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const user = await compareListing(client, {
      name: `${data.username}`,
      password: `${data.password}`,
    });
    return user != null; // Return true if user is found, false otherwise
  } catch (e) {
    console.error(e);
    return false;
  } finally {
    await client.close();
  }
}

async function compareListing(client, findListing) {
  const result = await client
    .db("user_registration")
    .collection("users")
    .findOne({ name: findListing.name, password: findListing.password });
  return result;
}

async function createListing(client, newListing) {
  const result = await client
    .db("user_registration")
    .collection("users")
    .insertOne(newListing);
  console.log(`New listing created with the following id: ${result.insertedId}`);
}

app.post("/registration", (req, res) => {
  register(req.body).catch(console.error);
  res.json({ message: "Registration successful" });
});

app.post("/login", async (req, res) => {
  const loginSuccess = await login(req.body).catch(console.error);
  console.log(req.body);
  if (loginSuccess) {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Login failed. Incorrect username or password." });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
