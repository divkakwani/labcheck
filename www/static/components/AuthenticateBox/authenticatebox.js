

var AuthenticateBox = React.createClass({
    displayName: "AuthenticateBox",

    changeForm: function (form) {
        var other = form == "f1" ? "f2" : "f1";
        $('.label#' + other).addClass('basic');
        $('.label#' + form).removeClass('basic');
        $('form#' + form).css("display", "block");
        $('form#' + other).css("display", "none");
    },

    render: function () {
        var that = this;
        return React.createElement(
            "div",
            { className: "ui left aligned blue basic segment" },
            React.createElement(
                "form",
                { className: "ui form" },
                React.createElement(
                    "div",
                    { className: "ui inline field" },
                    React.createElement(
                        "label",
                        { className: "ui label", style: { width: "110px" } },
                        "Login as"
                    ),
                    React.createElement(
                        "div",
                        { className: "ui blue large label", style: { cursor: "pointer" }, id: "f1", onClick: function () {
                                that.changeForm("f1");
                            } },
                        "Student"
                    ),
                    React.createElement(
                        "div",
                        { className: "ui blue large basic label", style: { cursor: "pointer" }, id: "f2", onClick: function () {
                                that.changeForm("f2");
                            } },
                        "Admin"
                    )
                )
            ),
            React.createElement(
                "form",
                { className: "ui form", id: "f1", method: "get", action: "/student" },
                React.createElement(
                    "div",
                    { className: "ui inline field" },
                    React.createElement(
                        "label",
                        { className: "ui label", style: { width: "110px" } },
                        "USN"
                    ),
                    React.createElement("input", { type: "text", className: "ui text", name: "usn" })
                ),
                React.createElement(
                    "div",
                    { className: "ui inline field" },
                    React.createElement(
                        "label",
                        { className: "ui label", style: { width: "110px" } },
                        "Course Code"
                    ),
                    React.createElement("input", { type: "text", className: "ui text", name: "ccode" })
                ),
                React.createElement(
                    "button",
                    { className: "ui blue button" },
                    "Enter LabCheck"
                )
            ),
            React.createElement(
                "form",
                { className: "ui form", id: "f2", style: { display: "none" }, method: "get", action: "/admin" },
                React.createElement(
                    "div",
                    { className: "ui inline field" },
                    React.createElement(
                        "label",
                        { className: "ui label", style: { width: "110px" } },
                        "Course Code"
                    ),
                    React.createElement("input", { type: "text", className: "ui text", name: "ccode" })
                ),
                React.createElement(
                    "div",
                    { className: "ui inline field" },
                    React.createElement(
                        "label",
                        { className: "ui label", style: { width: "110px" } },
                        "Access Key"
                    ),
                    React.createElement("input", { type: "password", className: "ui password", name: "pass" })
                ),
                React.createElement(
                    "button",
                    { className: "ui blue button" },
                    "Enter LabCheck"
                )
            )
        );
    }

});
