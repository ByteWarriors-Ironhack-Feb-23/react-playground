function User(props){

    console.log(props);

    // props.userName = "Luis"; //props are immutable!

    return(
        <>
            <h1>Name: {props.userName}</h1>
            <h2>Age: {props.age}</h2>
        </>
    )
}

export default User;