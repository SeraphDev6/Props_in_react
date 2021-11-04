import React from 'react';

// class PersonCard extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             age:this.props.age
//         };
//     }
//     happyBirthday = () => {
//         this.setState({age:(this.state.age+1)});
//     }
//     render(){
//         const {firstName,lastName,hairColor}=this.props;
//         return(
//             <div>
//             <h2>{lastName}, {firstName}</h2>
//             <p>Age : {this.state.age}</p>
//             <p>Hair Color : {hairColor}</p>
//             <button onClick={this.happyBirthday}>Happy Birthday {firstName} {lastName}!!</button>
//             </div>
//         )
//     }
// }

const PersonCard = props => {
    return(
    <div>
    <h2>{props.lastName}, {props.firstName}</h2>
    <p>Age : {props.age}</p>
    <p>Hair Color : {props.hairColor}</p>
    </div>
    )
}

export default PersonCard