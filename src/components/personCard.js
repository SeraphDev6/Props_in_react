import React, {useState} from 'react';

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
    const [state,setState]=useState({
        age:props.age
    })
    const happyBirthday = ()=>{
        setState({
            age:state.age+1
        });
    }
    return(
    <div>
    <h2>{props.lastName}, {props.firstName}</h2>
    <p>Age : {state.age}</p>
    <p>Hair Color : {props.hairColor}</p>
    <button onClick={happyBirthday}>Happy Birthday {props.firstName} {props.lastName}!!</button>
    </div>
    )
}

export default PersonCard