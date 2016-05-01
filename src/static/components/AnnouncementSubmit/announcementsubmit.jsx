
var AnnouncementSubmit = React.createClass({

    getInitialState: function() {
        return {loading: false, formOn: true, success: false};
    },
    
    postForm: function() {
        this.setState({formOn: false, loading: true});
        var formData = $("#form420").serialize();
        $.ajax({
            url: '/dbm/' + session.coursecode + '/announcements',
            method: 'POST',
            data: formData, 
            success: function(result) {
                this.setState(result);
                this.setState({success: true, loading: false});
            }.bind(this),
        });
    },

    renderForm: function() {
    
        return (
            <div>
            <h4 className="ui blue header">Make an announcement </h4>
            <form className="ui form" id="form420" method="post" onSubmit={this.postForm}>
                <div className="ui field">
                    <label>Subject: </label>
                    <input className="ui text" name="sub" type="text"/>
                </div>
                <div className="ui field">
                    <label>Description: </label>
                    <textarea name="desc"></textarea>
                </div>
                <button className="ui blue button"> Post the announcement</button>
            </form>
            </div>
        )
    },

    renderLoading: function() {
        return (
            <div className="ui basic segment" style={{marginTop: "2%"}}>
                <div className="ui active inverted dimmer">
                    <div className="ui text loader">Loading</div>
                </div>
                <p></p>
            </div>
        );
    },

    rerenderForm: function() {
        this.setState({formOn: true, loading: false});
    },

    renderSuccess: function() {
        return (
            <div className="ui basic segment">
                <br/>
                Announcement submitted successfully. <a style={{cursor: 'pointer'}} onClick={this.rerenderForm}>Make another announcement </a>
            </div>
        );
    },

    render: function() {
        if (this.state.formOn)
            return this.renderForm();
        else if (this.state.loading)
            return this.renderLoading();
        else
            return this.renderSuccess();
    }

});
