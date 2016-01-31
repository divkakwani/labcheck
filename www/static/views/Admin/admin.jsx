
var Admin = React.createClass({

    render: function() {
        return (
            <div className="ui grid">
                <TopMenu />

                <TabbedDisplayBox>
                    <Tab id="1" label="Program Database">
                        <div className="ui blue secondary pointing menu">
                            <div className="active item">Programs</div>
                            <div className="item">Tests</div>
                        </div>

                        <table className="ui blue celled striped table">
                            <thead>
                            <tr>
                                <th> </th>
                                <th> Program ID </th>
                                <th>Program Name</th>
                                <th>Description</th>
                                <th>Statement</th>
                            </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </Tab>

                    <Tab id="2" label="Student Report">
                        <h4 className="ui blue header"> Search for a specific student</h4>
                        <div className="ui segment" style={{maxWidth: "350px"}}>
                            <form className="ui form">
                                <div className="field">
                                    <label>USN</label>
                                    <div className="ui labeled input">
                                        <div className="ui label">1RV13IS</div>
                                        <input className="ui text" type="text"/>
                                    </div>
                                </div>
                                <button className="ui blue button">Get report</button>
                                <button className="ui blue button">Generate record*</button>
                            </form>
                        </div>
                        <div className="ui horizontal divider">OR</div>
                        <h4 className="ui blue header"><a>Get all the stuents' report</a></h4>
                    </Tab>

                    <Tab id="3" label="Plagiarism Report">
                        To be done later;
                    </Tab>
                    <Tab id="4" label="Manage Handouts">
                        <table className="ui blue celled striped table">
                            <thead>
                            <tr>
                                <th> </th>
                                <th>File Name</th>
                                <th>Description</th>
                                <th>Size</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><input type="checkbox" className="ui blue checkbox"/></td>
                                <td>rdbms.pdf</td>
                                <td>Relation Data Bank by Codd </td>
                                <td>2 MB</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" className="ui blue checkbox"/></td>
                                <td>rdbms.pdf</td>
                                <td>Relation Data Bank by Codd </td>
                                <td>2 MB</td>
                            </tr>
                            </tbody>
                            <tfoot className="full-width">
                            <tr>
                                <th colSpan="4">
                                    <div className="ui blue small labeled button" style={{display: "inline"}}><i className="ui trash icon"></i>Delete</div>
                                    <div className="ui blue small labeled button" style={{display: "inline"}}><i className="ui plus icon"></i>Add</div>
                                </th>
                            </tr>
                            </tfoot>
                        </table>
                    </Tab>

                    <Tab id="5" label="Statistics"> To be done later. </Tab>

                </TabbedDisplayBox>

                <Footer />
            </div>
        );
    }
});


ReactDOM.render(
    <Admin />,
    document.getElementById('admin')
);
