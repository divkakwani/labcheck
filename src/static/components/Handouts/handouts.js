

var Handouts = React.createClass({
    displayName: "Handouts",

    getInitialState: function () {
        var that = this;
        $.ajax({ url: "/get/handouts", success: function (result) {
                //that.setState(result);
            } });
        return { data: [["data bank", "influential paper by codd", "5MB"], ["gekhre", "implementation of rdbms", "20MB"]] };
    },

    render: function () {
        return React.createElement(
            "table",
            { className: "ui blue celled table" },
            React.createElement(
                "thead",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        null,
                        "File Name"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Description"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Size"
                    ),
                    React.createElement("th", null)
                )
            ),
            React.createElement(
                "tbody",
                null,
                this.state.data.map(function (row) {
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
