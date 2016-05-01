

var ProgramTable = React.createClass({
    
    getInitialState: function() {
        return {results: []}
    },

    loadFromServer: function() {
        $.ajax({
            url: "/dbm/" + session.coursecode + "/programs",
            success: function(response) {
                this.setState(response)
            }.bind(this)
        });
    },

    componentDidMount: function() {
           this.loadFromServer();
    },

    render: function() {
        return (
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Program ID</th>
                        <th>Program Name</th>
                        <th>Statement</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.results.map(function(row) {
                        return (
                            <tr>
                                <td>{row[0]}</td>
                                <td>{row[1]}</td>
                                <td>{row[2]}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

})
