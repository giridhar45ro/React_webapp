import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
class DishDetail extends Component {
    changeDateFormat(date) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const elements = date.split("-");
        return `${months[parseInt(elements[1]) - 1]} ${elements[2]}, ${elements[0]}`;
    }
    renderDish(dish) {
        if (dish !== null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return <div></div>;
        }
    }
    renderComment(comments) {
        if (comments !== null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <div>
                                    <li>{comment.comment}</li>
                                    <li>{`-- ${comment.author} , ${this.changeDateFormat(  comment.date.split("T")[0] )}`}</li>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            );
        } else {
            return <div></div>;
        }
    }

    render() {
        const { dish } = this.props;
        const { comments } = dish;

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">{this.renderDish(dish)}</div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComment(comments)}
                </div>
            </div>
        );
    }
}

export default DishDetail;
