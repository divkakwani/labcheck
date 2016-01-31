/**
 *
 *
 * Created by divkakwani on 24/1/16.
 */

var TabbedDisplayBox = React.createClass({
    displayName: "TabbedDisplayBox",

    getInitialState: function () {
        return { activeTab: '1' };
    },

    render: function () {
        var that = this;
        return React.createElement(
            "div",
            { className: "ui two column stackable grid container" },
            React.createElement(
                "div",
                { className: "four wide column" },
                React.createElement(
                    "div",
                    { className: "ui vertical secondary menu" },
                    React.Children.map(this.props.children, function (child) {
                        return React.createElement(
                            "a",
                            { className: "item", onClick: function () {
                                    that.setState({ activeTab: child.props.id });
                                } },
                            child.props.label
                        );
                    })
                )
            ),
            React.createElement(
                "div",
                { className: "column" },
                React.Children.map(this.props.children, function (child) {
                    if (child.props.id == that.state.activeTab) return child.props.children;else return;
                })
            )
        );
    }
});

var Tab = React.createClass({
    displayName: "Tab",

    render: function () {
        return React.createElement(
            "div",
            { id: this.props.id },
            this.props.children
        );
    }
});
