
var Admin = React.createClass({

    render: function() {
        return (
            <div>
                <TopMenu />

                <div className="ui container" style={{marginTop: "3em", minHeight: "800px;"}}>
                    <div className="ui secondary menu grid">
                        <a className="item active" data-tab="first">Announcements</a>
                        <a className="item" data-tab="second">Program Database</a>
                        <a className="item" data-tab="third">Student Report</a>
                        <a className="item" data-tab="fourth">Plagiarism Report</a>
                        <a className="item" data-tab="fifth">Manage Handouts</a>
                        <a className="item" data-tab="sixth">Statistics</a>
                    </div>

                    <div style={{maxWidth: "500px"}}>
                    <div className="ui active tab padded basic segment" data-tab="first">
                        <h4 className="ui blue header"> Make an announcement </h4>
                        <form className="ui form" action="/admin" method="post">
                            <div className="ui field">
                                <label>Subject: </label>
                                <input className="ui text" name="sub" type="text"/>
                            </div>
                            <div className="ui field">
                                <label>Description: </label>
                                <textarea name="desc"></textarea>
                            </div>
                            <button className="ui blue button">Post the announcement</button>
                        </form>
                    </div>
                    <div className="ui tab padded basic segment" data-tab="second">
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
                    </div>

                    <div className="ui tab padded basic segment" data-tab="third">
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
                    </div>

                    <div className="ui tab padded basic segment" data-tab="fourth">
                        To be done later;
                    </div>

                    <div className="ui tab padded basic segment" data-tab="fifth">
                        <h4 className="ui blue header">Handouts List</h4>
                        <Handouts/>
                        <div className="ui divider"></div>
                        <h4 className="ui blue header">Add handouts</h4>
                        <form className="ui form" method="post" encType="multipart/form-data" action="/admin">
                            <div className="field">
                                <label>Name</label>
                                <input type="text" className="ui text" name="name"/>
                            </div>
                            <div className="field">
                                <label>Description</label>
                                <textarea name="desc"></textarea>
                            </div>
                            <div className="field">
                                <input type="file" name="file"/>
                            </div>
                            <button className="ui blue button">Post the handout</button>
                        </form>
                    </div>

                    <div className="ui tab padded basic segment" data-tab="sixth">
                    To be done later.
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
});


ReactDOM.render(
    <Admin />,
    document.getElementById('admin')
);
