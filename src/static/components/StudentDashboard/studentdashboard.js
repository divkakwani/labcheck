
var StudentDashboard = React.createClass({
    displayName: "StudentDashboard",

    render: function () {
        return React.createElement(
            "div",
            { style: { width: "400px" } },
            React.createElement(
                "span",
                { style: { width: "30px", fontWeight: "bold", padding: "10px" } },
                "USN: ",
                this.props.usn
            ),
            React.createElement(
                "span",
                { style: { width: "30px", fontWeight: "bold", padding: "10px" } },
                "Course: ",
                this.props.coursecode
            )
        );
    }
});
