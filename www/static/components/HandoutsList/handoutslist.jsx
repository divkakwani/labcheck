
// TODO: remove ajax calls if possible
// TODO: listen to server notifications


var HandoutsList = React.createClass({

    getInitialState: function() {
        var that = this;
        setInterval(function() {
            $.ajax({url: "/api/handouts", success: function(result) {
                that.setState({results: result.results});
            }});
        }, 10000);
        return {results: []};
    },

    render: function() {
        return (
            <div className="ui divided very relaxed ordered list">
                {
                    this.state.results.map(function(row) {
                        return (
                        <div className="ui item">
                            <h4 className="ui content header">{row[0]}<a style={{float: "right"}}>Get</a></h4>
                            {row[1]}
                        </div>
                            );
                        })

                    }
            </div>
        );
    }
});
