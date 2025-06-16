import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({digito1, digito2, digito3, digito4, digito5, digito6}) => {
	return (
		<div className="bg-dark">
            
			<div className="container text-center d-flex justify-content-center mt-5 gap-3">

				<div className="card bg-secondary" style={{width: "10rem", color: "white"}}>
					<div className="card-body">
						<h5 className="card-title">{digito6}</h5>
					</div>
				</div>

				
				<div className="card bg-secondary" style={{width: "10rem", color: "white"}}>
					<div className="card-body">
						<h5 className="card-title">{digito5}</h5>
					</div>
				</div>


				<div className="card bg-secondary" style={{width: "10rem", color: "white"}}>
					<div className="card-body">
						<h5 className="card-title">{digito4}</h5>
					</div>
				</div>


				<div className="card bg-secondary" style={{width: "10rem", color: "white"}}>
					<div className="card-body">
						<h5 className="card-title">{digito3}</h5>
					</div>
				</div>

				<div className="card bg-secondary" style={{width: "10rem", color: "white"}}>
					<div className="card-body">
						<h5 className="card-title">{digito2}</h5>
					</div>
				</div>


				<div className="card bg-secondary" style={{width: "10rem", color: "white"}}>
					<div className="card-body">
						<h5 className="card-title">{digito1}</h5>
					</div>
				</div>

			</div>
			
		</div>
	);
};

export default Home;