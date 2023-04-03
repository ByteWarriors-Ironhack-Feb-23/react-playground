function Footer(props){

    console.log(props);

    return(
        <>
        <h1>this is the Footer</h1>
        {props.children}
        </>
    )
}

export default Footer;