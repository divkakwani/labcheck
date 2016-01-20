

var Footer = React.createClass({
    render: function() {
        return (
            <div className="ui blue inverted right aligned vertical footer segment">
                <div className="ui divided relaxed horizontal list">
                    <div className="item"> <i className="ui mail icon"></i> divkakwani@gmail.com </div>
                    <div className="item"> <i className="ui copyright icon"></i> Divyanshu Kakwani, 2016</div>
                </div>
            </div>
        ); 
    }
});

ReactDOM.render(
    <Footer/>,
    document.getElementById('footer')
);
