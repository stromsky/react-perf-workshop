import React, { useRef } from 'react';

interface IProps {
    title: string,
    value: string,
    onChange: (value: string) => void
}

export const InputComponent = React.memo(function InputComponent ({ title, value, onChange }: IProps) {
    const ref = useRef(0)
    ref.current++;

    function onValueChange (e: any) {
        onChange(e.target.value || '')
    }

    return (
        <span className='input-component'>
            <label>{title}<br />(rendered: {ref.current})</label>
            <br />
            <input value={value || ''} onChange={onValueChange} />
        </span>
    )
})
