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
            <div className="ui two column stackable grid container">
                <div className="four wide column">
                    <div className="ui vertical secondary menu">
                        {   React.Children.map(this.props.children, function(child) {
                            return (
                                <a className="item" onClick={ function() {that.setState({activeTab: child.props.id})}}>
                                    {child.props.label}
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="column">
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

