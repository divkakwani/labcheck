
var Admin = React.createClass({

    render: function() {
        return (
            <div className="ui grid">
                <TopMenu />
                <TabbedDisplayBox />
                <Footer />
            </div>
        );
    }
});


ReactDOM.render(
    <Admin />,
    document.getElementById('admin')
);
