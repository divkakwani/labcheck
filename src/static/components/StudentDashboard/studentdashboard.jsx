
var StudentDashboard = React.createClass({
    
   render: function () {
       return (
           <div style={{width: "400px"}}>
            <span style={{width: "30px", fontWeight: "bold", padding: "10px"}}>USN: {this.props.usn}</span>
            <span style={{width: "30px", fontWeight: "bold", padding: "10px"}}>Course: {this.props.coursecode}</span>
           </div>
       );
   } 
});
