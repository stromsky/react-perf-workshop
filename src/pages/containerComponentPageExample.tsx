import React, { useState, useCallback } from 'react'
import { InputComponent } from '../components/inputComponent';
import { ContainerComponent } from '../components/containerComponent';

function ComponentPage () {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    const onValue2Change = useCallback(val => setValue2(val), [])
    const onValue1Change = useCallback((val: string) => setValue1(val), [])

    return (
        <div>
            <ContainerComponent title='Good1' value={value1} onChange={onValue1Change}>
                <InputComponent title='Connected component' value={value2} onChange={onValue2Change} />
            </ContainerComponent>
        </div>
    )
}

export {
    ComponentPage
}
