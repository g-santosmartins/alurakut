import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
export default function Home() {
  return (
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <Box >
         <img src="https://github.com/g-santosmartins.png"/>
        </Box>
      </div>

      <div className="welcomeArea"  style={{ gridArea: 'welcomeArea' }}>
        <Box >
          Bem vindo
        </Box>
      </div>

      <div className="profileRelations"  style={{ gridArea: 'profileRelations' }}>
        <Box >
          Pessoas da comunidade
          Comunidade
        </Box>
      </div>

    </MainGrid>
  )
}
