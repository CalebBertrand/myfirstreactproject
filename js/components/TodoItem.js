import { Conditional } from "../utils/Conditional";

export class TodoItem extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isChecked: props.isComplete,
            isLoading: true
        }
        this.updateCheckedState = this.updateCheckedState.bind(this);
        this.fakeAPI = this.fakeAPI.bind(this);
    }


    componentDidMount() {
        console.log('mounted')
        this.fakeAPI()
    }

    updateCheckedState() {
        this.setState((prevState) => {
            let newCheckedState = !prevState.isChecked;
            return { isChecked: newCheckedState}
        }, () => {
            this.props.parent.updateCompletedState(this.state, this.props)
        });
    }

    fakeAPI() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 1000)
    }

    render() {
        return (
            <Conditional isLoading={ this.state.isLoading } jsxContent={
                <div className="todo-item">
                    <input type="checkbox" onChange={ this.updateCheckedState } defaultChecked={ this.props.isComplete } />
                    <p style={ this.props.isComplete ? { textDecoration: 'line-through' } : null }>{this.props.title}</p>
                </div>
            } />
        )
    }
}