import react,{Component} from 'react';
import "./page1.css";


export default	class ClassCounter extends Component{

	constructor(props) {
		super(props);
		this.state = {
			count : 0 
		}

	}
	componentDidMount=() =>{
		console.log("component has been mounted")
	}
	componentWillMount=() =>{
		console.log("component will mounted")
	}
	componentWillUnmount=() =>{
		console.log("component will Unmount")
	}

	increment = () =>{
		
		this.setState({
			count : this.state.count + 1 
		})
	}
	
	decrement = () =>{
		
		this.setState({
			count : this.state.count - 1 
		})
	}
	reset = () =>{
		
		this.setState({
			count : 0
		})
	}
		render(){

			return(

				<div className="page1Wrap col-lg-12">
					<h1 className="col-lg-12 text-center">Class Component showing Counter</h1>
					<h2 className="col-lg-12 text-center">Count= {this.state.count}</h2>
					<div className="col-lg-12 text-center">
						<button className="btn-success" onClick={this.increment}>Increment</button>
						<button className="btn-danger" onClick={this.decrement}>Decrement</button>
						<button className="btn-warning" onClick={this.reset}>Reset</button>
					</div>
				</div>
			)

		}


}