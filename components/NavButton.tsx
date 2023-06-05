import React from 'react'

// defining prop in typescript

interface Props {
    title: string;
    isActive?: boolean;
    onClick?: () => void;
}

function NavButton({ title, isActive, onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className={`${isActive && "bg-[#110416]"} hover:bg-[#110416] text-white py-2 px-4 rounded font-bold`}>     
            {title}
        </button>
    )
}

export default NavButton;