
// TODO: remove ajax calls if possible
// TODO: listen to server notifications

var HandoutsList = React.createClass({
    displayName: "HandoutsList",

    getInitialState: function () {
        var that = this;
        setInterval(function () {
            $.ajax({ url: "/api/handouts", success: function (result) {
                    that.setState({ results: result.results });
                } });
        }, 10000);
        return { results: [] };
    },

    render: function () {
        return React.createElement(
            "div",
            { className: "ui divided very relaxed ordered list" },
            this.state.results.map(function (row) {
                return React.createElement(
                    "div",
                    { className: "ui item" },
                    React.createElement(
                        "h4",
                        { className: "ui content header" },
                        row[0],
                        React.createElement(
                            "a",
                            { style: { float: "right" } },
                            "Get"
                        )
                    ),
                    row[1]
                );
            })
        );
    }
});
