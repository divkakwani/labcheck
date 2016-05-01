

var ProgramTable = React.createClass({
    displayName: "ProgramTable",

    getInitialState: function () {
        return { results: [] };
    },

    loadFromServer: function () {
        $.ajax({
            url: "/dbm/" + session.coursecode + "/programs",
            success: function (response) {
                this.setState(response);
            }.bind(this)
        });
    },

    componentDidMount: function () {
        this.loadFromServer();
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
                        "Program ID"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Program Name"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Statement"
                    )
                )
            ),
            React.createElement(
                "tbody",
                null,
                this.state.results.map(function (row) {
                    return React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            row[0]
                        ),
                        React.createElement(
                            "td",
                            null,
                            row[1]
                        ),
                        React.createElement(
                            "td",
                            null,
                            row[2]
                        )
                    );
                })
            )
        );
    }

});
