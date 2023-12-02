import Navigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Profile from "./Profile";
import Login from "./Login";
import SignUp from "./Login/SignUp";
import Home from "./Home";
import Signin from "../users/signin";
import Account from "../users/account";
import UserTable from "../users/table";

function Mixr() {
    // Put Your Screens in Routes, will go under nav bar
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="Profile/:userID" element={<Profile />} />
                <Route path="Login" element={<Login />} />
                <Route path="SignUp" element={<SignUp />} />
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Home/:userID" element={<Home />} />
                <Route path="/Profile/:userID" element={<Profile />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/account" element={<Account />} />
                <Route path="/account/:id" element={<Account />} />
                <Route path="/admin/users" element={<UserTable />} />
            </Routes>
        </div>
    )

}

export default Mixr;