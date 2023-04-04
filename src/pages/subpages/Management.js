import React from 'react';
import openTab from '../../assets/js/openTab';
import CompanyInfo from './tabs/CompanyInfo';
import PosDefinitions from './tabs/PosDefinitions';
import TaxesInfo from './tabs/TaxesInfo';

const Management = () => {
    return (
        <div className="management">
            <h1 className="page_heading">
                <span>Management</span>
            </h1>
            <div className="tab">
                <button
                    className="tablinks"
                    onClick={(event) => openTab(event, 'CompanyInfo')}
                >
                    Company Info
                </button>
                <button
                    className="tablinks"
                    onClick={(event) => openTab(event, 'TaxesInfo')}
                >
                    Taxes Info
                </button>
                <button
                    className="tablinks"
                    onClick={(event) => openTab(event, 'PosDefinitions')}
                >
                    Pos Definitions
                </button>
            </div>
            <CompanyInfo />

            <TaxesInfo />

            <PosDefinitions />
        </div>
    );
};

export default Management;
