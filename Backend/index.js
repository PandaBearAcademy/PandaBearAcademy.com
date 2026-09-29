import express from "express";
const router = express.Router();
import {getAllUsers, userPost, logIn} from './controllers/User.js'

const app = express();
app.use(express.json());

app.use("/", router);

router.get("/users/v1", getAllUsers);
router.post("/users/v1", userPost);
router.post("/users/v1/login", logIn)





app.listen(3000, () => console.log("Server running on port 3000"));