const Country = ({name, deaths}) =>{

    return(
        <div className="country">
            <h1>{name}</h1>
            <h1>{deaths}</h1>
        </div>
    )
}

export default Country;