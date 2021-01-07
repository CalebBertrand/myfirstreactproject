export function ProfileCard( { name, age, favIceCreamFlavor } ) {
    return (
        <div className="prof-card">
            <h1>{name}</h1>
            <img src={require('../../imgs/profile.jpg')} alt='Image of Caleb Bertrand' width='20%'/>
            <h3>Age: {age}</h3>
            <p>Favorite Ice Cream Flavor: {favIceCreamFlavor}</p>
        </div>
    )
}
