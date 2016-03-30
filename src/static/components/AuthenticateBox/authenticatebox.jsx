

var AuthenticateBox = React.createClass({

    changeForm: function(form) {
        var other = (form == "f1") ? "f2" : "f1";
        $('.label#' + other).addClass('basic');
        $('.label#' + form).removeClass('basic');
        $('form#' + form).css("display", "block");
        $('form#' + other).css("display", "none");
    },

    render: function() {
        var that = this;
        return (
               <div className="ui left aligned blue basic segment">
                   <form className="ui form">
                       <div className="ui inline field">
                           <label className="ui label" style={{width: "110px"}}>Login as</label>
                           <div className="ui blue large label" style={{cursor: "pointer"}} id="f1" onClick={function() {that.changeForm("f1");}}>Student</div>
                           <div className="ui blue large basic label" style={{cursor: "pointer"}} id="f2" onClick={function() {that.changeForm("f2");}}>Admin</div>
                       </div>
                   </form>
                   <form className="ui form" id="f1" method="get" action="/student">
                       <div className="ui inline field">
                           <label className="ui label" style={{width: "110px"}}>USN</label>
                           <input type="text" className="ui text" name="usn"/>
                       </div>
                       <div className="ui inline field">
                           <label className="ui label" style={{width: "110px"}}>Course Code</label>
                           <input type="text" className="ui text" name="ccode"/>
                       </div>
                       <button className="ui blue button">Enter LabCheck</button>
                   </form>
                   <form className="ui form" id="f2" style={{display: "none"}} method="get" action="/admin">
                       <div className="ui inline field">
                           <label className="ui label" style={{width: "110px"}}>Course Code</label>
                           <input type="text" className="ui text" name="ccode"/>
                       </div>
                       <div className="ui inline field">
                           <label className="ui label" style={{width: "110px"}}>Access Key</label>
                           <input type="password" className="ui password" name="pass"/>
                       </div>
                       <button className="ui blue button">Enter LabCheck</button>
                   </form>
               </div>
        );
    
    }

});
