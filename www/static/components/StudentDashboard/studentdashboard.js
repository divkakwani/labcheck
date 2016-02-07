
var StudentDashboard = React.createClass({
    displayName: "StudentDashboard",

    render: function () {
        return React.createElement(
            "div",
            { className: "ui large blue inverted menu" },
            React.createElement(
                "div",
                { className: "item" },
                this.props.name
            )
        );
    }
});
