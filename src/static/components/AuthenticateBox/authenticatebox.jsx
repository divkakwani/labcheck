
var StudentBox = React.createClass({
    render: function() {
        return (
           <form className="ui form" method="post" action="/student">
               <div className="ui inline field">
                   <label style={{width: "110px"}}>USN</label>
                   <input type="text" className="ui text" name="usn"/>
               </div>
               <div className="ui inline field">
                   <label style={{width: "110px"}}>Course Code</label>
                   <input type="text" className="ui text" name="ccode"/>
               </div>
               <br/>
               <button className="ui blue button">Enter LabCheck</button>
           </form>
        );    
    }
});

var AdminBox = React.createClass({
    render: function() {
        return (
           <form className="ui form"  method="post" action="/admin">
               <div className="ui inline field">
                   <label style={{width: "110px"}}>Course Code</label>
                   <input type="text" className="ui text" name="ccode"/>
               </div>
               <div className="ui inline field">
                   <label style={{width: "110px"}}>Access Key</label>
                   <input type="password" className="ui password" name="pass"/>
               </div>
               <br/>
               <button className="ui blue button">Enter LabCheck</button>
           </form>
        );
    }
});


var AuthenticateBox = React.createClass({

    getInitialState: function(form) {
        return {admin: false, student: true, adminbtn: 'ui blue large basic label', studentbtn: 'ui blue large label'};
    },

    showAdminBox: function() {
        this.setState({adminbtn: 'ui blue large label', studentbtn: 'ui blue large basic label', admin: true, student: false});
    },

    showStudentBox: function() {
        this.setState({adminbtn: 'ui blue large basic label', studentbtn: 'ui blue large label', admin: false, student: true});
    },

    render: function() {
        var that = this;
        return (
            <div className="ui left aligned centered basic segment">
                <div className={this.state.studentbtn}  onClick={this.showStudentBox}>Student</div>
                <div className={this.state.adminbtn} onClick={this.showAdminBox}>Admin</div>
                <br/><br/><br/>
                {this.state.admin ? <AdminBox/> : <StudentBox/>}
            </div>
        );
    
    }

});
