

var Student = React.createClass({
    displayName: "Student",

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
                        "Submit a Program"
                    ),
                    React.createElement(
                        "a",
                        { className: "item", "data-tab": "second" },
                        "Check your Status"
                    ),
                    React.createElement(
                        "a",
                        { className: "item", "data-tab": "fifth" },
                        "Request a Resource"
                    ),
                    React.createElement(
                        "a",
                        { className: "item", "data-tab": "third" },
                        "Handouts"
                    ),
                    React.createElement(
                        "a",
                        { className: "item", "data-tab": "fourth" },
                        "Announcements"
                    )
                ),
                React.createElement(
                    "div",
                    { style: { maxWidth: "500px" } },
                    React.createElement(
                        "div",
                        { className: "ui active tab padded basic segment", "data-tab": "first" },
                        React.createElement(
                            "form",
                            { className: "ui right aligned form" },
                            React.createElement(
                                "div",
                                { className: "inline field" },
                                React.createElement(
                                    "label",
                                    { style: { width: "100px" } },
                                    "Program ID "
                                ),
                                React.createElement(
                                    "select",
                                    { className: "ui dropdown" },
                                    React.createElement(
                                        "option",
                                        { value: "" },
                                        " Select your program"
                                    ),
                                    React.createElement(
                                        "option",
                                        { value: "1" },
                                        " Program 1"
                                    ),
                                    React.createElement(
                                        "option",
                                        { value: "2" },
                                        " Program 2"
                                    ),
                                    React.createElement(
                                        "option",
                                        { value: "3" },
                                        " Program 3"
                                    )
                                )
                            ),
                            React.createElement("div", { className: "ui hidden divider" }),
                            React.createElement(
                                "div",
                                { className: "inline field" },
                                React.createElement(
                                    "label",
                                    { style: { width: "100px" } },
                                    "Upload your file"
                                ),
                                React.createElement("input", { type: "file" })
                            ),
                            React.createElement("div", { className: "ui hidden divider" }),
                            React.createElement(
                                "button",
                                { className: "ui blue button" },
                                "Submit"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "ui tab padded basic segment", "data-tab": "second" },
                        React.createElement(
                            "form",
                            { className: "ui form" },
                            React.createElement(
                                "div",
                                { className: "inline field" },
                                React.createElement(
                                    "label",
                                    null,
                                    "Enter your USN"
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
                            React.createElement("div", { className: "ui hidden divider" }),
                            React.createElement(
                                "button",
                                { className: "ui blue button" },
                                "Get report"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "ui tab padded basic segment", "data-tab": "third" },
                        React.createElement(HandoutsList, null)
                    ),
                    React.createElement(
                        "div",
                        { className: "ui tab padded basic segment", "data-tab": "fourth" },
                        React.createElement(Announcement, null)
                    )
                )
            ),
            React.createElement(Footer, null)
        );
    }

});

ReactDOM.render(React.createElement(Student, null), document.getElementById('student'));
