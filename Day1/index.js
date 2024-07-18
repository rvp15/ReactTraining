

// const heading = 'Hello World!';
// const root = document.getElementById("root");
// root.textContent = heading

// Create a React element using React.createElement
// const element = React.createElement(
//     'h1',   // Type of the element
//     { id: 'title', style: { color: 'blue' } },   // Props object
//     'Hello, React!'   // Children (content)
// );

// nested element:
const element2 = react.React.createElement(
    'div',
    {id:'container'},
    React.createElement(
        'p',
        {id:'title',
            style:{color: "blue"}
        },'This is nested react',
        ),
        React.createElement(
            'ul',
            {id:'list-item'},
            React.createElement('li',null, 'item1'),
            React.createElement('li',null,'item2')
        )
)

//ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(element2, document.getElementById('root'));