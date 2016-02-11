
// TODO: remove ajax calls if possible
// TODO: listen to server notifications

var Handouts = React.createClass({

    getInitialState: function() {
        var that = this;
        $.ajax({url: "/get/handouts", success: function(result) {
            //that.setState(result);
        }});
        return {data: [["data bank", "influential paper by codd", "5MB"], ["gekhre", "implementation of rdbms", "20MB"]]};
    },

    render: function() {
       return (
           <table className="ui blue celled table">
               <thead>
                <tr>
                    <th>File Name</th>
                    <th>Description</th>
                    <th>Size</th>
                    <th></th>
                </tr>
               </thead>
               <tbody>
                    {this.state.data.map(function(row) {
                        return (
                            <tr>
                                { row.map(function(cell) {
                                    return <td>{cell}</td>;
                                    })}
                                <td><i className="ui red trash icon"></i></td>
                            </tr>
                            );
                        })}
               </tbody>
           </table>
       );
    }

});
