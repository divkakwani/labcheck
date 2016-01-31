
var StudentDashboard = React.createClass({
    displayName: "StudentDashboard",

    render: function () {
        return React.createElement(
            "div",
            { className: "ui large blue inverted menu" },
            React.createElement(
                "div",
                { className: "item" },
                React.createElement(
                    "div",
                    { clasName: "ui blue button" },
                    React.createElement("i", { className: "ui large announcement icon" })
                ),
                React.createElement(
                    "div",
                    { className: "floating ui red label" },
                    "12"
                )
            ),
            React.createElement(
                "div",
                { className: "item" },
                this.props.name
            )
        );
    }
});
