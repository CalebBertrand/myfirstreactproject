export class Conditional extends React.Component {
    constructor(props) { // Needs a prop named jsxContent, a renderable variable
        super();
    }
    render() {
        return this.props.isLoading ? <div className="loading"/> : this.props.jsxContent
    }
}