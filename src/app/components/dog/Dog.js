import React from 'react';
import {Link} from 'react-router';

export default class Dog extends React.Component {
    render() {
        let {task}=this.props;
        return (
            <div className="panel panel-default col-sm-4">
                <div className="panel-heading">
					<Link to={`/dogs/${task.id}`}><h3 className="panel-title">{task.username}</h3></Link>
                </div>
                <div className="panel-body">
                    <p>Текст: {task.text}</p>
                    <p>email: {task.email}</p>
					<img className="img-dog" src={task.image_path} alt=""/>
                </div>
            </div>
        );
    }
}
