import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Create from '../components/Create';
import Edit from '../components/Edit';
import Delete from '../components/Delete';
import './App.css';

const App = () =>{
	const [robots, setRobots] = useState([]);
  	const [searchfield, setSearchfield] = useState('');
  	

  	useEffect(() => {
	    fetch('https://jsonplaceholder.typicode.com/users')
	      .then(response => response.json())
	      .then(users => setRobots(users));
    }, []);

  	
    const onSearchChange = (event) => {
    	setSearchfield(event.target.value);
  	};

  	const addRobot = (newRobot) => {
    	setRobots([...robots, newRobot]);
  	};

  	const updateRobot = (newRobot) => {
  		const newRobots = robots.map((robot) => {
	      if (robot.id === newRobot.id) {
	        const updatedRobot = {
	          ...newRobot
	        };

	        return updatedRobot;
	      }

	      return robot;
	    });
  		console.log("updated robots");
	    setRobots(newRobots);
  	}

  	const deleteRobot = (robotId) => {
  		const newRobots = robots.filter((robot) => robot.id !== parseInt(robotId) );
  		console.log(newRobots);
    	setRobots(newRobots);
  	};

	const filteredRobots = robots.filter(robot =>
		robot.name.toLowerCase().includes(searchfield.toLowerCase())
	);

	return (
	<Router>
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />

      <div className="tc mt3 pa2">
      	<Link to="/">
      		<button type="button" class="white b mh4 pa3 ph3 bg-blue hover-bg-silver bt-0 br-0 bl-0 bb bw2 b--mid-gray br2" href="#0">Home [^]</button>
      	</Link>	
        <Link to="/create">
      		<button type="button" class="white b mh4 pa3 ph3 bg-blue hover-bg-silver bt-0 br-0 bl-0 bb bw2 b--mid-gray br2" href="#0">Create New!</button>
      	</Link>	
      	<Link to="/delete">
      		<button type="button" class="white b mh4 pa3 ph3 bg-blue hover-bg-silver bt-0 br-0 bl-0 bb bw2 b--mid-gray br2" href="#0">Delete!</button>
      	</Link>
      </div>
      <Scroll>
        <ErrorBoundary>
        <Routes>
        	<Route path="/" exact element={<CardList robots={filteredRobots} />} ></Route>
        	<Route path="/create" exact element={<Create addRobot={addRobot} />} ></Route>
        	<Route path="/edit/:id" exact element={<Edit robots={robots} updateRobot={updateRobot}/>} />
        	<Route path="/delete" exact element={<Delete deleteRobot={deleteRobot} />} ></Route>
        </Routes>
        </ErrorBoundary>
      </Scroll>
    </div>
    </Router>
  );


};

export default App;