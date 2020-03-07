import React from "react";
import Home from "../page/home";
import Course from "../page/course";
import Lecturer from "../page/lecturer";
import Login from "../page/login";
import Work from "../page/work";

const routerList = [
  {
    name: "home",
    path: "/",
    exact: true,
    render: props => <Home {...props} />
  },
  {
    name: "course",
    path: "/course",
    exact: true,
    render: props => <Course {...props} />
  },
  {
    name: "lecturer",
    path: "/lecturer",
    exact: true,
    render: props => <Lecturer {...props} />
  },
  {
    name: "login",
    path: "/login",
    exact: true,
    render: props => <Login {...props} />
  },
  {
    name: "work",
    path: "/work:id",
    exact: true,
    render: props => <Work {...props} />
  }
];

const navList = [
  {
    name: "首页",
    to: "/",
    icon: "iconfont icon-home"
  },
  {
    name: "课程安排",
    to: "/course",
    icon: "iconfont icon-kecheng"
  },
  {
    name: "讲师团队",
    to: "/lecturer",
    icon: "iconfont icon-peixunjiangshi"
  }
];

export { routerList, navList };
