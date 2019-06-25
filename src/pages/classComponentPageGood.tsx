import React from 'react'
import { InputComponent } from '../components/inputComponent';

interface IState {
    value: string,
    value2: string
}

class ComponentPage extends React.Component<any, IState> {
    
    constructor (props: any) {
        super(props)
        this.state = {
            value: '',
            value2: ''
        }
    }

    onFake1Change = (val: string) => {
        this.setState({ value: val })
    }

    onFake2Change = (val: string) => {
        this.setState({ value2: val })
    }

    render() {
        return (
            <div>
                <InputComponent title='Good1' value={this.state.value || ''} onChange={this.onFake1Change} />
                <InputComponent title='Good2' value={this.state.value2 || ''} onChange={this.onFake2Change} />
            </div>
        )
    }
}

export {
    ComponentPage
}
