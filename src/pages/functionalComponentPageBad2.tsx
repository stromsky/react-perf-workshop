import React, { useState, useCallback } from 'react'
import { InputComponent } from '../components/inputComponent';

function ComponentPage () {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    function onValue1Change (val: string) {
        setValue1(val)
    }

    function onValue2Change (val: string) {
        setValue2(val)
    }

    return (
        <div>
            <InputComponent title='Bad1' value={value1} onChange={onValue1Change} />
            <InputComponent title='Bad2' value={value2} onChange={onValue2Change} />
        </div>
    )
}

export {
    ComponentPage
}
