
function Loader() {


    const loaderStyle = {
        width: "50%",
        marginLeft: '20%',
        marginTop: '18%'

    }

    return (
        <div className="progress center" style={loaderStyle}>
            <div className="indeterminate"></div>
        </div>
    )
}

export default Loader;