import { TodoItem } from './components/TodoItem';
import { data } from './data';

export class App extends React.Component {

    constructor(props) {
        super();
        this.state = {
            todos: data,
            todoComponents: data.map((item, index) => {
                return (
                    <TodoItem title={item.todo} isComplete={item.isComplete} key={item.id} index={index} parent={this}/>
                )
            }),
            allCompleted: false,
            firstName: "",
            lastName: "",
            submitted: false,
            isLoggedIn: false
        }

        this.toggleLoggedIn = this.toggleLoggedIn.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.updateCompletedState = this.updateCompletedState.bind(this);
    }

    toggleLoggedIn() {
        this.setState((prevState) => {
            return { isLoggedIn: !prevState.isLoggedIn }
        })
    }

    updateCompletedState(triggerElementState, triggerElementProps) {
        // Replace current todoComponents with new copied array, with new props in appropriate TodoItem
        this.setState((prevState) => {
            return {
                todoComponents: prevState.todoComponents.map((value, index) => {
                    return index === triggerElementProps.index ?
                        <TodoItem title={triggerElementProps.title} isComplete={triggerElementState.isChecked} key={triggerElementProps.index} index={triggerElementProps.index} parent={triggerElementProps.parent}/> :
                        value;
                })
            };
        }, () => {
            // Check if all items are complete
            this.state.allCompleted = this.state.todoComponents.reduce((prev, current) => {
                return prev ? current.props.isComplete : false;
            }, this.state.todoComponents[0].props.isComplete);
            this.forceUpdate();
        })
    }

    handleChange(event) {
        const { name, value } = event.target;
        console.log(value, name)

        this.setState({ [name]: value });
    }

    submit(event) {
        this.setState({ submitted: true });
        event.preventDefault();
    }

    render() {
        let loginMessage = <h1>{ this.state.isLoggedIn ? 'Logged In' : 'Logged Out' }</h1>

        return (
            <div>
                { loginMessage }
                { ( this.state.isLoggedIn ?
                    this.state.todoComponents
                    // <form>
                    //     <label htmlFor="">First Name:</label>
                    //     <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                    //     <label htmlFor="">Last Name:</label>
                    //     <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                    //
                    //     <button onClick={this.submit}></button>
                    //     { this.state.submitted && <h1>{"Welcome, " + this.state.firstName + " " + this.state.lastName}</h1> }
                    //
                    // </form>
                    : <button className='button' onClick={this.toggleLoggedIn}>Log In</button> ) }
                {  this.state.allCompleted ? <h3>Congrats! You finished all the items.</h3> : <h3>Get to work, you lazy bum!</h3> }
            </div>
        )
    }
}