import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { HashRouter, Route, Routes, Link, useLocation } from "react-router-dom";
import { Breadcrumb, Alert } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./StyledBreadCrumb.css";

const head = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>：
      <Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>：
      <Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);

const breadcrumbNameMap = {
  "/setting": "Company Settings",
  "/setting/Company_Settings": "Project Settings",
  "/setting/Company_Settings/Project_Settings": "4th path is here",
};

const StyledBreadCrumb = ({ showArrow = false }) => {
  const location = useLocation();
  let url;
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    console.log(pathSnippets.length -1, index)
    const classValue = pathSnippets.length -1 == index ? "cursor:default" : "cursor:pointer";
      console.log(classValue)
    return (
      
      <Breadcrumb.Item key={url} classname='link-crumb' style={{classValue}}>
        <Link to={url} >{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  let urlArray;
  if (url) {
    urlArray = url.split("/");
  }
  console.log(urlArray);

  const breadcrumbItems = [
    <Breadcrumb.Item key="home" classname="link-crumb">
      <Link to="/">Setting</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  console.log(showArrow);

  return (
    <div className="demo">
      <Routes>
        <Route path="/apps" component={head} />
        <Route render={() => <span>Home Page</span>} />
      </Routes>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
      <div className="demo-nav" style={{ "margin-top": "10px" }}>
        
        {!url && <Link to="/setting">{(showArrow || (urlArray && urlArray.length > 1)) && (
          <ArrowLeftOutlined />
        )}Company Settings</Link>}
        {url == "/setting" && (
          <Link to="/setting/Company_Settings">{(showArrow || (urlArray && urlArray.length > 1)) && (
            <ArrowLeftOutlined />
          )}Project Settings</Link>
        )}
        {url == "/setting/Company_Settings" && (
          <Link to="/setting/Company_Settings/Project_Settings">
            {(showArrow || (urlArray && urlArray.length > 1)) && (
          <ArrowLeftOutlined />
          )}
            4th path is here
          </Link>
        )}
      </div>
    </div>
  );
};

export default StyledBreadCrumb;
