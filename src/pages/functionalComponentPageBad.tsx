import React, { useState, useCallback } from 'react'
import { InputComponent } from '../components/inputComponent';

function ComponentPage () {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    return (
        <div>
            <InputComponent title='Bad1' value={value1} onChange={val => setValue2(val)} />
            <InputComponent title='Bad2' value={value2} onChange={val => setValue1(val)} />
        </div>
    )
}

export {
    ComponentPage
}
