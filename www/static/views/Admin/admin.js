
var Admin = React.createClass({
    displayName: "Admin",

    render: function () {
        return React.createElement(
            "div",
            { className: "ui grid" },
            React.createElement(TopMenu, null),
            React.createElement(
                TabbedDisplayBox,
                null,
                React.createElement(
                    Tab,
                    { id: "1", label: "Program Database" },
                    React.createElement(
                        "div",
                        { className: "ui blue secondary pointing menu" },
                        React.createElement(
                            "div",
                            { className: "active item" },
                            "Programs"
                        ),
                        React.createElement(
                            "div",
                            { className: "item" },
                            "Tests"
                        )
                    ),
                    React.createElement(
                        "table",
                        { className: "ui blue celled striped table" },
                        React.createElement(
                            "thead",
                            null,
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "th",
                                    null,
                                    " "
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    " Program ID "
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Program Name"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Description"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Statement"
                                )
                            )
                        ),
                        React.createElement("tbody", null)
                    )
                ),
                React.createElement(
                    Tab,
                    { id: "2", label: "Student Report" },
                    React.createElement(
                        "h4",
                        { className: "ui blue header" },
                        " Search for a specific student"
                    ),
                    React.createElement(
                        "div",
                        { className: "ui segment", style: { maxWidth: "350px" } },
                        React.createElement(
                            "form",
                            { className: "ui form" },
                            React.createElement(
                                "div",
                                { className: "field" },
                                React.createElement(
                                    "label",
                                    null,
                                    "USN"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "ui labeled input" },
                                    React.createElement(
                                        "div",
                                        { className: "ui label" },
                                        "1RV13IS"
                                    ),
                                    React.createElement("input", { className: "ui text", type: "text" })
                                )
                            ),
                            React.createElement(
                                "button",
                                { className: "ui blue button" },
                                "Get report"
                            ),
                            React.createElement(
                                "button",
                                { className: "ui blue button" },
                                "Generate record*"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "ui horizontal divider" },
                        "OR"
                    ),
                    React.createElement(
                        "h4",
                        { className: "ui blue header" },
                        React.createElement(
                            "a",
                            null,
                            "Get all the stuents' report"
                        )
                    )
                ),
                React.createElement(
                    Tab,
                    { id: "3", label: "Plagiarism Report" },
                    "To be done later;"
                ),
                React.createElement(
                    Tab,
                    { id: "4", label: "Manage Handouts" },
                    React.createElement(
                        "table",
                        { className: "ui blue celled striped table" },
                        React.createElement(
                            "thead",
                            null,
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "th",
                                    null,
                                    " "
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "File Name"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Description"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Size"
                                )
                            )
                        ),
                        React.createElement(
                            "tbody",
                            null,
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    React.createElement("input", { type: "checkbox", className: "ui blue checkbox" })
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "rdbms.pdf"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "Relation Data Bank by Codd "
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "2 MB"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    React.createElement("input", { type: "checkbox", className: "ui blue checkbox" })
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "rdbms.pdf"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "Relation Data Bank by Codd "
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "2 MB"
                                )
                            )
                        ),
                        React.createElement(
                            "tfoot",
                            { className: "full-width" },
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "th",
                                    { colSpan: "4" },
                                    React.createElement(
                                        "div",
                                        { className: "ui blue small labeled button", style: { display: "inline" } },
                                        React.createElement("i", { className: "ui trash icon" }),
                                        "Delete"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "ui blue small labeled button", style: { display: "inline" } },
                                        React.createElement("i", { className: "ui plus icon" }),
                                        "Add"
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    Tab,
                    { id: "5", label: "Statistics" },
                    " To be done later. "
                )
            ),
            React.createElement(Footer, null)
        );
    }
});

ReactDOM.render(React.createElement(Admin, null), document.getElementById('admin'));
