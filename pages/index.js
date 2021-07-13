import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

// function component
function ProfileSidebar(props) {
  return (
    <Box >
      <img src={`https://github.com/${props.gitHubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {

  const gitHubUser = 'g-santosmartins'
  const favoritePeople = [
    'Marco-25',
    'filipedeschamps',
    'omariosouto',
    'juunegreiros',
    'peas',
    'leonardomleitao'
  ];

  // abstração do resultado
  const statusLevel = 1;


  return (
    <>
      <AlurakutMenu githubUser={gitHubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar gitHubUser={gitHubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box className="title" >
            <h1>Bem-vindo(a)</h1>
            <OrkutNostalgicIconSet statusLevel={statusLevel}/>
          </Box>
        </div>

        <div className="profileRelations" style={{ gridArea: 'profileRelations' }}>

          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              Pessoas da comunidade ({favoritePeople.length})
            </h2>

            <ul>

              {favoritePeople.map((currentUser) => {
                return (
                  <li>
                    <a href={`/users/${currentUser}`} key={currentUser}>
                      <img
                        src={`https://github.com/${currentUser}.png`}
                        style={{ borderRadius: '8px' }}
                      />
                      <span>{currentUser}</span>
                    </a>
                  </li>
                )
              })}


            </ul>

          </ProfileRelationsBoxWrapper>

        </div>

      </MainGrid>
    </>
  )
}
