import React from "react";
import './Confirm.css';

const Confirm = ({ userData }) => {
    return(
        <article className="view animate__animated animate__fadeIn">
            <div className='viewtitle'>
                <h1>View Details</h1>
            </div>
            <div className='outputitem'>
                <p className='outputlabel'>Name :</p>
                <p className='outputvalue'>{`${userData.name}`}</p>
            </div>
            <div className='outputitem'>
                <p className='outputlabel'>Email :</p>
                <p className='outputvalue'>{`${userData.email}`}</p>
            </div>
            <div className='outputitem'>
                <p className='outputlabel'>Contact No :</p>      
                <p className='outputvalue'>{`${userData.contact}`}</p>          
            </div>
            <div className='outputitem'>
                <p className='outputlabel'>Date of Birth :</p>  
                <p className='outputvalue'>{`${userData.dob}`}</p>              
            </div>
        </article>
    )
}

export default Confirm;