
var Handouts = React.createClass({

    getInitialState: function() {
        return {results: []}
    },

    loadFromServer: function() {
        $.ajax({
            url: "/dbm/" + session.coursecode + "/handouts", 
            success: function(result) {
                this.setState(result);
            }.bind(this)
        });
    },

    componentDidMount: function() {
        this.loadFromServer();
        setInterval(this.loadFromServer, 8000);
    },

    render: function() {
       return (
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>URL</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.results.map(function(row) {
                    return (
                        <tr>
                            { row.map(function(cell) { return <td>{cell}</td>; })}
                            <td><i className="ui red trash icon"></i></td>
                        </tr>
                    );   
                })}
            </tbody>
        </table>
       );
    }
});
