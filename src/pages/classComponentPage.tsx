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



    render() {
        return (
            <div>
                <InputComponent title='Fake' value={this.state.value || ''} onChange={val => this.setState({ value: val })} />
                <InputComponent title='Fake2' value={this.state.value2 || ''} onChange={val => this.setState({ value2: val })} />
            </div>
        )
    }
}

export {
    ComponentPage
}
