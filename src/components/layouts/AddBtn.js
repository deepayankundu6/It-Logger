
function AddBtn() {

    return (
        <div className="fixed-action-btn" >
            <a className="btn-floating btn-large blue darken-2">
                <i className="material-icons large">add</i>
            </a>
            <ul>
                <li>
                    <a hreff="#add-log-modal" className="btn-floating green modal-trigger">
                        <i className="material-icons">add_to_queue</i>
                    </a>
                </li>
                <a hreff="#add-tech-modal" className="btn-floating red modal-trigger">
                    <i className="material-icons">person_add</i>
                </a>
                <li>

                </li>
            </ul>
        </div>
    )
}

export default AddBtn;