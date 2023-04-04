const CompanyInfo = () => {
    return (
        <div id="CompanyInfo" className="tabcontent">
            <h3>Company Information</h3>
            <form action="/action_page.php">
                <div className="row">
                    <div className="col">
                        <div className="mb-4 mt-4">
                            <label htmlFor="name" className="form-label">
                                Company Name:
                            </label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                id="name"
                                placeholder="Enter Company Name"
                                name="name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="pwd" className="form-label">
                                Password:
                            </label>
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                id="pwd"
                                placeholder="Enter password"
                                name="pswd"
                            />
                        </div>
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                <button type="submit" className="btn_">
                    Update
                </button>
            </form>
        </div>
    );
};

export default CompanyInfo;
