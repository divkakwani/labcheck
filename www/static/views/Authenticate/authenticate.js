

var Authenticate = React.createClass({
    displayName: "Authenticate",

    render: function () {
        return React.createElement(
            "div",
            { className: "ui middle aligned center aligned grid", style: { height: "100%" } },
            React.createElement(
                "div",
                { className: "ui column", style: { maxWidth: "500px" } },
                React.createElement(
                    "div",
                    { className: "ui huge blue header" },
                    "LabCheck"
                ),
                React.createElement(AuthenticateBox, null)
            )
        );
    }
});

ReactDOM.render(React.createElement(Authenticate, null), document.getElementById('authenticate'));
