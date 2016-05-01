/**
 * Created by divkakwani on 2/2/16.
 */

var Announcement = React.createClass({
    displayName: "Announcement",

    getInitialState: function () {
        return { results: [] };
    },

    loadFromServer: function (notify = false) {
        $.ajax({
            url: "/dbm/" + session.coursecode + "/announcements",
            success: function (response) {
                /* Generate notifications */
                console.log(notify);
                if (notify) {
                    for (var i = 0; i < response.results.length - this.state.results.length; i++) {
                        toastr.info(response.results[i][1], "New Announcement");
                    }
                }
                this.setState(response);
            }.bind(this)
        });
    },

    componentDidMount: function () {
        this.loadFromServer();
        setInterval(this.loadFromServer.bind(this, true), 10000);
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
