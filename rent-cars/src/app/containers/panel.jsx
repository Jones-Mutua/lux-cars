// import React from 'react';
// import Dashboard from '../admin/pages/Dashboard';




// const Panel = () => {
//     return (
//         <>
//             <Dashboard />
//         </>
//     )
// }

// export default Panel





import React, {useEffect, useState} from 'react';
import getCurrentUser from '../../lib/auth';
import Dashboard from '../admin/pages/Dashboard';
import { Redirect } from 'react-router-dom';




const Panel = () => {

    const [isAdmin, setIsAdmin] = useState(null);
    const [redirect, setRedirect  ] = useState('');

    useEffect(() => {
        const user = getCurrentUser();
        if (user && user.role === 'admin') {
            setIsAdmin(user);
        } else if(user){
            setIsAdmin(null);
        } else {
            setRedirect("/login");
        }

    }, []);
    
    const admin_component = (
        <>
            <Dashboard />
        </>
    );
    const $403_component = (
        <>
        <h1>403 not found</h1>
        </>
    );
    return isAdmin ? admin_component :
    redirect? <Redirect to={redirect} />:
    $403_component;
}

export default Panel
