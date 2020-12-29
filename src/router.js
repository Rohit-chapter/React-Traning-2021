import React from "react";

const HomePage = React.lazy(() => import("./Container/Home"));
const Blog = React.lazy(() => import("./Container/Blog"));
const BlogDetail = React.lazy(() => import("./Container/Blog/blogDetail"));
const Login = React.lazy(() => import("./Container/Auth/login"));
const ContactUs = React.lazy(() => import("./Container/ContactUs"));
const Dashboard = React.lazy(() => import("./Container/Dashboard/dashboard"));
const NotFound = React.lazy(() => import("./Container/NotFound"));


const routes = [
    {
        path: "/",
        exact: true,
        name: "Home",
        component: HomePage,
    },
    {
        path: "/blog",
        exact: true,
        name: "Blog",
        component: Blog,
    },
    {
        path: "/blog/detail/:id",
        exact: true,
        name: "BlogDetail",
        component: BlogDetail,
    },
    {
        path: "/login",
        exact: true,
        name: "Login",
        component: Login,
    },
    {
        path: "/contact-us",
        exact: true,
        name: "ContactUs",
        component: ContactUs,
    },
    {
        path: "/dashboard",
        exact: true,
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "*",
        exact: false,
        name: "404",
        component: NotFound,
    },    
]


export default routes;
