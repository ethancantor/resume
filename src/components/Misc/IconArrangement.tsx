import React, { ReactNode } from 'react'

interface Props {
    children?: ReactNode[];
}

export const IconArrangement = ({children}: Props) => {
    return (
        <div className=' grid grid-cols-6 justify-center items-center text-center '>
            {children && children.map((child, index) => {
                let colspan = 'col-span-2';
                if((index + 1) % 5 === 0) colspan = 'col-span-3 me-auto';
                else if((index + 1) % 5 === 4) colspan = 'col-span-3 ms-auto';
                return (
                    <div className={`${colspan} flex flex-row justify-center -mt-1 -mb-1 `} key={index}>{child}</div>
                )
            })}
        </div>
    )
};

