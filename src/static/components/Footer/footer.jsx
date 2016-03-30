
var Footer = React.createClass({

    render: function () {

        style = {fontSize: '50px', lineHeight: '30px'};

        return (
            <div className="ui blue inverted segment" style={{width: '100%'}}>
                <div className="ui center aligned container">
                    <div className="ui very relaxed very padded divided horizontal list" style={style}>
                        <div className="item"> <i className="ui large github icon"></i></div>
                        <div className="item"> <i className="ui mail icon"></i> divkakwani@gmail.com </div>
                        <div className="item"> <i className="ui copyright icon"></i> Divyanshu Kakwani, 2016</div>
                    </div>
                </div>
            </div>
        );
    }
});
