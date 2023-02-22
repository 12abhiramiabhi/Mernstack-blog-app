import React from 'react'

function CmntCard({ blogCmntss }) {
    return (
        <div>
            <div className="viewcmnt">
                <div className="cmnt_read">
                    <h3 className='user-name'>{blogCmntss.userName}</h3>
                    <p className='cmnt-para' >{blogCmntss.comntText}</p>
                    <button className='view-cmnt' >{blogCmntss.date}</button>
                </div>
            </div>
        </div>
    )
}

export default CmntCard