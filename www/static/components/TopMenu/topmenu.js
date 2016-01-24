
var TopMenu = React.createClass({
    displayName: "TopMenu",

    render: function () {
        return React.createElement(
            "div",
            { className: "ui blue inverted padded segment", style: { width: '100%' } },
            React.createElement(
                "div",
                { className: "ui container" },
                React.createElement(
                    "span",
                    { style: { float: 'left' } },
                    React.createElement(
                        "h3",
                        { className: "ui header", style: { color: 'white' } },
                        " LabCheck "
                    )
                ),
                React.createElement(
                    "span",
                    { style: { float: 'right' } },
                    React.createElement(
                        "div",
                        { className: "ui divided relaxed horizontal list" },
                        React.createElement(
                            "div",
                            { className: "item" },
                            " ",
                            React.createElement("i", { className: "ui large github icon" })
                        )
                    )
                )
            )
        );
    }
});
