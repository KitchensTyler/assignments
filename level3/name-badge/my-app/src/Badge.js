import react from 'react'

export default function Badge(props){
    return(
        <>
        <div className='container'>
            <header className='header'>BADGE:</header>
            <p>Name: {props.firstName} {props.lastName}</p>
            <p>Email: {props.email}</p>
            <p>Place of Birth: {props.birth}</p>
            <p>Phone Number: {props.phone}</p>
            <p>Fav Food: {props.favFood}</p>
            <span className='box'> {props.comment} </span>
        </div>
        </>
    )
}