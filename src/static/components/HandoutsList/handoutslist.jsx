
// TODO: remove ajax calls if possible
// TODO: listen to server notifications


var HandoutsList = React.createClass({

    getInitialState: function() {
        return {results: []};
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
        setInterval(this.loadFromServer, 10000);
    },

    render: function() {
        return (
            <div className="ui divided very relaxed ordered list" style={{maxWidth: "500px"}}>
            {   this.state.results.map(function(row) {
                    return (
                        <div className="ui item">
                            <h4 className="ui content header">{row[1]}<a style={{float: "right"}} href={row[3]}>Get</a></h4>
                            {row[2]}
                        </div>
                    );
                })}
            </div>
        );
    }
});
