/**
 *
 *
 * Created by divkakwani on 24/1/16.
 */

var TabbedDisplayBox = React.createClass({
    displayName: "TabbedDisplayBox",

    render: function () {

        return React.createElement(
            "div",
            { className: "ui two column stackable grid container" },
            React.createElement(
                "div",
                { className: "four wide column" },
                React.createElement("div", { className: "ui vertical secondary menu" })
            ),
            React.createElement("div", { className: "column" })
        );
    }
});
