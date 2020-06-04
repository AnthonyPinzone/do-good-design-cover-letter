import React from "react";
import PageHeader from "../components/PageHeader";
import PageContent from "../components/PageContent";
import PageFooter from "../components/PageFooter";
import ScrollToTop from "../components/ScrollToTop";

import "../assets/styles/main.scss";

const Layout = ({ children }) => (
    <>
        <PageHeader />

        <PageContent>
            {children}
        </PageContent>

        <PageFooter />
        <ScrollToTop />
    </>
);

export default Layout
