import { Link } from 'react-router-dom'
import styled from 'styled-components'

// BODY | RESETS
export const Body = styled.body`
    background: #5e3023;
    color: #fff;

    list-style: none;
    text-decoration: none;
    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;

    scroll-behavior: smooth;
`

export const HighlightedText = styled.span`
    color: #ffb963;
    font-weight: 600;
`
export const HighlightedTextItalic = styled.span`
    color: #ffb963;
    font-weight: 600;
    font-style: italic;
`

// MAIN
export const Main = styled.main`
    display: flex;

    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
`

export const PageContainer = styled.div`
    max-width: 600px;
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProfileCard = styled.div`
    width: 100%;

    background: linear-gradient(180deg, #5e3023 0%, #b37a50 100%);
    border-radius: 1.5rem;

    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`

// SECTION - IMAGE
export const AvatarContainer = styled.div`
    border-radius: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 10px;
`

export const AvatarImage = styled.img`
    width: 200px;
    height: 250px;

    border-radius: 1.5rem;
`

// SECTION - NAME & USERNAME
export const ProfileHeader = styled.div`
    margin-top: 1rem;
    text-align: center;
`
export const ProfileName = styled.p`
    font: 600 1.7rem 'Poppins', sans-serif;
    margin: 0;
`

export const ProfileUserName = styled.p`
    font: 200 0.9rem 'Inter', sans-serif;
    opacity: 85%;

    margin: 0;
`

// SECTION - INFOS
export const InfoSection = styled.div`
    width: 100%;

    font: 200 0.9rem 'Inter', sans-serif;

    margin-top: 1.5rem;
`

export const Location = styled.p`
    margin: 5px 0;
`

export const JobTitle = styled.p`
    margin: 5px 0;
`

// SECTION - NAVIGATION
export const TabNavigation = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    margin: 2.5rem 0 0 0;

    padding-bottom: 10px;
`

export const StyledLink = styled(Link)`
    font: 100 0.8rem 'Poppins', sans-serif;
    color: #fff;

    cursor: pointer;
    position: relative;

    text-decoration: none;
    &:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 30%;
        height: 2px;
        background-color: #f3e9dc;
        border-radius: 10px;
        display: ${(props) => (props.active ? 'block' : 'none')};
    }

    &:hover {
        color: #ff9d2e;
    }

    &:hover:after {
        background-color: #ff9d2e;
        width: 110%;

        transition: all 0.4s;
    }
`

// SECTION - FOOTER
export const FooterNavigation = styled.footer`
    margin-top: 1rem;
`
export const FooterText = styled.p`
    font: 300 0.8rem 'Inter', sans-serif;
    opacity: 90%;
`
export const FooterInstagram = styled.a`
    list-style: none;
    text-decoration: none;

    color: #f3e9dc;
`

//! SECTION - HOME
export const ContentSection = styled.div`
    width: 90%;

    background-color: #a3785e;

    border-radius: 1.5rem;
    padding: 0.7rem;

    margin-top: 1.2rem;
`
export const ContentTitle = styled.h2`
    font: 600 1.1rem 'Poppins', sans-serif;
    text-align: center;

    margin: 20px 0;
`
export const ContentText = styled.p`
    font-size: 0.8rem;
    line-height: 1.7;
    margin: 0;
`

//! SECTION - PROJECTS
export const CardProjects = styled.div`
    width: 100%;
`
export const ContentProjects = styled.div`
    margin-top: 1.2rem;
    display: flex;
    flex-direction: column;

    background-color: #a3785e;
    border-radius: 1.5rem;

    width: 100%;
    max-width: 600px;
`

export const ProjectsLibrary = styled.div`
    display: flex;
    justify-content: space-around;

    width: 100%;
    height: auto;

    padding: 1rem 0;
`

export const VideosDesktop = styled.video`
    width: 70%;
    height: 150px;
    border-radius: 1rem;
    object-fit: cover;
`

export const PictureDesktop = styled.img`
    width: 70%;

    border-radius: 1rem;
`

export const PictureMobile = styled.img`
    height: 150px;
    border-radius: 1rem;
    object-fit: cover;

    @media (min-width: 769px) {
        height: 200px;
    }
`

export const VideosMobile = styled.video`
    height: 150px;
    border-radius: 1rem;
    object-fit: cover;
`

export const ProjectInfo = styled.div`
    width: 90%;

    justify-content: center;

    margin: 0 0 1rem 1.2rem;
`

export const ProjectsTitle = styled.h2`
    font: 500 1rem 'Poppins', sans-serif;
    letter-spacing: 1px;
    padding-bottom: 8px;
    position: relative;

    &::after {
        content: '';
        position: absolute;

        left: 0;
        bottom: 0;

        width: 30px;
        height: 3px;

        background-color: #f3e9dc;
        border-radius: 100px;
    }
`
export const ProjectsText = styled.p`
    font-size: 0.7rem;
    line-height: 1.5;
`

export const ProjectsLink = styled.a`
    font: 200 0.8rem 'Inter', sans-serif;
    font-style: italic;
    text-decoration: underline;
    color: #fff;
`

export const ProjectsTag = styled.div`
    display: flex;
    gap: 0.5rem;

    margin: 1rem 0 2rem 1.2rem;
`

export const TagReact = styled.button`
    border: none;
    background: #61dbfb;
    color: #fff;

    border-radius: 2rem;

    width: 4.4rem;
    height: 1.5rem;

    font: 600 0.8rem 'Poppins', sans-serif;
    letter-spacing: 1px;
`

export const TagStyledComponents = styled.button`
    border: none;
    background: #284ddc;
    color: #fff;

    border-radius: 2rem;

    width: 11.5rem;
    height: 1.5rem;

    font: 600 0.8rem 'Poppins', sans-serif;
    letter-spacing: 1px;
`

export const TagHtml = styled.button`
    border: none;
    background: #e75a27;
    color: #fff;

    border-radius: 2rem;

    width: 4.4rem;
    height: 1.5rem;

    font: 600 0.8rem 'Poppins', sans-serif;
    letter-spacing: 1px;
`

export const TagCss = styled.button`
    border: none;
    background: #284ddc;
    color: #fff;

    border-radius: 2rem;

    width: 4rem;
    height: 1.5rem;

    font: 600 0.8rem 'Poppins', sans-serif;
    letter-spacing: 1px;
`

export const TagJS = styled.button`
    border: none;
    background: #ffda55;
    color: #fff;

    border-radius: 2rem;

    width: 7.4rem;
    height: 1.5rem;

    font: 600 0.8rem 'Poppins', sans-serif;
    letter-spacing: 1px;
`

//! SKILLS
export const ContentSkills = styled.div`
    width: 100%;
`

export const CardSkills = styled.div`
    width: auto;
    height: auto;

    background: ${({ bgColor }) =>
        bgColor || 'linear-gradient(135deg, #1d1d1d 0%, #222 100%)'};
    padding: 1rem;

    display: flex;
    margin: 1rem 0;
    align-items: center;
    justify-content: center;

    border-radius: 1rem;
`

export const VectorSkills = styled.img`
    height: 90px;
`

export const TextCardSkills = styled.div`
    text-align: start;
    width: 90%;

    margin-left: 1rem;
`

export const TitleCardSkills = styled.h2`
    font-size: 0.8rem;

    @media (min-width: 769px) {
        font-size: 1rem;
    }
`

export const TextCard = styled.p`
    font: 200 0.6rem 'Inter', sans-serif;
    letter-spacing: 1px;

    @media (min-width: 769px) {
        font-size: 0.8rem;
    }
`

//! CONTACT
export const BoardView = styled.div`
    width: 100%;

    margin: 1rem 0;
`

export const CardLineOne = styled.div`
    width: 100%;

    display: flex;
    gap: 0 1rem;

    margin-bottom: 1.2rem;
`

export const CardContact = styled.div`
    width: 48%;
    background: ${({ cardColor }) =>
        cardColor || 'linear-gradient(135deg, #333333, #0d1117)'};

    border-radius: 1.5rem;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const TitleCard = styled.h2`
    font: 600 1rem 'Poppins', sans-serif;
    letter-spacing: 1px;
`

export const VectorLink = styled.img`
    cursor: pointer;
    margin-top: 5px;
`
