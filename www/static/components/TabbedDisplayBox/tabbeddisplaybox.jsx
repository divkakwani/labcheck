/**
 *
 *
 * Created by divkakwani on 24/1/16.
 */


var TabbedDisplayBox = React.createClass({

    getInitialState: function() {
        return {activeTab: '1'};
    },

   render: function() {
        var that = this;
       return (
            <div className="ui stackable grid">
                <div className="row" style={{width: "100%"}}>
                        {   React.Children.map(this.props.children, function(child) {
                            return (
                                <div className="column" style={{width: "200px"}} onClick={ function() {that.setState({activeTab: child.props.id})}}>
                                    {child.props.label}
                                </div>
                            );
                        })}
                </div>

                <div className="centered row">
                    { React.Children.map(this.props.children, function(child) {
                            if (child.props.id == that.state.activeTab)
                                return child.props.children;
                            else
                                return;
                        })}
                </div>

            </div>
       );
   }
});


var Tab = React.createClass({
    render: function() {
        return (
            <div id={this.props.id}>
                { this.props.children }
            </div>
        );
    }
});

