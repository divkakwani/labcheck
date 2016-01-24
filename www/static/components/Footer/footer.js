
var Footer = React.createClass({
    displayName: "Footer",

    render: function () {
        return React.createElement(
            "div",
            { className: "ui blue inverted right aligned vertical footer segment", style: { width: '100%' } },
            React.createElement(
                "div",
                { className: "ui divided relaxed horizontal list" },
                React.createElement(
                    "div",
                    { className: "item" },
                    " ",
                    React.createElement("i", { className: "ui mail icon" }),
                    " divkakwani@gmail.com "
                ),
                React.createElement(
                    "div",
                    { className: "item" },
                    " ",
                    React.createElement("i", { className: "ui copyright icon" }),
                    " Divyanshu Kakwani, 2016"
                )
            )
        );
    }
});
