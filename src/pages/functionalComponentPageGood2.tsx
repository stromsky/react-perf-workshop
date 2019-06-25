import React, { useState, useCallback } from 'react'
import { InputComponent } from '../components/inputComponent';

function ComponentPage () {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    return (
        <div>
            <InputComponent title='Good1' value={value1} onChange={setValue1} />
            <InputComponent title='Good2' value={value2} onChange={setValue2} />
        </div>
    )
}

export {
    ComponentPage
}
