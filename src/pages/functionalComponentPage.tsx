import React, { useState, useCallback } from 'react'
import { InputComponent } from '../components/inputComponent';

interface IState {
    value: string,
    value2: string
}

interface IProps {
    mode?: number
}

function ComponentPage ({ mode } : IProps) {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    const onValue2Change = useCallback(val => setValue2(val), [])
    const onValue1Change = useCallback((val: string) => setValue1(val), [])

    if (mode === 1) {
        return (
            <div>
                <InputComponent title='Good1asdf' value={value1} onChange={onValue1Change} />
                <InputComponent title='Bad2' value={value2} onChange={onValue2Change} />
            </div>
        )
    }

    return (
        <div>
            <InputComponent title='Good1' value={value1} onChange={onValue1Change} />
            <InputComponent title='Bad2' value={value2} onChange={onValue2Change} />
        </div>
    )
}

export {
    ComponentPage
}
