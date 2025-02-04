import React, { Fragment, useContext, useState } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext'

import Crawl from './crawltext/crawltext'

import HeaderImage from '../img/metafest-header.png'
import Date from '../img/metafest-date.png'
import Flavortext from '../img/metafest-flavortext.png'
import Grid from '../img/metafest-grid.gif'
import Future from '../img/metafest-manifest-the-future.png'
import Noise from '../img/metafest-noise.gif'
import Rocks from '../img/metafest-rocks.gif'
import Wanderer from '../img/metafest-wanderer.png'
import Loupe from '../img/loupe.svg'

const StyledLink = styled.a`
  color: #e340a8;
  text-align: center;
`
const ImageButton = styled.button`
cursor: pointer;
transform: scale(1);
transition: 1s;

& :hover {
  transform: scale(2);  
}
`


const Announce = () => {
  const [starwars, setStarwars] = useState(true)
  const crawlSwitch = () => {
    setStarwars(starwars => !starwars)
    {starwars ? addFloatingSpace('Crawl') : closeFloatingSpace('Crawl')}
  }

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const { currentFloatingSpaces, addFloatingSpace, closeFloatingSpace } = useContext(
    FloatingSpaceContext
  )

  let displayedJoinedSpaces
  if (currentFloatingSpaces.length > 0) {
    if (currentFloatingSpaces.length > 2) {
      let nameCount = currentFloatingSpaces.length
      displayedJoinedSpaces =
        currentFloatingSpaces.slice(0, nameCount - 2).join(', ') +
        ', ' +
        currentFloatingSpaces.slice(nameCount - 2, nameCount).join(' & ')
    } else {
      displayedJoinedSpaces = currentFloatingSpaces.join(' & ')
    }
  }

  return (
    <React.Fragment>
      {isPortrait && isMobile ? (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'grid',
            placeItems: 'center'
          }}
        >
          <img
            src={Date}
            alt='March 7th - April 4th'
            width='50%'
            style={{
              position: 'absolute',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: '0',
              right: '0',
              top: '1rem'
            }}
          />
          <img
            src={HeaderImage}
            alt='MetaFest'
            width='50%'
            style={{
              position: 'absolute',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: '0',
              right: '0',
              top: '4rem'
            }}
          />
          <div>
            <img
              src={Flavortext}
              alt='a shitload of fun'
              width='50%'
              style={{
                position: 'absolute',
                marginLeft: 'auto',
                marginRight: 'auto',
                left: '0',
                right: '0',
                top: '38vh',
                zIndex: '1'
              }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              zIndex: '100',
              left: '0%',
              right: '0%',
              marginLeft: 'auto',
              marginRight: 'auto',
              bottom: '25vh',
              padding: '1rem'
            }}
          >
            <a href='https://form.typeform.com/to/BClVBF4E'>
              <button
                style={{
                  backgroundColor: '#ffffff33',
                  color: '#FFF',
                  fontSize: '1rem',
                  padding: '1rem',
                  borderRadius: '1rem',
                  borderColor: '#FF1B7F',
                  borderSize: '3px',
                  cursor: 'pointer'
                }}
              >
                Fill out an application<br></br> to join
              </button>
            </a>
          </div>
          <img
            src={Wanderer}
            alt=''
            width='50%'
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '0%',
              zIndex: '2'
            }}
          />
          <img
            src={Rocks}
            alt=''
            width='100%'
            style={{
              position: 'fixed',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: '0',
              right: '0',
              bottom: '0',
              zIndex: '1'
            }}
          />
          <img
            src={Grid}
            alt=''
            width='100%'
            height='30%'
            style={{
              position: 'fixed',
              bottom: '0',
              zIndex: '0'
            }}
          />
        </div>
      ) : (
        <React.Fragment>
          <div
            style={{
              width: '100vw',
              position: 'static',
              height: '100vh',
              display: 'grid',
              placeItems: 'center'
            }}
          >
            <img
              src={Date}
              alt='March 7th - April 4th'
              width='30%'
              style={{
                position: 'absolute',
                marginLeft: 'auto',
                marginRight: 'auto',
                left: '0',
                right: '0',
                zIndex: '2',
                top: '1rem'
              }}
            />
            <img
              src={HeaderImage}
              alt='MetaFest'
              width='40%'
              style={{
                position: 'absolute',
                marginLeft: 'auto',
                marginRight: 'auto',
                left: '0',
                right: '0',
                zIndex: '2',
                top: '1rem'
              }}
            />
            <div>
              <img
                src={Flavortext}
                alt='a shitload of fun'
                width='60%'
                style={{
                  position: 'absolute',
                  top: '80%',
                  right: '0%',
                  width: '30%',
                  zIndex: '1'
                }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                zIndex: '2',
                left: '0%',
                right: '0%',
                marginLeft: 'auto',
                marginRight: 'auto',
                bottom: '14vh',
                padding: '1rem'
              }}
            >
              <button
                onClick={() => addFloatingSpace('Apply')}
                style={{
                  backgroundColor: '#ffffff33',
                  color: '#FFF',
                  fontSize: '1rem',
                  padding: '1rem',
                  borderRadius: '1rem',
                  borderColor: '#FF1B7F',
                  borderSize: '3px',
                  cursor: 'pointer'
                }}
              >
                Fill out an application<br></br> to join
              </button>
            </div>
            <img
              src={Wanderer}
              alt=''
              width='35%'
              style={{
                position: 'absolute',
                bottom: '0%',
                left: '0%',
                zIndex: '2'
              }}
            />
            <img
              src={Rocks}
              alt=''
              width='100%'
              height='20%'
              style={{
                position: 'absolute',
                marginLeft: 'auto',
                marginRight: 'auto',
                left: '0',
                right: '0',
                bottom: '0',
                zIndex: '1'
              }}
            />
              <ImageButton
                onClick={crawlSwitch}
                style={{ position: 'absolute', top: '50%', right: '20%', zIndex: 1, backgroundColor: '#00000000', border: '0px solid #FED141', borderRadius: '5px' }}
              >
               <img src={Loupe} width='15px' height='15px' style={{padding: '0.5rem'}} />
              </ImageButton>
            {starwars && <Crawl style={{ zIndex: -2 }} />}
            <img
              src={Grid}
              alt=''
              width='100%'
              height='30%'
              style={{
                position: 'absolute',
                bottom: '0'
              }}
            />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Announce
