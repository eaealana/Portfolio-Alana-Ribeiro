import { Link } from 'react-router-dom'

import Avatar from '../assets/avatar.png'

import {
    Body,
    Main,
    PageContainer,
    ProfileCard,
    AvatarContainer,
    AvatarImage,
    ProfileHeader,
    ProfileName,
    ProfileUserName,
    InfoSection,
    Location,
    JobTitle,
    TabNavigation,
    StyledLink,
    ContentSection,
    ContentTitle,
    ContentText,
    HighlightedText,
    HighlightedTextItalic,
    FooterNavigation,
    FooterText,
    FooterInstagram,
} from '../styles'

function Home() {
    return (
        <Body>
            <Main>
                <PageContainer>
                    <ProfileCard>
                        <AvatarContainer>
                            <AvatarImage
                                src={Avatar}
                                alt="avatar de Alana Ribeiroas"
                            />
                        </AvatarContainer>

                        <ProfileHeader>
                            <ProfileName>{'< Alana Ribeiro />'}</ProfileName>
                            <ProfileUserName>@alanaribeiroosz</ProfileUserName>
                        </ProfileHeader>

                        <InfoSection>
                            <Location>📍 São José dos Campos, SP</Location>
                            <JobTitle>
                                {' '}
                                💻 Dev em transição de carreira | Front-End
                            </JobTitle>
                        </InfoSection>

                        <TabNavigation>
                            <StyledLink
                                active
                                to="/"
                            >
                                Sobre mim
                            </StyledLink>
                            <StyledLink to="/projects">Projetos</StyledLink>
                            <StyledLink to="/skills">Skills</StyledLink>
                            <StyledLink to="/contact">Contato</StyledLink>
                        </TabNavigation>

                        <ContentSection>
                            <ContentTitle>
                                {'E aaai, tudo bem? Muito prazer :)'}
                            </ContentTitle>
                            <ContentText>
                                Estou em transição de carreira para a tecnologia
                                e sinceramente?{' '}
                                <HighlightedText>
                                    Nunca estive tão animada com o caminho que
                                    estou construindo.{' '}
                                </HighlightedText>
                                <br />
                                Amo a ideia de criar com código — dar forma, cor
                                e funcionalidade a ideias que, até então, só
                                existiam na cabeça.
                                <br />
                                <br />
                                Comecei com o código como hobby lá em 2021,
                                entre cursos e projetos pessoais — mas foi
                                agora, com mais maturidade e direcionamento, que
                                estou mergulhando de verdade no Front-End. 🚀
                                <br />
                                <br />
                                📚 Atualmente, estudo{' '}
                                <HighlightedTextItalic>
                                    CS50s Web Programming with Python and
                                    JavaScript | HarvardX
                                </HighlightedTextItalic>{' '}
                                (em inglês!) e sigo me aprofundando em
                                JavaScript, React e tecnologias de UI/UX.
                                <br />
                                <br />
                                Ah, e quando não estou no VS Code, você
                                provavelmente vai me encontrar ouvindo podcast,
                                correndo ou na academia focada em treino. 🏃‍♀️🎧
                                <br />
                                Estar em constante movimento é o que me motiva!
                                <br />
                                <br />
                                Não vim da área, mas carrego a coragem (e a
                                resiliência) de quem decidiu recomeçar com
                                propósito. 💪
                                <HighlightedText>
                                    Acredito que a tecnologia é uma ponte pra
                                    criar coisas incríveis — e eu quero fazer
                                    parte disso!
                                </HighlightedText>
                                <br />
                                <br />✨ E se você chegou até aqui, que tal
                                trocarmos uma ideia? Vai ser um prazer
                                conversar!
                            </ContentText>
                        </ContentSection>

                        <FooterNavigation>
                            <FooterText>
                                feito com 💻 & ☕ por{' '}
                                <FooterInstagram
                                    href="https://www.instagram.com/alanaribeiroosz"
                                    target="_blank"
                                >
                                    @alanaribeiroosz
                                </FooterInstagram>
                            </FooterText>
                        </FooterNavigation>
                    </ProfileCard>
                </PageContainer>
            </Main>
        </Body>
    )
}

export default Home
