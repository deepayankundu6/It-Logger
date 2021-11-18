import { useState } from 'react';


function AddTechs({ techs }) {

    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');

    const Submit = () => {
        console.log("Name Submitted: ", fName + " " + lName)

    }

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">

                <div class="row">
                    <div class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                First Name
                                <input type="text" value={fName} class="autocomplete" onChange={(e) => setfName(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                Last Name
                                <input type="text" value={lName} class="autocomplete" onChange={(e) => setlName(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <div className="modal-footer">
                <button className="btn waves-effect waves-light modal-close waves-effect waves-green" onClick={() => { Submit() }}>Submit
                    <i className="material-icons right">send</i>
                </button>
            </div>
        </div>
    )
}


export default AddTechs;