
var Authenticate = React.createClass({
    displayName: "Authenticate",

    render: function () {
        return React.createElement(
            "div",
            { className: "ui center aligned grid", style: { paddingTop: "5%", height: "100%" } },
            React.createElement(
                "div",
                { className: "ui column", style: { maxWidth: "600px" } },
                React.createElement(
                    "div",
                    { style: { fontSize: "4em" }, className: "ui huge blue header" },
                    "LabCheck"
                ),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(AuthenticateBox, null)
            )
        );
    }
});

ReactDOM.render(React.createElement(Authenticate, null), document.getElementById('authenticate'));
