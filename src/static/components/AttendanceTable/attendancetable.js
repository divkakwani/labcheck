

var attendancetable = React.createClass({
    displayName: "attendancetable",

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
                        "USN"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Name"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Class#"
                    )
                )
            ),
            React.createElement("tbody", null)
        );
    }

});
