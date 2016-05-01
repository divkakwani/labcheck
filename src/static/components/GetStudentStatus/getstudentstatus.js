
function make_status(coursecode, usn) {
    return React.createClass({

        getInitialState: function () {
            return { submissions: [], programs: [], queued: new Set() };
        },

        loadFromServer: function () {
            $.ajax({
                url: "/dbm/" + coursecode + "/submissions/" + usn,
                success: function (response) {
                    this.setState({ submissions: response.results });
                }.bind(this)
            });
            $.ajax({
                url: "/dbm/" + session.coursecode + "/programs",
                success: function (response) {
                    this.setState({ programs: response.results });
                }.bind(this)
            });
        },

        componentDidUpdate: function () {
            if (this.state.submissions.length != 0 && this.state.programs.length != 0 && this.state.queued.size == 0) {
                var done = new Set();
                for (var i = 0; i < this.state.submissions.length; i++) {
                    done.add(this.state.submissions[i][0]);
                }
                this.setState({ queued: done });
            }
        },

        componentDidMount: function () {
            console.log(this.state);
            this.loadFromServer();
            setInterval(this.loadFromServer.bind(this, true), 10000);
        },

        render: function () {
            return React.createElement(
                "table",
                { className: "ui table" },
                this.state.programs.map(function (row) {
                    return React.createElement(
                        "tr",
                        { className: "ui row" },
                        React.createElement(
                            "td",
                            null,
                            row[0]
                        ),
                        React.createElement(
                            "td",
                            null,
                            row[1]
                        ),
                        React.createElement(
                            "td",
                            null,
                            this.state.queued.has(row[0]) ? "Queued" : "Not submitted"
                        )
                    );
                }, this)
            );
        }

    });
}

var GetStudentStatus = React.createClass({
    displayName: "GetStudentStatus",

    getInitialState: function () {
        return { formon: true, status: "" };
    },

    getStatus: function () {
        this.setState({ formon: false, status: make_status('12IS35', $('#usnval').val()) });
    },

    renderStatus: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h4",
                { className: "ui blue small header" },
                "Status ",
                React.createElement(
                    "small",
                    { style: { float: "right" }, onClick: function () {
                            this.setState({ formon: true });
                        }.bind(this) },
                    "Go back"
                )
            ),
            React.createElement(this.state.status, null)
        );
    },

    renderForm: function () {
        return React.createElement(
            "div",
            null,
            "Enter USN:  ",
            React.createElement("input", { type: "text", id: "usnval" }),
            React.createElement("div", { className: "ui divider" }),
            React.createElement(
                "button",
                { onClick: this.getStatus },
                "Go"
            )
        );
    },

    render: function () {
        if (this.state.formon) return this.renderForm();else return this.renderStatus();
    }

});
