
// TODO: remove ajax calls if possible
// TODO: listen to server notifications

var HandoutsList = React.createClass({
    displayName: "HandoutsList",

    getInitialState: function () {
        return { results: [] };
    },

    loadFromServer: function () {
        $.ajax({
            url: "/dbm/" + session.coursecode + "/handouts",
            success: function (result) {
                this.setState(result);
            }.bind(this)
        });
    },

    componentDidMount: function () {
        this.loadFromServer();
        setInterval(this.loadFromServer, 10000);
    },

    render: function () {
        return React.createElement(
            "div",
            { className: "ui divided very relaxed ordered list", style: { maxWidth: "500px" } },
            this.state.results.map(function (row) {
                return React.createElement(
                    "div",
                    { className: "ui item" },
                    React.createElement(
                        "h4",
                        { className: "ui content header" },
                        row[1],
                        React.createElement(
                            "a",
                            { style: { float: "right" }, href: row[3] },
                            "Get"
                        )
                    ),
                    row[2]
                );
            })
        );
    }
});
