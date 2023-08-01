import React from 'react'

const ProfilePhoto = ({image}) => {
    return (
        <>
            <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src={image}
                alt=""
            />
        </>
    )
}

export default ProfilePhoto
