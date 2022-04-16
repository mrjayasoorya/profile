import React from 'react'
import ThemeToggler from '../../components/common/ThemeToggler'



type DesktopViewProps = {

}

class DesktopView extends React.Component<DesktopViewProps> {
    constructor(props: DesktopViewProps) {
        super(props)
    }

    render() {
        return (
            <>
                Desktop Jayasoorya M R
                <div>
                    <ThemeToggler />
                </div>
            </>
        )
    }
}

export default DesktopView
