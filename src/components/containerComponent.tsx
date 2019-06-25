import React, { useRef } from 'react';

interface IProps {
    title: string,
    value: string,
    onChange: (value: string) => void,
    children: JSX.Element
}

export const ContainerComponent = React.memo(function ContainerComponent ({ title, value, onChange, children }: IProps) {
    const ref = useRef(0)
    ref.current++;

    function onValueChange (e: any) {
        onChange(e.target.value || '')
    }

    return (
        <span className='input-component'>
            <label>{title}<br/>(rendered: {ref.current})</label>
            <input value={value || ''} onChange={onValueChange} />
            <span>
                {children}
            </span>
        </span>
    )
})
