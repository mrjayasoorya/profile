import React from 'react'
import { GetServerSideProps } from 'next'
import { AppProps } from 'next/app'
import MobileView from './Mobile'
import DesktopView from './Desktop'


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    // https://medium.com/100-articles-marathon/getting-device-type-in-next-js-e8c3534ca421
    let isMobileView = (ctx?.req ? ctx?.req?.headers?.['user-agent'] : navigator?.userAgent)?.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
    return { props: { isMobileView: Boolean(isMobileView) } };
  } catch (error) {
    console.log(error)
    return { props: { isMobileView: false } };
  }
}

type HomeProps = {
  isMobileView: boolean
}

class Home extends React.Component<HomeProps> {
  constructor(props: HomeProps) {
    super(props)
  }

  render() {
    const { isMobileView } = this.props
    return (
      <>
        {
          isMobileView ?
            <MobileView />
            :
            <DesktopView />
        }
      </>
    )
  }
}

export default Home
