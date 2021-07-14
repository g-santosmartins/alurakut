import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import Input from '../src/components/Input';
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

// function component
function ProfileSidebar(props) {
  return (
    <Box >
      <img src={`https://github.com/${props.gitHubUser}.png`} style={{ borderRadius: '8px' }} />


      <a className="boxLink" href={`https://github.com/${props.gitHubUser}`}>
        <span > @{props.gitHubUser}</span>
      </a>

      <hr />
      <AlurakutProfileSidebarMenuDefault />
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

  // abstraction icon level prop
  const statusLevel = 3;
  function handleCreateCommunity (e) {
    e.preventDefault()
    alert('Texto disparado aqui')
  }


  return (
    <>
      <AlurakutMenu githubUser={gitHubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar gitHubUser={gitHubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box gitHubUser={gitHubUser}>
            <h1 className="title">Bem-vindo(a), {gitHubUser}</h1>

            <OrkutNostalgicIconSet
              statusLevel={statusLevel}
            />

          </Box>

          <Box>
            <h2 className="subTitle" >O que você deseja fazer?</h2>

            <form onSubmit={handleCreateCommunity}>

              <div>
                <Input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>

              <div>
                <Input
                  placeholder="Coloque aqui uma URL para usarmos de capa"
                  name="title"
                  aria-label="Coloque aqui uma URL para usarmos de capa"
                />
              </div>
              <button type="submit">Criar comunidade</button>
            </form>
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
