import { useState, useEffect, createContext, forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';
import TechsView from './TechsView';

const Techsdata = createContext();
const LoadingContext = createContext();
const TechsDeleteContext = createContext();

const Techs = forwardRef((props, ref) => {

    const [TechsName, setTechName] = useState([]);
    const [loading, setLoading] = useState(false);

    const getTechs = async () => {
        let resp = await axios.get(`/techs`);
        setTechName(resp.data);
    }

    useImperativeHandle(ref, () => ({
        callgetTechs() {
            getTechs();
        }
    }))

    useEffect(() => {
        setLoading(true);
        getTechs();
        setLoading(false);
    }, []);

    const deleteTechs = async (id) => {
        setLoading(true);
        await axios.delete(`/techs/${id}`);
        getTechs();
        setLoading(false);
    }

    return (
        <TechsDeleteContext.Provider value={deleteTechs}>
            <LoadingContext.Provider value={loading}>
                <Techsdata.Provider value={TechsName}>
                    <TechsView />
                </Techsdata.Provider>
            </LoadingContext.Provider>
        </TechsDeleteContext.Provider>
    )
})

export default Techs;
export { Techsdata, LoadingContext, TechsDeleteContext };