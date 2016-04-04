/**
 * Created by divkakwani on 2/2/16.
 */

var Announcement = React.createClass({
    displayName: "Announcement",

    getInitialState: function () {
        return { results: [] };
    },

    loadFromServer: function () {
        $.ajax({
            url: "http://localhost/dbm/announcements",
            success: function (result) {
                this.setState(result);
            }.bind(this)
        });
    },

    componentDidMount: function () {
        this.loadFromServer();
        setInterval(this.loadFromServer, 10000);
    },

    render: function () {
        return React.createElement(
            "div",
            { className: "ui relaxed padded list" },
            this.state.results.map(function (row, index) {
                return React.createElement(
                    "div",
                    { className: "item" },
                    React.createElement(
                        "div",
                        { className: "ui content header" },
                        row[1]
                    ),
                    React.createElement(
                        "div",
                        { className: "ui content description" },
                        row[2]
                    ),
                    React.createElement("div", { className: "ui divider" })
                );
            })
        );
    }
});
