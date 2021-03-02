import React , {useState,useEffect} from "react"

function HooksCounter (props){

	const initialValue = 0
	const [count , setCount]= useState(initialValue)
	useEffect(()=>{
		/*setTimeout(()=>{
			props.history.goBack()
		})*/
		
	},[]
	)
	const [test , setTest]=useState(0)

	const increment5 = () =>{
		for (let i=0; i<5; i++){
			setCount(prevCount => prevCount +1)
		}
	}
	const Decrement = (prevCount) =>{
	
			setCount(prevCount => prevCount -1)
		
		
	}

	return(

		<div>
			<h2 className="col-lg-12 text-center">functional component showing Counter</h2>
			<h1 className="col-lg-12 text-center">Count = {count}</h1>
			<div className="col-lg-12 text-center">
				<button className="btn-primary" onClick = {() => setCount(initialValue)}>Reset</button>
				<button className="btn-success" onClick = {() => setCount(prevCount => prevCount + 1)}>Increment</button>
				<button className="btn-danger" onClick = {Decrement}>Decrement</button>
				<button className="btn-warning" onClick = {increment5}>Increment 5</button>
				<button className="" onClick={(e)=> props.history.push("/")}>Go to page1</button>
				<div style={{height:"100px",width:"250px",backgroundColor: count<0 ? "red" : "green"}}></div>
			</div>

		</div>

		)
}
export default HooksCounter


