const Footer = ()=>{
    let year = new Date().getFullYear()
    
    return (
        <footer>
            <div className="footer">
                    &copy;{ year } Emant Production.
            </div>
    </footer>
    )
}

export default Footer