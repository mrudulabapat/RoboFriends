import React, { useState } from "react";
import '../containers/App.css';

const Create = ({ addRobot }) => {
 	const [id, setId] = useState('');
 	const [name, setName] = useState('');
  	const [email, setEmail] = useState('');
  	const [newRobot, setNewRobot] = useState(null);

  	const handleSubmit = (event) => {
	    event.preventDefault();
	    const newRobotData = { id, name, email };
	    console.log(newRobotData);
	    
	    fetch('https://jsonplaceholder.typicode.com/posts', {
		  method: 'POST',
		  body: JSON.stringify(newRobotData),
		  headers: {
		    'Content-type': 'application/json; charset=UTF-8',
		  },
		})
		  .then((response) => response.json())
		  .then((json) => {
		  	console.log(json);
		  	setNewRobot(json);
		  	addRobot(json);
		})
		   .catch(error => {
        	console.error('Error:', error);
      	});
	  };

	return (
		<div className='tc'>
			<form class="measure center" onSubmit={handleSubmit}>
			  	<legend class="f2 fw7 ma3">Create Robot</legend>
		      
				<div class="mt3">
				<label class="fl f3 fw6 lh-title" htmlFor="robot-id">Enter robot id:</label>
		        <input class="pa2 input-reset ba w-100" type="number" name="robot-id" id="robot-id"  value={id} onChange={(e) => setId(e.target.value)}/>

				<label class="fl f3 fw6 lh-title" htmlFor="robot-name">Enter robot name:</label>
		        <input class="pa2 input-reset ba w-100" type="text" name="robot-name" id="robot-name"  value={name} onChange={(e) => setName(e.target.value)}/>
		      
		        <label class="fl f3 fw6 lh-title" htmlFor="email-address">Email</label>
		        <input class="pa2 input-reset ba w-100" type="email" name="email-address"  id="email-address" value={email} onChange={(e) => setEmail(e.target.value)}/>
		        </div>
	      		<button type="submit" class="white b ma4 pa3 bg-blue hover-bg-silver bt-0 br-0 bl-0 bb bw2 b--mid-gray br2">Submit</button>
		    </form>

		    {/* Conditionally render the new robot information */}
		      {newRobot && (
		        <div className="mt4">
		          <h2>New Robot Created</h2>
		          <p>ID: {newRobot.id}</p>
		          <p>Name: {newRobot.name}</p>
		          <p>Email: {newRobot.email}</p>
		        </div>
		      )}
		    
		
		</div>
	);
}

export default Create;
