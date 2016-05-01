
var StudentStatus = React.createClass({

    getInitialState: function() {
        return {submissions: [], programs: [], queued: new Set()};
    },

    loadFromServer: function() {
        $.ajax({
            url: "/dbm/" + session.coursecode + "/submissions/" + session.usn,
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

});
