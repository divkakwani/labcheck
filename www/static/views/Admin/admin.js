
var Admin = React.createClass({
    displayName: "Admin",

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(TopMenu, null),
            React.createElement(
                "div",
                { className: "ui container", style: { marginTop: "3em", minHeight: "400px;" } },
                React.createElement(
                    "div",
                    { className: "ui secondary menu grid" },
                    React.createElement(
                        "a",
                        { className: "item active", "data-tab": "first" },
                        "Announcements"
                    ),
                    React.createElement(
                        "a",
                        { className: "item", "data-tab": "second" },
                        "Program Database"
                    ),
                    React.createElement(
                        "a",
                        { className: "item", "data-tab": "third" },
                        "Student Report"
                    ),
                    React.createElement(
                        "a",
                        { className: "item", "data-tab": "fourth" },
                        "Plagiarism Report"
                    ),
                    React.createElement(
                        "a",
                        { className: "item", "data-tab": "fifth" },
                        "Manage Handouts"
                    ),
                    React.createElement(
                        "a",
                        { className: "item", "data-tab": "sixth" },
                        "Statistics"
                    )
                ),
                React.createElement(
                    "div",
                    { style: { maxWidth: "500px" } },
                    React.createElement(
                        "div",
                        { className: "ui tab padded basic segment", "data-tab": "first" },
                        React.createElement(
                            "h4",
                            { className: "ui blue header" },
                            " Make an announcement "
                        ),
                        React.createElement(
                            "form",
                            { className: "ui form", action: "/admin", method: "post" },
                            React.createElement(
                                "div",
                                { className: "ui field" },
                                React.createElement(
                                    "label",
                                    null,
                                    "Subject: "
                                ),
                                React.createElement("input", { className: "ui text", name: "sub", type: "text" })
                            ),
                            React.createElement(
                                "div",
                                { className: "ui field" },
                                React.createElement(
                                    "label",
                                    null,
                                    "Description: "
                                ),
                                React.createElement("textarea", { name: "desc" })
                            ),
                            React.createElement(
                                "button",
                                { className: "ui blue button" },
                                "Post the announcement"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "ui tab padded basic segment", "data-tab": "second" },
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
                        "div",
                        { className: "ui tab padded basic segment", "data-tab": "third" },
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
                        "div",
                        { className: "ui tab padded basic segment", "data-tab": "fourth" },
                        "To be done later;"
                    ),
                    React.createElement(
                        "div",
                        { className: "ui tab padded basic segment", "data-tab": "fifth" },
                        React.createElement(Handouts, null)
                    ),
                    React.createElement(
                        "div",
                        { className: "ui tab padded basic segment", "data-tab": "sixth" },
                        "To be done later."
                    )
                )
            ),
            React.createElement(Footer, null)
        );
    }
});

ReactDOM.render(React.createElement(Admin, null), document.getElementById('admin'));
