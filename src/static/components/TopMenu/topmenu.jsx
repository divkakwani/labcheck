
var TopMenu = React.createClass({

    render: function() {
        return (
            <div className="ui blue inverted padded segment" style={{width: '100%'}}>
                <div className="ui container" style={{margin: "10px"}}>
                    <div className="ui secondary menu">
                        <div className="item">
                            <h2 style={{color: 'white'}}> LabCheck &nbsp;<sup><i>beta</i></sup></h2>
                        </div>
                        <div className="right menu" style={{width: "400px"}}>
                            <StudentDashboard usn={this.props.usn} coursecode={this.props.coursecode}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
