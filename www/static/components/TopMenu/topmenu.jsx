
var TopMenu = React.createClass({

    render: function() {
        return (
            <div className="ui blue inverted padded segment" style={{width: '100%'}}>
                <div className="ui container" style={{margin: "10px"}}>
                    <div className="ui secondary menu">
                        <div className="item">
                            <h2 style={{color: 'white'}}> LabCheck </h2>
                        </div>
                        <div className="right menu">
                            <StudentDashboard name="Divyanshu"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
