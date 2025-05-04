import { Link } from 'react-router-dom'

import Avatar from '../assets/avatar.png'

import VectorHarvard from '../assets/VectorHarvard.svg'
import VectorDevClub from '../assets/VectorDevClub.svg'
import VectorHtml from '../assets/VectorHtml.svg'
import VectorCss from '../assets/VectorCss.svg'
import VectorJs from '../assets/VectorJs.svg'
import VectorReact from '../assets/VectorReact.svg'
import VectorGit from '../assets/VectorGit.svg'
import VectorNode from '../assets/VectorNode.svg'
import VectorFigma from '../assets/VectorFigma.svg'
import VectorNotion from '../assets/VectorNotion.svg'

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
    ContentSkills,
    ContentTitle,
    CardSkills,
    VectorSkills,
    TextCardSkills,
    TitleCardSkills,
    TextCard,
    FooterNavigation,
    FooterText,
    FooterInstagram,
} from '../styles'

function Skills() {
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
                            <StyledLink to="/projects">Projetos</StyledLink>
                            <StyledLink
                                active
                                to="/skills"
                            >
                                Skills
                            </StyledLink>
                            <StyledLink to="/contact">Contato</StyledLink>
                        </TabNavigation>

                        {/* SKILLS */}
                        <ContentSkills>
                            <ContentTitle>
                                {'Skills & Tecnologias'}
                            </ContentTitle>

                            {/* //? CARD HARVARD */}
                            <CardSkills>
                                <VectorSkills src={VectorHarvard} />

                                <TextCardSkills>
                                    <TitleCardSkills>
                                        {
                                            'CS50s Web Programming with Python and JavaScript | HarvardX'
                                        }
                                    </TitleCardSkills>
                                    <TextCard>
                                        Curso da HarvardX (em inglês!) que
                                        aprofunda desenvolvimento web com
                                        Python, JavaScript, HTML e frameworks
                                        como Flask. Um desafio e tanto — e uma
                                        baita escola!
                                    </TextCard>
                                </TextCardSkills>
                            </CardSkills>

                            {/* //! CARD DEV CLUB */}
                            <CardSkills bgColor="linear-gradient(90deg, #8E2DD0 25%, #280D3A 54%, #000000 90%)">
                                <TextCardSkills>
                                    <TitleCardSkills>
                                        Desenvolvedor Full Stack - Dev Club
                                    </TitleCardSkills>
                                    <TextCard>
                                        Plataforma que me ajudou a sair do zero
                                        com lógica, JavaScript e projetos reais.
                                        Aprendi desde o básico até aplicações
                                        com Node.js, React e boas práticas de
                                        quem vive o mercado de tech.
                                    </TextCard>
                                </TextCardSkills>

                                <VectorSkills src={VectorDevClub} />
                            </CardSkills>

                            {/* //? CARD HTML */}
                            <CardSkills bgColor="linear-gradient(90deg, #EF5B25 7%, #F06A2C 32%, #F6C2A0 86%)">
                                <VectorSkills src={VectorHtml} />

                                <TextCardSkills>
                                    <TitleCardSkills>HTML</TitleCardSkills>
                                    <TextCard>
                                        HTML foi meu primeiro passo com código.
                                        No início, a semântica me confundia, mas
                                        hoje já estruturo páginas com foco em
                                        acessibilidade
                                    </TextCard>
                                </TextCardSkills>
                            </CardSkills>

                            {/* //! CARD CSS */}
                            <CardSkills bgColor="linear-gradient(90deg, #264DE4 7%, #4B75F1 32%, #BFD4FF 86%)">
                                <TextCardSkills>
                                    <TitleCardSkills>
                                        CSS & STYLED.COMPONENTS{' '}
                                    </TitleCardSkills>
                                    <TextCard>
                                        CSS foi amor e caos no começo — hoje uso
                                        com mais confiança, criando layouts
                                        responsivos e estilos reutilizáveis com
                                        Styled Components.
                                    </TextCard>
                                </TextCardSkills>

                                <VectorSkills src={VectorCss} />
                            </CardSkills>

                            {/* //? CARD JS */}
                            <CardSkills bgColor="linear-gradient(90deg, #F0DB4F 7%, #F7C600 32%, #FFF3B0 86%)">
                                <VectorSkills src={VectorJs} />

                                <TextCardSkills>
                                    <TitleCardSkills>
                                        JavaScript
                                    </TitleCardSkills>
                                    <TextCard>
                                        JS me desafiou a pensar de forma lógica.
                                        Depois de muita prática, hoje já
                                        manipulo o DOM, uso funções e entendo
                                        bem o fluxo do código.
                                    </TextCard>
                                </TextCardSkills>
                            </CardSkills>

                            {/* //! CARD REACT */}
                            <CardSkills bgColor="linear-gradient(90deg, #61DBFB 7%, #43C9E6 32%, #BFD4FF 86%)">
                                <TextCardSkills>
                                    <TitleCardSkills>REACT</TitleCardSkills>
                                    <TextCard>
                                        React me abriu os olhos pra componentes
                                        e reatividade. Ainda evoluindo, mas já
                                        crio interfaces funcionais com props,
                                        estados e hooks.
                                    </TextCard>
                                </TextCardSkills>

                                <VectorSkills src={VectorReact} />
                            </CardSkills>

                            {/* //? CARD NODE */}
                            <CardSkills bgColor="linear-gradient(90deg, #3C873A 7%, #6FB96A 32%, #D8F5D6 86%)">
                                <VectorSkills src={VectorNode} />

                                <TextCardSkills>
                                    <TitleCardSkills>NODE.JS</TitleCardSkills>
                                    <TextCard>
                                        Estou dando os primeiros passos com
                                        Node.js, entendendo o backend e como
                                        tudo se conecta por trás da interface.
                                    </TextCard>
                                </TextCardSkills>
                            </CardSkills>

                            {/* //! CARD GIT */}
                            <CardSkills bgColor="linear-gradient(90deg, #F1502F 7%, #F16C49 32%, #FFD6C9 86%)">
                                <TextCardSkills>
                                    <TitleCardSkills>GIT</TitleCardSkills>
                                    <TextCard>
                                        Git foi confuso no início (branches,
                                        commits, pushs!), mas virou essencial.
                                        Hoje versiono projetos e organizo meu
                                        fluxo de trabalho.
                                    </TextCard>
                                </TextCardSkills>

                                <VectorSkills src={VectorGit} />
                            </CardSkills>

                            {/* //? CARD FIGMA */}
                            <CardSkills bgColor="linear-gradient(90deg, #A259FF 7%, #C984FF 32%, #EBDCFF 86%)">
                                <VectorSkills src={VectorFigma} />

                                <TextCardSkills>
                                    <TitleCardSkills>FIGMA</TitleCardSkills>
                                    <TextCard>
                                        Uso o Figma pra criar, testar e
                                        visualizar ideias. Ainda evoluindo nos
                                        detalhes, mas já consigo transformar
                                        ideias em UI real.
                                    </TextCard>
                                </TextCardSkills>
                            </CardSkills>

                            {/* //! CARD NOTION */}
                            <CardSkills bgColor="linear-gradient(90deg, #2F2F2F 7%, #6F6F6F 32%, #A8A8A8 86%)">
                                <TextCardSkills>
                                    <TitleCardSkills>NOTION</TitleCardSkills>
                                    <TextCard>
                                        Meu quartel-general digital. Organizo
                                        tudo: estudos, projetos, ideias e metas.
                                        É onde dou forma aos meus planos.
                                    </TextCard>
                                </TextCardSkills>

                                <VectorSkills src={VectorNotion} />
                            </CardSkills>
                        </ContentSkills>

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

export default Skills
