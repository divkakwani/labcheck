
var Admin = React.createClass({
    displayName: "Admin",

    render: function () {
        return React.createElement(
            "div",
            { className: "ui grid" },
            React.createElement(TopMenu, null),
            React.createElement(TabbedDisplayBox, null),
            React.createElement(Footer, null)
        );
    }
});

ReactDOM.render(React.createElement(Admin, null), document.getElementById('admin'));
