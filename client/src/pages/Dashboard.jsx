import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";
import DashboardComponent from "../components/DashboardComponent";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  console.log("tab", tab);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    console.log("tabFromUrl", tabFromUrl);
    // console.log(tabFromUrl);
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/*********SIDEBAR*********/}
        <DashSidebar />
      </div>
      {/**********PROFILE**********/}
      {tab === "profile" && <DashProfile />}
      {/* {POSTS} */}
      {tab === "posts" && <DashPosts />}
      {/* {Users} */}
      {tab === "users" && <DashUsers />}
      {/* Comments */}
      {tab === "comments" && <DashComments />}
      {/* Dashboard component */}
      {tab === "dash" && <DashboardComponent />}
    </div>
  );
};

export default Dashboard;
