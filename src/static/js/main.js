
/* Retrieve session information from
 * server and make it available globally
 * as properties to the following session
 * variable
 */

var session = {};

(function(exports) {

    $.ajax({
        async: false,
        url: "/getsession",
        success: function(response) {
            exports.coursecode = response.coursecode
            exports.usn = response.usn;
        }
    })

})(session);
