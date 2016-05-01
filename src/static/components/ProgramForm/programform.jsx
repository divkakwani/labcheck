

var ProgramStmt = React.createClass({
    
    md2html: function() {
        var md_content = this.props.pgmdata[this.props.selected-1][2];
        // var html_content = marked(md_content);
        return md_content;
    },

    render: function() {
        return ( 
            <div className="ui message" style={{minHeight: "200px"}} id="pgmstmt">
                <h4 className="ui blue header">
                    {this.props.selected != -1 ? this.props.pgmdata[this.props.selected-1][1] : ""}
                </h4>
                <p>{this.props.selected != -1 ? <div dangerouslySetInnerHTML={{__html: this.md2html()}} />: "Choose a program"}</p>
            </div>
        );
    }
});

var ProgramSubmit = React.createClass({
    
    getInitialState: function() {
        return {submitted: false};
    },

    makeSubmission: function() {
        var data = new FormData();
        var id = this.props.selected;
        data.append('file', $('#submissionfile')[0].files[0]);
        $.ajax({
            url: '/dbm/' + session.coursecode + '/submissions/' + session.usn + '/' + id,
            method: 'POST',
            data: data, 
            cache: false,
            contentType: false,
            processData: false,
            success: function(result) {
                this.setState({submitted: true});
            }.bind(this),
        });
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

    renderSuccess: function() {
        return (
            <div>
                Submission Queued
            </div>
        );
    },

    renderForm: function() {
        return (
            <div>
                <input type="file" id="submissionfile" />
                <div className="ui hidden divider"></div>
                <button className="ui blue button" onClick={this.makeSubmission}>Submit</button>
            </div>
        );
    },

    render: function() {
        if (!this.state.submitted)
            return this.renderForm();
        else if(this.state.submitted)
            return this.renderSuccess();
    }

});

var ProgramForm = React.createClass({
    
    getInitialState: function() {
        return {pgmdata: [], selected: -1, view: 0};
    },

    loadFromServer: function() {
        $.ajax({
            url: '/dbm/' + session.coursecode + '/programs',
            success: function(response) {
                this.setState({
                    pgmdata: response.results
                });
            }.bind(this)
        });
    },
    
    changeProgram: function(id) {
        this.setState({selected: id});
    },

    componentDidMount: function() {
        this.loadFromServer();
    },

    showStmt: function(id) {
        this.changeProgram(id); 
        this.setState({view: 1});
    },

    showList: function() {
        this.setState({view: 0});
    },

    showSubmit: function(id) {
        this.changeProgram(id); 
        this.setState({view: 2});
    },

    renderSubmit: function() {
        return (
            <div>
                <div className='ui blue small header'>
                Submit
                <small style={{float: "right"}}>
                    <a style={{cursor: 'pointer'}} onClick={this.showStmt.bind(this, this.state.selected)}>Statment</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a style={{cursor: 'pointer'}} onClick={this.showList.bind(this, this.state.selected)}>Assignment List</a>
                </small>
                </div>
                <ProgramSubmit selected={this.state.selected} />
            </div>
        );
    },

    renderStmt: function() {
        return (
            <div>
                <div className='ui blue small header'>
                Statement
                <small style={{float: "right"}}>
                    <a style={{cursor: 'pointer'}} onClick={this.showSubmit.bind(this, this.state.selected)}>Submit</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a style={{cursor: 'pointer'}} onClick={this.showList.bind(this, this.state.selected)}>Assignment List</a>
                </small>
                </div>
                <ProgramStmt pgmdata={this.state.pgmdata} selected={this.state.selected} />
            </div>
        );
    },

    renderList: function() {
        return (
            <div>
                <div className="ui relaxed vertical list" style={{maxWidth: "500px"}}>
                    {this.state.pgmdata.map(function(row) {
                        return (
                            <div className="ui small header item">
                                {row[0]}. {row[1]} 
                                <small style={{float: "right"}}>
                                    <a onClick={this.showStmt.bind(this, row[0])}>Statement</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                                    <a onClick={this.showSubmit.bind(this, row[0])}>Submit</a>
                                </small>
                            </div>
                        );
                    }, this)}
                </div>
            </div>
        );
    },

    render: function() {
        if(this.state.view == 0)
            return this.renderList();
        else if(this.state.view == 1)
            return this.renderStmt();
        else
            return this.renderSubmit();
    }

});
