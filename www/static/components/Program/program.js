

var Program = React.createClass({
    displayName: 'Program',

    getInitialState: function () {
        var that = this;
        $.ajax({ url: '/api/programs' + '/' + this.props.ccode + '/' + this.props.pcode,
            success: function (response) {
                that.setState({ stmt: response });
            } });
        return { ccode: this.props.ccode, pcode: this.props.pcode, stmt: "" };
    },

    componentDidMount: function () {
        var that = this;
        document.getElementById("pcode").addEventListener("change", function () {
            that.setState({ pcode: $("#pcode").val() });
            $.ajax({ url: '/api/programs' + '/' + that.state.ccode + '/' + that.state.pcode,
                success: function (response) {
                    that.setState({ stmt: response });
                } });
        });
    },

    render: function () {

        return React.createElement('div', { dangerouslySetInnerHTML: { __html: this.state.stmt } });
    }

});
