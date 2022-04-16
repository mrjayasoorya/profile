import React from 'react'
import ThemeToggler from '../../components/common/ThemeToggler'


type MobileViewProps = {

}

class MobileView extends React.Component<MobileViewProps> {
    constructor(props: MobileViewProps) {
        super(props)
    }

    render() {
        return (
            <>
                Mobile Jayasoorya M R
                <ThemeToggler />
            </>
        )
    }
}

export default MobileView
