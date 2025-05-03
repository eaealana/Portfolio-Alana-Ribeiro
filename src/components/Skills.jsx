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

                        <ContentSection></ContentSection>

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
