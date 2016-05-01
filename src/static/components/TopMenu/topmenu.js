
var TopMenu = React.createClass({
    displayName: "TopMenu",

    render: function () {
        return React.createElement(
            "div",
            { className: "ui blue inverted padded segment", style: { width: '100%' } },
            React.createElement(
                "div",
                { className: "ui container", style: { margin: "10px" } },
                React.createElement(
                    "div",
                    { className: "ui secondary menu" },
                    React.createElement(
                        "div",
                        { className: "item" },
                        React.createElement(
                            "h2",
                            { style: { color: 'white' } },
                            " LabCheck  ",
                            React.createElement(
                                "sup",
                                null,
                                React.createElement(
                                    "i",
                                    null,
                                    "beta"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "right menu", style: { width: "400px" } },
                        React.createElement(StudentDashboard, { usn: this.props.usn, coursecode: this.props.coursecode })
                    )
                )
            )
        );
    }
});
