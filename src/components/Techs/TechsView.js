import { useContext, useEffect } from 'react';
import { Techsdata, LoadingContext, TechsDeleteContext } from '../Techs/techs';
import Loader from '../layouts/Loader';

function TechsView() {

    const techs = useContext(Techsdata);
    const loading = useContext(LoadingContext);
    const TechDel = useContext(TechsDeleteContext);

    useEffect(() => {
        console.log(techs);
    })

    if (techs.length == 0) {
        return <h4>No data found!!!!</h4>
    }

    else {
        if (loading) {
            return <Loader></Loader>
        }
        else {

            return <div class="collection center" style={techsStyle}>
                {techs.map(element => {
                    return < a href="#!" class="collection-item" > {element.firstName + " " + element.lastName}
                        <i className="material-icons right" onClick={() => TechDel(element.id)}> delete </i></a>
                })}
            </div>
        }
    }
}
const techsStyle = {
    marginLeft: '20%',
    marginTop: '2%',
    width: '50%'
}
export default TechsView;