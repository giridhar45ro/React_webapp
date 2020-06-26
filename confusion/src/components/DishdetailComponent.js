import React from "react";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";

    const RenderDish = ({dish}) => {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
}

 const RenderComments = ( {comments} ) => {
    if (comments != null)
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map(comment => {
                        return (
                            <div key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>
                                    {`-- ${comment.author}, ${new Intl.DateTimeFormat("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "2-digit"
                                    }).format(new Date(Date.parse(comment.date)))}`}
                                </p>
                            </div>
                        );
                    })}
                </ul>
            </div>
        );
    else return <div />;
}

const DishDetail = (props) => {
    if(props.dish != null)
    return (
        <div className="container">
            <div className="row">
            <div className="col-12 col-md-5 m-1">
            <RenderDish dish = {props.dish} /></div>
            <RenderComments comments={props.dish.comments} />
            </div>
        </div>
    );
    else 
    return <div></div>
}
export default DishDetail;
