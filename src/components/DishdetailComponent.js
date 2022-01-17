import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component {

    // constructor(props) {
    //     super(props);

    // }

    renderDish(dish) {
        if (dish != null)
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle><strong>{dish.name}</strong></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    RenderComments(dish) {
        if (dish!=null){
            const com = dish.comments.map(cos=>{
                    return(
                    <div >
                    <li>{cos.comment}</li><br />
                    <li>-- {cos.author}, {cos.date}</li><br />
                    </div>)});
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">                
                        {com}
                    </ul>
                </div> 
                )
        }
        else{
            return(<div></div>)
        }
    }


    render() {
        return (
            <div className='row'>  
                {this.renderDish(this.props.selectedDish)}    
                <div className="col-12 col-md-5 m-1" >                    
                    {this.RenderComments(this.props.selectedDish)}                
                </div>                  
            </div>
        );
    }
}
 

export default DishDetail;