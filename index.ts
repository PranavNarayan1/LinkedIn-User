import express from "express";
import dotenv from "dotenv";
import { databaseConnection } from "./src/databases/connection";
import signUp from "./src/routes/userSignup.router";
import { connectRedis } from "./src/databases/redis";
import verifyUserEmail from "./src/routes/verifyEmail.router";
import login from "./src/routes/userLogin.router";
import logout from "./src/routes/userLogout.router";
import refresh from "./src/routes/Internal-Routes/refreshToken.router";
import forgetPassword from "./src/routes/forget-password.router";
import verifyOtp from "./src/routes/verify-otp.router";
import create_post from "./src/routes/create-post.router";
import like_post from "./src/routes/like-post.router";
import comment_post from "./src/routes/comment-post.router";
import send_connection_request from "./src/routes/send-request.router";
import accept_connection_request from "./src/routes/accept-request.router";
import add_skills from "./src/routes/add-skills.router";
import add_education from "./src/routes/add-education.router";
import add_experiance from "./src/routes/add-experiance.router";
import see_all_pending_request from "./src/routes/seeAll-pending-request.router";
import see_all_relevent_jobs from "./src/routes/seeAll-jobs.router";
import apply_job from "./src/routes/applyOnJobs.router";
import reset_password from "./src/routes/reset-password.router";
import add_current_designation from "./src/routes/add-current-designation.router";
import add_profile_picture from "./src/routes/addProfilePicture.router";
import post_multiple_picture from "./src/routes/postMultiplePic.router";
import swaggerUi from 'swagger-ui-express'


const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/public"));
dotenv.config();
const port = process.env.PORT;
databaseConnection();
connectRedis();

//user onboarding apis
app.use("/user", signUp);
app.use("/user", verifyUserEmail);
app.use("/user", login);
app.use("/user", logout);
app.use("/user", forgetPassword);
app.use("/user", reset_password);
app.use("/user", verifyOtp);

// user action apis

app.use("/user-actions", create_post);
app.use("/user-actions", like_post);
app.use("/user-actions", comment_post);
app.use("/user-actions", add_profile_picture);
app.use("/user-actions", post_multiple_picture);
app.use("/user-actions", send_connection_request);
app.use("/user-actions", accept_connection_request);
app.use("/user-actions", see_all_pending_request);
app.use("/user-actions", see_all_relevent_jobs);
app.use("/user-actions", apply_job);

// user action update profile

app.use("/user-actions", add_skills);
app.use("/user-actions", add_education);
app.use("/user-actions", add_experiance);
app.use("/user-actions", add_current_designation);
app.use("/api", refresh);

const swaggerDocument = require("./swagger_output.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Application is listening on port ${port}`);
});
