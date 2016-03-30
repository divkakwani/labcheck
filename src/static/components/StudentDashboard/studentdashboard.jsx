
var StudentDashboard = React.createClass({
    
   render: function () {
       return (
           <div className="ui large blue inverted menu">
               <div className="item">
                   {this.props.name}
               </div>
           </div>
       );
   } 
});
