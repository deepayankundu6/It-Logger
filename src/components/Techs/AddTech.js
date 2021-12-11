import axios from 'axios';
import { useState } from 'react';


function AddTechs(props) {

    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');

    const Submit = () => {
        let payload = {
            "firstName": fName,
            "lastName": lName
        }

        if (lName != '' & fName != '') {
            axios.post("/techs", payload).then((data) => {
                console.log(data);
                if (data.data.id) {
                    console.log("Data saved with id: ", data.id);
                    setfName('');
                    setlName('');
                }
                else {
                    console.error("Failed to save data");
                }
                props.refresh();
            });
        }
    }

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">

                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                First Name
                                <input type="text" value={fName} className="autocomplete" onChange={(e) => setfName(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                Last Name
                                <input type="text" value={lName} className="autocomplete" onChange={(e) => setlName(e.target.value)} />
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