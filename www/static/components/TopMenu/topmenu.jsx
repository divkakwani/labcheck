
var TopMenu = React.createClass({

    render: function() {
        return (
            <div className="ui blue inverted padded segment" style={{width: '100%'}}>
                <div className="ui container">
                    <span style={{float: 'left'}}>
                        <h3 className="ui header" style={{color: 'white'}}> LabCheck </h3>
                    </span>
                    <span style={{float: 'right'}}>
                        <div className="ui divided relaxed horizontal list">
                            <div className="item"> <i className="ui large github icon"></i></div>
                        </div>
                    </span>
                </div>
            </div>
        );
    }
});
