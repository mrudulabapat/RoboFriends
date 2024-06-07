import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../containers/App.css';


 const Edit = ({ robots, updateRobot }) => {
 	const { id } = useParams();
	const [robot, setRobot] = useState({ id: '', name: '', email: '' });

	useEffect(() => {
	    const foundRobot = robots.find(r => r.id.toString() === id);
	    if (foundRobot) {
	      setRobot(foundRobot);
	    }
	  }, [id, robots]);

	const handleChange = (event) => {
	    const { name, value } = event.target;
	    console.log("in handle change");
	    setRobot(prevRobot => ({
	      ...prevRobot,
	      [name]: value
		  }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	    fetch('https://jsonplaceholder.typicode.com/users/${id}', {
		  method: 'PATCH',
		  body: JSON.stringify(robot),
		  headers: {
		    'Content-type': 'application/json; charset=UTF-8',
		  },
		})
		  .then((response) => response.json())
		  .then((json) => {
		  	console.log(json);
		  	updateRobot(json);
		  });
	  
	  };

	return (
		<div className='tc'>
			<form class="measure center" onSubmit={handleSubmit}>
			  	<legend class="f2 fw7 ma3">Edit Robot</legend>
		      
				<div class="mt3">
				<label class="fl f3 fw6 lh-title" htmlFor="robot-id">Enter robot id:</label>
		        <input class="pa2 input-reset ba bg-white w-100" type="text" name="id" id="robot-id" value = {robot.id} readOnly/>

				<label class="fl f3 fw6 lh-title" htmlFor="robot-name">Enter name:</label>
		        <input class="pa2 input-reset ba bg-white w-100" type="text" name="name" id="robot-name" value = {robot.name} onChange={handleChange}/>

		        <label class="fl f3 fw6 lh-title" htmlFor="robot-email">Enter email:</label>
		        <input class="pa2 input-reset ba bg-white w-100" type="email" name="email" id="robot-email" value = {robot.email} onChange={handleChange}/>
		      
		        </div>
	      		<button type="submit" class="white b ma4 pa3 bg-blue hover-bg-silver bt-0 br-0 bl-0 bb bw2 b--mid-gray br2">Save</button>
		    </form>
		
		</div>
	);
}

export default Edit;
