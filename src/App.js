import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";

import { Route, Routes, useNavigate } from "react-router-dom";

import "./_app.scss";
import { useSelector } from "react-redux";
import WatchPage from "./pages/watchPage/WatchPage";
import SearchPage from "./pages/searchPage/SearchPage";
import SubscriptionsPage from "./pages/subscriptionsPage/SubscriptionPage";
import ChannelPage from "./pages/channelPage/ChannelPage";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/auth");
    }
  }, [accessToken, loading, navigate]);

  return (
    <Routes>
      <Route path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth" element={<LoginPage />} />
      <Route path="/search/:query"
        element={
          <Layout>
            <SearchPage />
          </Layout>
        }
      />
      <Route path="/watch/:id"
        element={
          <Layout>
            <WatchPage />
          </Layout>
        }
      />
      <Route path="/feed/subscriptions"
        element={
          <Layout>
            <SubscriptionsPage />
          </Layout>
        }
      />
      <Route path="/channel/:channelId"
        element={
          <Layout>
            <ChannelPage />
          </Layout>
        }
      />
      <Route path="*"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
