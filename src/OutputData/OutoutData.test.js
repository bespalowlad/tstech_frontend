import OutputData from './OutputData'

const Component = () => {
    return <p>Component</p>
}

describe('OutputData component', () => {
    it ('Init render', () => {
        const Component = shallow(<Component />)
        expect(Component.find('p')).toHaveLength(1)
    })
})