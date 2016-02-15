

var Authenticate = React.createClass({
    
    render: function() {
        return (
            <div className="ui middle aligned center aligned grid" style={{height: "100%"}}>
                <div className="ui column" style={{maxWidth: "500px"}}>
                    <div className="ui huge blue header">LabCheck</div>
                    <AuthenticateBox/>
                </div>
            </div>
        );
    }
});


ReactDOM.render(
    <Authenticate />,
    document.getElementById('authenticate')
);






