

var Student = React.createClass({


    render: function() {
    
        return (
            <div>
                <TopMenu/>
                <div className="ui container" style={{marginTop: "3em", minHeight: "400px;"}}>
                    <div className="ui secondary menu grid">
                        <a className="item active" data-tab="first">Submit a Program</a>
                        <a className="item" data-tab="second">Check your Status</a>
                        <a className="item" data-tab="fifth">Request a Resource</a>
                        <a className="item" data-tab="third">Handouts</a>
                        <a className="item" data-tab="fourth">Announcements</a>
                    </div>
                    <div style={{maxWidth: "500px"}}>
                    <div className="ui active tab padded basic segment" data-tab="first">
                        <form className="ui right aligned form">
                            <div className="inline field">
                                <label style={{width: "100px"}}>Program ID </label>
                                <select className="ui dropdown">
                                    <option value=""> Select your program</option>
                                    <option value="1"> Program 1</option>
                                    <option value="2"> Program 2</option>
                                    <option value="3"> Program 3</option>
                                </select>
                            </div>
                            <div className="ui hidden divider"></div>
                            <div className="inline field">
                                <label style={{width: "100px"}}>Upload your file</label>
                                <input type="file"/>
                            </div>
                            <div className="ui hidden divider"></div>
                            <button className="ui blue button">Submit</button>
                        </form>
                    </div>
                    <div className="ui tab padded basic segment" data-tab="second">
                        <form className="ui form">
                            <div className="inline field">
                                <label>Enter your USN</label>
                                <div className="ui labeled input">
                                    <div className="ui label">1RV13IS</div>
                                    <input className="ui text" type="text"/>
                                </div>
                            </div>
                            <div className="ui hidden divider"></div>
                            <button className="ui blue button">Get report</button>
                        </form>
                    </div>
                    <div className="ui tab padded basic segment" data-tab="third">
                        <HandoutsList/>
                    </div>
                    <div className="ui tab padded basic segment" data-tab="fourth">
                        <Announcement/>
                    </div>
                     </div>
                </div>

                <Footer />
            </div>
        );
    }

});

ReactDOM.render(
    <Student />,
    document.getElementById('student')
);
