import React, { useState } from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import Input from '../src/components/Input';
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'


export default function Home() {

  const [communities, setCommunities] = useState([{
    id: '123123131312321',
    title: 'eu odeio acordar cedo',
    image: 'http://tny.im/pf3',
    random: 0,
  }]);

  const gitHubUser = 'g-santosmartins'
  const favoritePeople = [
    'Marco-25',
    'filipedeschamps',
    'omariosouto',
    'juunegreiros',
    'peas',
    'leonardomleitao'
  ];



  // abstraction icon level prop, control it in the future
  const statusLevel = 3;



  function handleCreateCommunity(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const currentDate = new Date().toISOString()
    console.log(currentDate)
    const community = {
      id: currentDate,
      title: formData.get('title'),
      image: formData.get('image'),
      link: formData.get('link'),
    }

    

    const communitiesUpadated = [...communities, community]
    setCommunities(communitiesUpadated)

  }

  function ProfileSidebar(props) {
    return (
      <Box as="aside">
        <img src={`https://github.com/${props.gitHubUser}.png`} style={{ borderRadius: '8px' }} />


        <a className="boxLink" href={`https://github.com/${props.gitHubUser}`}>
          <span>{props.gitHubUser}</span>
        </a>

        <hr />
        <AlurakutProfileSidebarMenuDefault />
      </Box>
    )
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
                  placeholder="Coloque aqui uma URL para usarmos de capa?"
                  name="image"
                  aria-label="Coloque aqui uma URL para usarmos de capa?"
                />
              </div>

              <div>
                <Input
                  placeholder="Qual vai ser o link da comunidade? [URL] "
                  name="link"
                  aria-label="Qual vai ser o link da comunidade? [URL] "
                />
              </div>
              <button type="submit">Criar comunidade</button>
            </form>
          </Box>

        </div>

        <div className="profileRelations" style={{ gridArea: 'profileRelations' }}>


          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              Comunidades ({communities.length})
            </h2>

            <ul>

              {communities.map((currentItem) => {
                return (
                  <li>
                    <a
                      href={currentItem.link ? currentItem.link : 'https://github.com/g-santosmartins/alurakut'}
                      key={currentItem.id}
                    >
                      <img

                        src={currentItem.image ? currentItem.image : `https://picsum.photos/300/`}
                        style={{ borderRadius: '8px' }}
                      />
                      <span>{currentItem.title ? currentItem.title : `Sem título`}</span>
                    </a>
                  </li>
                )
              })}

            </ul>

            <a className="link">Ver todos</a>

          </ProfileRelationsBoxWrapper>

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
