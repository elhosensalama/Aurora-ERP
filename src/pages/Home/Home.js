import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Banks from "../subpages/Banks";
import Basic from "../subpages/Basic";
import Customers from "../subpages/Customers";
import Dashboard from "../subpages/Dashboard";
import Employees from "../subpages/Employees";
import Invoices from "../subpages/Invoices";
import Management from "../subpages/Management";
import Items from "../subpages/Items";
import Providers from "../subpages/Providers";
import Receipts from "../subpages/Receipts";
import Stores from "../subpages/Stores";
import Treasury from "../subpages/Treasury";
import Upload from "../subpages/Upload";
import Accounts from "../subpages/Accounts";

const Home = () => {
    const [isPending, setIsPending] = useState(false);

    // const components = ["Banks", "Basic", "Customers", "Employees", "Invoices", "Management", "Items", "Providers", "Receipts", "Stores", "Treasury", "Upload", "Dashboard"];

    const [ComponentState, setComponentState] = useState("Dashboard");

    useEffect(() => {
        setTimeout(() => {
            setIsPending(true);
        }, 1000);
    }, []);
    return (
        <div className="home">
            {isPending ? (
                <>
                    <Sidebar setComponentState={setComponentState} ComponentState={ComponentState} />
                    <div className="rightSide">
                        {ComponentState === "Accounts" && <Accounts />}
                        {ComponentState === "Banks" && <Banks />}
                        {ComponentState === "Basic" && <Basic />}
                        {ComponentState === "Customers" && <Customers />}
                        {ComponentState === "Dashboard" && <Dashboard />}
                        {ComponentState === "Employees" && <Employees />}
                        {ComponentState === "Invoices" && <Invoices />}
                        {ComponentState === "Management" && <Management />}
                        {ComponentState === "Items" && <Items />}
                        {ComponentState === "Providers" && <Providers />}
                        {ComponentState === "Receipts" && <Receipts />}
                        {ComponentState === "Stores" && <Stores />}
                        {ComponentState === "Treasury" && <Treasury />}
                        {ComponentState === "Upload" && <Upload />}
                    </div>
                </>
            ) : (
                <div className="loading center">
                    <i className="login-logo fa-brands fa-phoenix-framework fa-4x" style={{ transform: "translate(50%, 50%)" }}></i>
                    <svg className="spinner" viewBox="0 0 50 50">
                        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                    </svg>
                </div>
            )}
        </div>
    );
};

export default Home;
