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
            { className: "ui stackable grid" },
            React.createElement(
                "div",
                { className: "row", style: { width: "100%" } },
                React.Children.map(this.props.children, function (child) {
                    return React.createElement(
                        "div",
                        { className: "column", style: { width: "200px" }, onClick: function () {
                                that.setState({ activeTab: child.props.id });
                            } },
                        child.props.label
                    );
                })
            ),
            React.createElement(
                "div",
                { className: "centered row" },
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
