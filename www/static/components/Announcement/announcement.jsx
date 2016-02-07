/**
 * Created by divkakwani on 2/2/16.
 */


var Announcement = React.createClass({

    getInitialState: function() {
        var that = this;
        setInterval(function() {
            $.ajax({url: "/get/announcements", success: function(result) {
                that.setState({results: result.results});
            }});
        }, 10000);
        return {results: []};
    },

    render: function() {
        return (
                <div className="ui divided very relaxed bulleted list">
                    {
                        this.state.results.map(function(row) {
                                return (
                                    <div className="ui item">
                                        <div className="ui content header">{row[0]}</div>
                                        <div className="ui content description">{row[1]}</div>
                                    </div>
                                    );
                            })

                        }
                </div>
        );
    }
});
