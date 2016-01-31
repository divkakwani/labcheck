
var StudentDashboard = React.createClass({
    
   render: function () {
       return (
           <div className="ui large blue inverted menu">
               <div className="item">
                   <div clasName="ui blue button"><i className="ui large announcement icon"></i></div>
                   <div className="floating ui red label">12</div>
               </div>
               <div className="item">
                   {this.props.name}
               </div>
           </div>
       );
   } 
});
