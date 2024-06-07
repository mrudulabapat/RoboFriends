// Filename - Components/Navbar

import React from "react";

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-light bg-light">
				<div class="tc mt3 pa2">
      <button type="button" class="white b mh4 pa3 ph3 bg-blue hover-bg-silver bt-0 br-0 bl-0 bb bw2 b--mid-gray br2" href="#0">Create New!</button>
      <button type="button" class="white b mh4 pa3 ph3 bg-blue hover-bg-silver bt-0 br-0 bl-0 bb bw2 b--mid-gray br2" href="#0">Update!</button>
      <button type="button" class="white b mh4 pa3 ph3 bg-blue hover-bg-silver bt-0 br-0 bl-0 bb bw2 b--mid-gray br2" href="#0">Delete!</button>
      </div>
			</nav>
		</div>
	);
}

export default Navbar;
