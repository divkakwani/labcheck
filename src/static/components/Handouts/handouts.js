
var Handouts = React.createClass({
    displayName: "Handouts",

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
        setInterval(this.loadFromServer, 8000);
    },

    render: function () {
        return React.createElement(
            "table",
            { className: "ui celled table" },
            React.createElement(
                "thead",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        null,
                        "ID"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Name"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Description"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "URL"
                    ),
                    React.createElement("th", null)
                )
            ),
            React.createElement(
                "tbody",
                null,
                this.state.results.map(function (row) {
                    return React.createElement(
                        "tr",
                        null,
                        row.map(function (cell) {
                            return React.createElement(
                                "td",
                                null,
                                cell
                            );
                        }),
                        React.createElement(
                            "td",
                            null,
                            React.createElement("i", { className: "ui red trash icon" })
                        )
                    );
                })
            )
        );
    }
});
