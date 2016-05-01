

var ProgramStmt = React.createClass({
    displayName: "ProgramStmt",

    md2html: function () {
        var md_content = this.props.pgmdata[this.props.selected - 1][2];
        // var html_content = marked(md_content);
        return md_content;
    },

    render: function () {
        return React.createElement(
            "div",
            { className: "ui message", style: { minHeight: "200px" }, id: "pgmstmt" },
            React.createElement(
                "h4",
                { className: "ui blue header" },
                this.props.selected != -1 ? this.props.pgmdata[this.props.selected - 1][1] : ""
            ),
            React.createElement(
                "p",
                null,
                this.props.selected != -1 ? React.createElement("div", { dangerouslySetInnerHTML: { __html: this.md2html() } }) : "Choose a program"
            )
        );
    }
});

var ProgramSubmit = React.createClass({
    displayName: "ProgramSubmit",

    getInitialState: function () {
        return { submitted: false };
    },

    makeSubmission: function () {
        var data = new FormData();
        var id = this.props.selected;
        data.append('file', $('#submissionfile')[0].files[0]);
        $.ajax({
            url: '/dbm/' + session.coursecode + '/submissions/' + session.usn + '/' + id,
            method: 'POST',
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            success: function (result) {
                this.setState({ submitted: true });
            }.bind(this)
        });
    },

    renderLoading: function () {
        return React.createElement(
            "div",
            { className: "ui basic segment", style: { marginTop: "2%" } },
            React.createElement(
                "div",
                { className: "ui active inverted dimmer" },
                React.createElement(
                    "div",
                    { className: "ui text loader" },
                    "Loading"
                )
            ),
            React.createElement("p", null)
        );
    },

    renderSuccess: function () {
        return React.createElement(
            "div",
            null,
            "Submission Queued"
        );
    },

    renderForm: function () {
        return React.createElement(
            "div",
            null,
            React.createElement("input", { type: "file", id: "submissionfile" }),
            React.createElement("div", { className: "ui hidden divider" }),
            React.createElement(
                "button",
                { className: "ui blue button", onClick: this.makeSubmission },
                "Submit"
            )
        );
    },

    render: function () {
        if (!this.state.submitted) return this.renderForm();else if (this.state.submitted) return this.renderSuccess();
    }

});

var ProgramForm = React.createClass({
    displayName: "ProgramForm",

    getInitialState: function () {
        return { pgmdata: [], selected: -1, view: 0 };
    },

    loadFromServer: function () {
        $.ajax({
            url: '/dbm/' + session.coursecode + '/programs',
            success: function (response) {
                this.setState({
                    pgmdata: response.results
                });
            }.bind(this)
        });
    },

    changeProgram: function (id) {
        this.setState({ selected: id });
    },

    componentDidMount: function () {
        this.loadFromServer();
    },

    showStmt: function (id) {
        this.changeProgram(id);
        this.setState({ view: 1 });
    },

    showList: function () {
        this.setState({ view: 0 });
    },

    showSubmit: function (id) {
        this.changeProgram(id);
        this.setState({ view: 2 });
    },

    renderSubmit: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "ui blue small header" },
                "Submit",
                React.createElement(
                    "small",
                    { style: { float: "right" } },
                    React.createElement(
                        "a",
                        { style: { cursor: 'pointer' }, onClick: this.showStmt.bind(this, this.state.selected) },
                        "Statment"
                    ),
                    "  |  ",
                    React.createElement(
                        "a",
                        { style: { cursor: 'pointer' }, onClick: this.showList.bind(this, this.state.selected) },
                        "Assignment List"
                    )
                )
            ),
            React.createElement(ProgramSubmit, { selected: this.state.selected })
        );
    },

    renderStmt: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "ui blue small header" },
                "Statement",
                React.createElement(
                    "small",
                    { style: { float: "right" } },
                    React.createElement(
                        "a",
                        { style: { cursor: 'pointer' }, onClick: this.showSubmit.bind(this, this.state.selected) },
                        "Submit"
                    ),
                    "  |  ",
                    React.createElement(
                        "a",
                        { style: { cursor: 'pointer' }, onClick: this.showList.bind(this, this.state.selected) },
                        "Assignment List"
                    )
                )
            ),
            React.createElement(ProgramStmt, { pgmdata: this.state.pgmdata, selected: this.state.selected })
        );
    },

    renderList: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "ui relaxed vertical list", style: { maxWidth: "500px" } },
                this.state.pgmdata.map(function (row) {
                    return React.createElement(
                        "div",
                        { className: "ui small header item" },
                        row[0],
                        ". ",
                        row[1],
                        React.createElement(
                            "small",
                            { style: { float: "right" } },
                            React.createElement(
                                "a",
                                { onClick: this.showStmt.bind(this, row[0]) },
                                "Statement"
                            ),
                            "  |  ",
                            React.createElement(
                                "a",
                                { onClick: this.showSubmit.bind(this, row[0]) },
                                "Submit"
                            )
                        )
                    );
                }, this)
            )
        );
    },

    render: function () {
        if (this.state.view == 0) return this.renderList();else if (this.state.view == 1) return this.renderStmt();else return this.renderSubmit();
    }

});
