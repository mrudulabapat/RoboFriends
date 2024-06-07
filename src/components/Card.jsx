import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Edit from '../components/Edit';
import 'tachyons';

const Card = (props) => {

	const navigate = useNavigate();
	
	const toggleSelected = (event) => {
		
		navigate(`/edit/${props.id}`);

	};

	return(
		
		<div className='tc bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
		<img src = {`https://robohash.org/${props.id}?200x200'`} alt='robot'/>
		 	<div>
		 		<h4>Robot Id: {props.id}</h4>
		 		<h2>{props.name}</h2>
		 		<p>{props.email}</p>
		 		<button type="button" onClick={toggleSelected} class="white b mh4 pa3 ph3 bg-blue hover-bg-silver bt-0 br-0 bl-0 bb bw2 b--mid-gray br2" href="#0">Edit</button>
		      	
		 	</div>
		</div>
		
	

	);
}

export default Card;

