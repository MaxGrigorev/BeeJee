import React from "react";
import Dog from './Dog';
import ReactPaginate from 'react-paginate';


export default class DogsList extends React.Component {
    constructor(props) {
        super(props);

        this.countPerPage=3;

        this.state = {
            data: [],
            offset: 0,
            
        }
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.countPerPage);

        this.setState({offset: offset},);
    };

    render() {
        console.log('!!! DogsList', this.props.dogs);


        if(!this.props.dogs){
			console.log('!!! If');
            return null;
        }

		//console.log('!!! afterIf', Object.keys(this.props.dogs.message));


		//let mass=Object.keys(this.props.dogs.message)

        let dogs = this.props.dogs.map((task, index) => {
			//console.log('!!! let',this.props.imgs[dog]);
            //return <Dogs key={index} title={dog} img={this.props.imgs[index]}/>;
			return <Dog key={index} task={task} />;
        })

		//img={this.props.imgs[index]}

        return <div>
            
            <h1>Задачи</h1>
            {dogs.slice(this.state.offset, this.state.offset+this.countPerPage)}
            <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={Math.ceil(dogs.length/this.countPerPage)}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={3}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
        </div>;
    }
}
