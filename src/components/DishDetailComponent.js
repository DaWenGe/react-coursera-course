import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
	return (
		<div className="col-12 col-md-5 m-1">
			<Card>
				<CardImg width="100%" src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
}

function RenderComments({ comments }) {
	const data = comments.map(cmt => {
		return (
			<ul key={cmt.id} className="list-unstyled">
				<li>{cmt.comment}</li>
				<li>
					---{cmt.author},
					{new Intl.DateTimeFormat("en-US", {
						year: "numeric",
						month: "short",
						day: "2-digit"
					}).format(new Date(Date.parse(cmt.date)))}
				</li>
			</ul>
		);
	});
	return (
		<div className="col-12 col-md-5 m-1">
			<h4>Comments</h4>
			{data}
		</div>
	);
}

const DishDetail = props => {
	if (props.dish) {
		return (
			<div className="container">
				<div className="row text-left">
					<RenderDish dish={props.dish} />
					<RenderComments comments={props.dish.comments} />
				</div>
			</div>
		);
	} else {
		return <div />;
	}
};

export default DishDetail;
