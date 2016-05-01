
function make_status(coursecode, usn) {
    return  React.createClass({

    getInitialState: function() {
        return {submissions: [], programs: [], queued: new Set()};
    },

    loadFromServer: function() {
        $.ajax({
            url: "/dbm/" + coursecode + "/submissions/" + usn,
            success: function(response) {
                this.setState({submissions: response.results});
            }.bind(this)
        });
        $.ajax({
            url: "/dbm/" + session.coursecode + "/programs",
            success: function(response) {
                this.setState({programs: response.results});
            }.bind(this)
        });
    },

    componentDidUpdate: function() {
        if (this.state.submissions.length != 0 && this.state.programs.length != 0 && this.state.queued.size == 0) {
            var done = new Set();
            for(var i = 0; i < this.state.submissions.length; i++) {
                done.add(this.state.submissions[i][0]);
            }
            this.setState({queued: done});
        }
    },

    componentDidMount: function() {
        console.log(this.state);
        this.loadFromServer();
        setInterval(this.loadFromServer.bind(this, true), 10000);
    },

    render: function() {
        return (
            <table className="ui table">
            {this.state.programs.map(function(row) {
                return (<tr className="ui row">
                            <td>{row[0]}</td>
                            <td>{row[1]}</td>
                            <td>{this.state.queued.has(row[0]) ? "Queued" : "Not submitted"}</td>
                        </tr>);
            }, this)}
            </table>
        )
    }

});}

var GetStudentStatus = React.createClass({

    getInitialState: function() {
        return {formon: true, status: ""};
    },

    getStatus: function() {
        this.setState({formon: false, status: make_status('12IS35', $('#usnval').val())})      
    },

    renderStatus: function() {
        return (
            <div>
                <h4 className="ui blue small header">Status <small style={{float: "right"}} onClick={(function() {this.setState({formon: true})}).bind(this)}>Go back</small></h4>
                <this.state.status />
            </div>
        )
    },

    renderForm: function() {
        return (
            <div>
                Enter USN:&nbsp;&nbsp;<input type="text" id="usnval"/>
                <div className="ui divider"></div>
                <button onClick={this.getStatus}>Go</button>
            </div>
        )
    },

    render: function() {
        if (this.state.formon)
            return this.renderForm();
        else
            return this.renderStatus();
    }

}); 
