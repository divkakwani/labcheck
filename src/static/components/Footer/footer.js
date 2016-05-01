
var Footer = React.createClass({
    displayName: 'Footer',

    render: function () {

        style = { fontSize: '50px', lineHeight: '30px' };

        return React.createElement(
            'div',
            { className: 'ui blue inverted segment', style: { width: '100%' } },
            React.createElement(
                'div',
                { className: 'ui center aligned container' },
                React.createElement(
                    'div',
                    { className: 'ui very relaxed very padded divided horizontal list', style: style },
                    React.createElement(
                        'div',
                        { className: 'item' },
                        React.createElement(
                            'a',
                            { href: 'http://www.github.com/divkakwani/labcheck' },
                            React.createElement('i', { className: 'ui large github icon' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'item' },
                        ' ',
                        React.createElement('i', { className: 'ui mail icon' }),
                        ' divkakwani@gmail.com '
                    ),
                    React.createElement(
                        'div',
                        { className: 'item' },
                        ' ',
                        React.createElement('i', { className: 'ui copyright icon' }),
                        ' Divyanshu Kakwani, 2016'
                    )
                )
            )
        );
    }
});
