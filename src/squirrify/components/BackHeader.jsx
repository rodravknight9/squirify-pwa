import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

export const BackHeader = ({ title }) => {

    const navigate = useNavigate();

    return (
        <div className='nav-header back'>
            <div className="content-back">
                <IoMdArrowRoundBack className='icon' size={30} onClick={() => navigate(-1)}/>
                <h2>{title}</h2>
            </div>
        </div>
    )
}
