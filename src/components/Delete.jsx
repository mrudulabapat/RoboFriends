import React, { useState } from "react";
import '../containers/App.css';



 const Delete = ({ deleteRobot }) => {

 	const [id, setId] = useState('');
 	const [robotDel, setRobotDel] = useState(false);

 	const handleSubmit = (event) => {
 		event.preventDefault();
	    const deleteData = { id };
	    console.log(deleteData);

	    fetch('https://jsonplaceholder.typicode.com/users/${id}', {
		  method: 'DELETE',
		})
		.then((response) => {
	        if (response.status === 200) {
	          deleteRobot(id);
	          setRobotDel(true);
	        } else {
	          console.error('Error deleting robot');
	        }
	      })
	      .catch(error => {
	        console.error('Error:', error);
      });
 	}

	return (
		<div className='tc'>
			<form class="measure center" onSubmit={handleSubmit}>
			  	<legend class="f2 fw7 ma3">Delete Robot: </legend>
		      
				<div class="mt3">
				<label class="fl f3 fw6 lh-title" htmlFor="robot-id">Enter robot id:</label>
		        <input class="pa2 input-reset ba w-100" type="text" name="robot-id" id="robot-id" value={id} onChange={(e) => setId(e.target.value)}/>
		      
		        </div>
	      		<button type="submit" class="white b ma4 pa3 bg-blue hover-bg-silver bt-0 br-0 bl-0 bb bw2 b--mid-gray br2">Delete</button>
		
		    </form>

		    {/* Conditionally render the new robot information */}
		      {robotDel && (
		        <div className="mt4">
		          <h2>Robot Deleted!</h2>
		        </div>
		      )}

		</div>
	);
}

export default Delete;
