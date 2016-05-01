
var StudentBox = React.createClass({
    displayName: "StudentBox",

    render: function () {
        return React.createElement(
            "form",
            { className: "ui form", method: "post", action: "/studentlogin" },
            React.createElement(
                "div",
                { className: "ui inline field" },
                React.createElement(
                    "label",
                    { style: { width: "110px" } },
                    "USN"
                ),
                React.createElement("input", { type: "text", className: "ui text", name: "usn" })
            ),
            React.createElement(
                "div",
                { className: "ui inline field" },
                React.createElement(
                    "label",
                    { style: { width: "110px" } },
                    "Course Code"
                ),
                React.createElement("input", { type: "text", className: "ui text", name: "coursecode" })
            ),
            React.createElement("br", null),
            React.createElement(
                "button",
                { className: "ui blue button" },
                "Enter LabCheck"
            )
        );
    }
});

var AdminBox = React.createClass({
    displayName: "AdminBox",

    render: function () {
        return React.createElement(
            "form",
            { className: "ui form", method: "post", action: "/adminlogin" },
            React.createElement(
                "div",
                { className: "ui inline field" },
                React.createElement(
                    "label",
                    { style: { width: "110px" } },
                    "Course Code"
                ),
                React.createElement("input", { type: "text", className: "ui text", name: "coursecode" })
            ),
            React.createElement(
                "div",
                { className: "ui inline field" },
                React.createElement(
                    "label",
                    { style: { width: "110px" } },
                    "Access Key"
                ),
                React.createElement("input", { type: "password", className: "ui password", name: "pass" })
            ),
            React.createElement("br", null),
            React.createElement(
                "button",
                { className: "ui blue button" },
                "Enter LabCheck"
            )
        );
    }
});

var AuthenticateBox = React.createClass({
    displayName: "AuthenticateBox",

    getInitialState: function (form) {
        return { admin: false, student: true, adminbtn: 'ui blue large basic label', studentbtn: 'ui blue large label' };
    },

    showAdminBox: function () {
        this.setState({ adminbtn: 'ui blue large label', studentbtn: 'ui blue large basic label', admin: true, student: false });
    },

    showStudentBox: function () {
        this.setState({ adminbtn: 'ui blue large basic label', studentbtn: 'ui blue large label', admin: false, student: true });
    },

    render: function () {
        var that = this;
        return React.createElement(
            "div",
            { className: "ui left aligned centered basic segment" },
            React.createElement(
                "div",
                { className: this.state.studentbtn, onClick: this.showStudentBox },
                "Student"
            ),
            React.createElement(
                "div",
                { className: this.state.adminbtn, onClick: this.showAdminBox },
                "Admin"
            ),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            this.state.admin ? React.createElement(AdminBox, null) : React.createElement(StudentBox, null)
        );
    }

});

ReactDOM.render(React.createElement(AuthenticateBox, null), document.getElementById('authenticatebox'));
