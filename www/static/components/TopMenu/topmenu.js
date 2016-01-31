
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
                            " LabCheck "
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "right menu" },
                        React.createElement(StudentDashboard, { name: "Divyanshu" })
                    )
                )
            )
        );
    }
});
