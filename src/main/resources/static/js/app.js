'use strict';

const ERROR = 'ERROR';

const error = (message) => ({
    type: ERROR,
    message
});

const store = Redux.createStore((state, action) => {
    switch(action.type) {
        case ERROR:
            toastr.error(action.message);
            return state;
        default:
            return state;
    }
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            texts: [
                {
                    title: 'Test title',
                    author: 'Test Author',
                    text: 'The last example showed how Spring Boot makes it easy to wire beans you may not be aware that you need. And it showed how to turn on convenient management services.'
                },
                {
                    title: 'Test title',
                    author: 'Test Author',
                    text: 'The last example showed how Spring Boot makes it easy to wire beans you may not be aware that you need. And it showed how to turn on convenient management services.'
                }
            ]
        };
        // store.dispatch(getTexts());
    }
/*
    componentWillMount() {
        store.subscribe(() => {
            var state = store.getState();
            this.setState({texts: state.texts});
        });
    }
*/
    render() {
        return (
            <div className="card-deck">
                {this.state.texts.map(t => (
                    <div className="card mt-1">
                        <div className="card-block">
                            <h4 className="card-title">{t.title}</h4>
                            <h6 className="card-subtitle mb-2 text-muted">{t.author}</h6>
                            <p className="card-text">{t.text}</p>
                            <button className="btn btn-success"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></button>
                            <button className="btn btn-danger ml-1"><i className="fa fa-thumbs-o-down" aria-hidden="true"></i></button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <img className="mx-auto d-block" src="/img/fratcher-logo.png"/>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <span className="text-primary">Fratche</span><span className="text-danger">r</span>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    <i className="fa fa-home" aria-hidden="true"></i>
                                    <span className="ml-1">Home</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                    <span className="ml-1">Login</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

ReactDOM.render(
    <Navbar/>,
    document.getElementById('root')
);
