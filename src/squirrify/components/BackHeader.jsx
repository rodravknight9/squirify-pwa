import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { TiArrowLeftThick } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom';

export const BackHeader = () => {

    const navigate = useNavigate();

    return (
        <div className='nav-header back'>
            <div className="content-back">
                <IoMdArrowRoundBack className='icon' size={30} onClick={() => navigate(-1)}/>
                <h2>Title here</h2>
            </div>
        </div>
    )
}
