/**
 * Created by divkakwani on 2/2/16.
 */

var Announcement = React.createClass({
    displayName: "Announcement",

    getInitialState: function () {
        var that = this;
        setInterval(function () {
            $.ajax({ url: "/api/announcements", success: function (result) {
                    that.setState({ results: result.results });
                } });
        }, 10000);
        return { results: [] };
    },

    render: function () {
        return React.createElement(
            "div",
            { className: "ui divided very relaxed bulleted list" },
            this.state.results.map(function (row) {
                return React.createElement(
                    "div",
                    { className: "ui item" },
                    React.createElement(
                        "div",
                        { className: "ui content header" },
                        row[0]
                    ),
                    React.createElement(
                        "div",
                        { className: "ui content description" },
                        row[1]
                    )
                );
            })
        );
    }
});
