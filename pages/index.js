import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'

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

  return (

    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar  gitHubUser={gitHubUser}/>
      </div>

      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box >
          Bem vindo
        </Box>
      </div>

      <div className="profileRelations" style={{ gridArea: 'profileRelations' }}>
        <Box >
          Pessoas da comunidade
        </Box>
        <Box >
          Comunidades
        </Box>
      </div>

    </MainGrid>
  )
}
