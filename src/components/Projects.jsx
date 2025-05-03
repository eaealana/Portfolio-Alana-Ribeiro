import { Link } from 'react-router-dom'

import Avatar from '../assets/avatar.png'

import BeautySalonDesktop from '../assets/beautySalonDesktop.mp4'
import BeautySalonMobile from '../assets/beautySalonMobile.mp4'

import ConvertMoneyDesktop from '../assets/ConvertMoneyDesktop.mp4'
import ConvertMoneyMobile from '../assets/ConvertMoneyMobile.mp4'

import CampInPictureDesktop from '../assets/CampInPictureDesktop.png'
import CampinPictureMobile from '../assets/CampInPictureMobile.jpeg'

import CalculadoraDesktop from '../assets/CalculadoraDesktop.mp4'
import CalculadoraMobile from '../assets/CalculadoraMobile.mp4'

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
    CardProjects,
    ContentTitle,
    ContentProjects,
    ProjectsLibrary,
    VideosDesktop,
    PictureDesktop,
    VideosMobile,
    PictureMobile,
    ProjectInfo,
    ProjectsTitle,
    ProjectsText,
    ProjectsLink,
    ProjectsTag,
    TagStyledComponents,
    TagReact,
    TagHtml,
    TagCss,
    TagJS,
    HighlightedText,
    FooterNavigation,
    FooterText,
    FooterInstagram,
} from '../styles'

function Projects() {
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
                            <StyledLink to="/">Sobre mim</StyledLink>
                            <StyledLink
                                active
                                to="/projects"
                            >
                                Projetos
                            </StyledLink>
                            <StyledLink to="/skills">Skills</StyledLink>
                            <StyledLink to="/contact">Contato</StyledLink>
                        </TabNavigation>

                        {/* //! PROJECTS */}
                        <CardProjects>
                            <ContentTitle>{'Projetoos :)'}</ContentTitle>

                            {/* //? PROJECT 01 */}
                            <ContentProjects>
                                <ProjectsLibrary>
                                    <PictureDesktop
                                        src={CampInPictureDesktop}
                                        alt="print de uma aplicação em React, Camp In"
                                        autoPlay
                                        loop
                                        muted
                                    />
                                    <PictureMobile
                                        src={CampinPictureMobile}
                                        alt="print de uma aplicação em React, Camp In"
                                        autoPlay
                                        loop
                                        muted
                                    />
                                </ProjectsLibrary>
                                <ProjectInfo>
                                    <ProjectsTitle>Camp In</ProjectsTitle>
                                    <ProjectsText>
                                        Projeto desenvolvido com React para
                                        simular um sistema de login e
                                        autenticação. Foi aqui que comecei a
                                        entender melhor o poder dos{' '}
                                        <HighlightedText>
                                            componentes, dos estados e da
                                            navegação em SPA.{' '}
                                        </HighlightedText>
                                        <br />
                                        <br />
                                        Esse projeto me ajudou a consolidar
                                        vários conceitos do React na prática — e
                                        foi um baita desafio sair da zona de
                                        conforto!
                                    </ProjectsText>

                                    <ProjectsLink
                                        href="https://camp-in-six.vercel.app/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        https://camp-in-six.vercel.app/
                                    </ProjectsLink>
                                </ProjectInfo>

                                <ProjectsTag>
                                    <TagReact>REACT</TagReact>
                                    <TagStyledComponents>
                                        STYLED.COMPONENTS
                                    </TagStyledComponents>
                                </ProjectsTag>
                            </ContentProjects>

                            {/* //? PROJECT 02 */}
                            <ContentProjects>
                                <ProjectsLibrary>
                                    <VideosDesktop
                                        src={BeautySalonDesktop}
                                        alt="video de um site chamado Beauty Salon"
                                        autoPlay
                                        loop
                                        muted
                                    />
                                    <VideosMobile
                                        src={BeautySalonMobile}
                                        alt="video de um site chamado Beauty Salon"
                                        autoPlay
                                        loop
                                        muted
                                    />
                                </ProjectsLibrary>
                                <ProjectInfo>
                                    <ProjectsTitle>Beauty Salon</ProjectsTitle>
                                    <ProjectsText>
                                        Site institucional para um salão de
                                        beleza. Com esse projeto, mergulhei de
                                        vez no front-end:{' '}
                                        <HighlightedText>
                                            aprendi a estruturar páginas com
                                            HTML, estilizar com CSS e trazer
                                            interatividade com JavaScript.
                                        </HighlightedText>
                                        <br />
                                        <br />
                                        Foi aqui que entendi na prática como
                                        criar uma experiência suave, acessível e
                                        responsiva pro usuário.
                                    </ProjectsText>

                                    <ProjectsLink
                                        target="_blank"
                                        href="https://eaealana.github.io/BeautySalon/"
                                        rel="noopener noreferrer"
                                    >
                                        https://eaealana.github.io/BeautySalon/
                                    </ProjectsLink>
                                </ProjectInfo>

                                <ProjectsTag>
                                    <TagHtml>HTML</TagHtml>
                                    <TagCss>CSS</TagCss>
                                    <TagJS>JavaScript</TagJS>
                                </ProjectsTag>
                            </ContentProjects>

                            {/* //? PROJECT 03 */}
                            <ContentProjects>
                                <ProjectsLibrary>
                                    <VideosDesktop
                                        src={ConvertMoneyDesktop}
                                        alt="video de um site Conversor de Moedas"
                                        autoPlay
                                        loop
                                        muted
                                    />
                                    <VideosMobile
                                        src={ConvertMoneyMobile}
                                        alt="video de um site Conversor de Moedas"
                                        autoPlay
                                        loop
                                        muted
                                    />
                                </ProjectsLibrary>
                                <ProjectInfo>
                                    <ProjectsTitle>Convert Money</ProjectsTitle>
                                    <ProjectsText>
                                        Projeto simples, mas poderoso: foi com
                                        esse conversor que exercitei a lógica
                                        com JavaScript,
                                        <HighlightedText>
                                            manipulação de DOM e consumo de
                                            APIs.
                                        </HighlightedText>
                                        <br />
                                        <br />
                                        Ele me ajudou a entender como dados
                                        externos podem ser usados de forma
                                        dinâmica na interface.
                                    </ProjectsText>

                                    <ProjectsLink
                                        target="_blank"
                                        href="https://eaealana.github.io/Convert-Money/"
                                        rel="noopener noreferrer"
                                    >
                                        https://eaealana.github.io/Convert-Money/{' '}
                                    </ProjectsLink>
                                </ProjectInfo>

                                <ProjectsTag>
                                    <TagHtml>HTML</TagHtml>
                                    <TagCss>CSS</TagCss>
                                    <TagJS>JavaScript</TagJS>
                                </ProjectsTag>
                            </ContentProjects>

                            {/* //? PROJECT 04 */}
                            <ContentProjects>
                                <ProjectsLibrary>
                                    <VideosDesktop
                                        src={CalculadoraDesktop}
                                        alt="video de um site que é uma calculadora"
                                        autoPlay
                                        loop
                                        muted
                                    />
                                    <VideosMobile
                                        src={CalculadoraMobile}
                                        alt="video de um site que é uma calculadora"
                                        autoPlay
                                        loop
                                        muted
                                    />
                                </ProjectsLibrary>
                                <ProjectInfo>
                                    <ProjectsTitle>Calculadora</ProjectsTitle>
                                    <ProjectsText>
                                        Esse projeto foi um divisor de águas no
                                        meu entendimento de
                                        <HighlightedText>
                                            {' '}
                                            funções, eventos e organização de
                                            código.{' '}
                                        </HighlightedText>{' '}
                                        <br />
                                        <br />
                                        Com ele, aprendi a pensar de forma mais
                                        estruturada e a trabalhar com condições
                                        e operações matemáticas na prática.
                                    </ProjectsText>

                                    <ProjectsLink
                                        href="https://eaealana.github.io/Calculadora/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        https://eaealana.github.io/Calculadora/
                                    </ProjectsLink>
                                </ProjectInfo>

                                <ProjectsTag>
                                    <TagHtml>HTML</TagHtml>
                                    <TagCss>CSS</TagCss>
                                    <TagJS>JavaScript</TagJS>
                                </ProjectsTag>
                            </ContentProjects>
                        </CardProjects>

                        {/* //! FOOTER */}
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

export default Projects
