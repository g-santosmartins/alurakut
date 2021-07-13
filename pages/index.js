import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu } from '../src/lib/AlurakutCommons'

// function component
function ProfileSidebar(props) {
  console.log(props)

  return (
    <Box >
      <img src={`https://github.com/${props.gitHubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {

  const gitHubUser = 'g-santosmartins'
  const favoritePeople = [
    'filipedeschamps',
    'omariosouto',
    'juunegreiros',
    'peas',
    'leonardomleitao'
  ];


  return (
    <>
      <AlurakutMenu githubUser={gitHubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar gitHubUser={gitHubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box >
            Bem vindo
          </Box>
        </div>

        <div className="profileRelations" style={{ gridArea: 'profileRelations' }}>

          <Box >
            <h2 className="smallTitle">
              Pessoas da comunidade ({favoritePeople.length})
            </h2>

            <ul>

              {favoritePeople.map((currentUser) => {
                return (
                  <a href={`/users/${currentUser}`} key={currentUser}>
                    <img
                      src={`https://github.com/${currentUser}.png`}
                      style={{ borderRadius: '8px' }}
                    />
                    <span>{currentUser}</span>
                  </a>)
              })}

            </ul>

          </Box>

        </div>

      </MainGrid>
    </>
  )
}
