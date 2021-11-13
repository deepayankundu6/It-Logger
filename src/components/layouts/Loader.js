
function Loader() {


    const loaderStyle = {
        width: "50%",
        marginLeft: '20%',
        marginTop: '18%'

    }

    return (
        <div class="progress center" style={loaderStyle}>
            <div class="indeterminate"></div>
        </div>
    )
}

export default Loader;