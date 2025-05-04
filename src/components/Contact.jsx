import { Link } from 'react-router-dom'

import Avatar from '../assets/avatar.png'
import VectorExternalLink from '../assets/VectorExternalLink.svg'

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
    ContentTitle,
    StyledLink,
    BoardView,
    CardLineOne,
    CardContact,
    TitleCard,
    VectorLink,
    FooterNavigation,
    FooterText,
    FooterInstagram,
} from '../styles'

function Contact() {
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
                            <ProfileUserName >@alanaribeiroosz</ProfileUserName>
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
                            <StyledLink to="/skills">Skills</StyledLink>
                            <StyledLink
                                active
                                to="/contact"
                            >
                                Contato
                            </StyledLink>
                        </TabNavigation>

                        <ContentTitle>
                                {'Contato & Redes Sociais :)'}
                            </ContentTitle>
                        <BoardView>
                         
                            <CardLineOne>
                                <CardContact>
                                    <TitleCard>GitHub</TitleCard>
                                    <a
                                        href="https://github.com/eaealana"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <VectorLink
                                            src={VectorExternalLink}
                                            alt="GitHub"
                                        />
                                    </a>
                                </CardContact>

                                <CardContact cardColor="linear-gradient(135deg, #0072b1, #005983)">
                                    <TitleCard>LinkedIn</TitleCard>
                                    <a
                                        href="https://www.linkedin.com/in/eae-alana"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <VectorLink
                                            src={VectorExternalLink}
                                            alt="LinkedIn"
                                        />
                                    </a>
                                </CardContact>
                            </CardLineOne>

                            <CardLineOne>
                                <CardContact cardColor="linear-gradient(135deg, #c33764, #1d1d1d)">
                                    <TitleCard>E-mail</TitleCard>
                                    <a
                                        href="mailto:ar.ribeiroalana@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <VectorLink
                                            src={VectorExternalLink}
                                            alt="E-mail"
                                        />
                                    </a>
                                </CardContact>

                                <CardContact cardColor="linear-gradient(135deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)">
                                    <TitleCard>Instagram</TitleCard>
                                    <a
                                        href="https://www.instagram.com/alanaribeiroosz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <VectorLink
                                            src={VectorExternalLink}
                                            alt="E-mail"
                                        />
                                    </a>
                                </CardContact>
                            </CardLineOne>
                        </BoardView>

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

export default Contact
