
var AnnouncementSubmit = React.createClass({
    displayName: 'AnnouncementSubmit',

    getInitialState: function () {
        return { loading: false, formOn: true, success: false };
    },

    postForm: function () {
        this.setState({ formOn: false, loading: true });
        var formData = $("#form420").serialize();
        $.ajax({
            url: '/dbm/' + session.coursecode + '/announcements',
            method: 'POST',
            data: formData,
            success: function (result) {
                this.setState(result);
                this.setState({ success: true, loading: false });
            }.bind(this)
        });
    },

    renderForm: function () {

        return React.createElement(
            'div',
            null,
            React.createElement(
                'h4',
                { className: 'ui blue header' },
                'Make an announcement '
            ),
            React.createElement(
                'form',
                { className: 'ui form', id: 'form420', method: 'post', onSubmit: this.postForm },
                React.createElement(
                    'div',
                    { className: 'ui field' },
                    React.createElement(
                        'label',
                        null,
                        'Subject: '
                    ),
                    React.createElement('input', { className: 'ui text', name: 'sub', type: 'text' })
                ),
                React.createElement(
                    'div',
                    { className: 'ui field' },
                    React.createElement(
                        'label',
                        null,
                        'Description: '
                    ),
                    React.createElement('textarea', { name: 'desc' })
                ),
                React.createElement(
                    'button',
                    { className: 'ui blue button' },
                    ' Post the announcement'
                )
            )
        );
    },

    renderLoading: function () {
        return React.createElement(
            'div',
            { className: 'ui basic segment', style: { marginTop: "2%" } },
            React.createElement(
                'div',
                { className: 'ui active inverted dimmer' },
                React.createElement(
                    'div',
                    { className: 'ui text loader' },
                    'Loading'
                )
            ),
            React.createElement('p', null)
        );
    },

    rerenderForm: function () {
        this.setState({ formOn: true, loading: false });
    },

    renderSuccess: function () {
        return React.createElement(
            'div',
            { className: 'ui basic segment' },
            React.createElement('br', null),
            'Announcement submitted successfully. ',
            React.createElement(
                'a',
                { style: { cursor: 'pointer' }, onClick: this.rerenderForm },
                'Make another announcement '
            )
        );
    },

    render: function () {
        if (this.state.formOn) return this.renderForm();else if (this.state.loading) return this.renderLoading();else return this.renderSuccess();
    }

});
