import React from 'react';
import Logo from '@images/logo.png';
import Slack from '@images/slack.png';
import Instagram from '@images/instagram.png';
import LinkedIn from '@images/linkedin.png';
import Link from 'next/link';

type SocialButtonProps = {
  link: string;
  backgroundImage: string;
  backgroundColor?: string;
  filter?: boolean;
  border?: boolean;
};

const SocialButton: React.FC<SocialButtonProps> = ({
  link,
  backgroundImage,
  backgroundColor = '',
  filter = false,
  border = false
}) => {
  return (
    <Link
      className="btn"
      role="button"
      data-bss-hover-animate="pulse"
      href={link}
      style={{
        margin: '5px 5px',
        fontSize: '5px',
        background: `url(${backgroundImage}) right / cover no-repeat ${backgroundColor}`,
        paddingLeft: '0.25px',
        paddingRight: '13.25px',
        borderRadius: '21px',
        marginRight: '1px',
        width: '37.25px',
        height: '36.25px',
        paddingTop: '4.625px',
        filter: filter ? 'brightness(99%) contrast(101%) grayscale(96%) invert(100%) saturate(119%)' : '',
        borderWidth: '2px',
        borderColor: border ? '#000' : ''
      }}
    ></Link>
  );
};

const ContactButton: React.FC = () => {
  return (
    <button
      className="btn btn-primary ml-0"
      data-toggle="modal"
      data-target="#modal1"
      type="button"
      style={{
        margin: '5px 5px',
        background: '#5c2de9',
        marginBottom: '10px',
        marginTop: '10px',
        paddingLeft: '12.25px',
        paddingRight: '13.25px',
        borderRadius: '49px',
        marginRight: '12px',
        width: '93.8125px',
        height: '31.25px',
        paddingTop: '2.625px'
      }}
    >
      Contact
    </button>
  );
};

const Menu: React.FC = () => {
  type ItemProps = {
    href: string;
    children: React.ReactNode;
  };
  const Item: React.FC<ItemProps> = ({ children, href }) => (
    <li className="nav-item">
      <Link
        className="nav-link"
        style={{
          color: '#eeeeee',
          padding: '12px 12px',
          paddingRight: '10px',
          paddingLeft: '10px'
        }}
        href={href}
      >
        {children}
      </Link>
    </li>
  );

  return (
    <ul className="navbar-nav ms-auto" style={{ color: '#fcfeff' }}>
      <Item href="/industry-projects">Industry Projects</Item>
      <Item href="https://makeathon.tum-ai.com">Makeathon</Item>
      <Item href="/events">Events</Item>
      <Item href="/forpartners">Partners</Item>
      <Item href="https://join-us.tum-ai.com/">For Students</Item>
      <Item href="/members">Members</Item>
    </ul>
  );
};

type NavBarProps = {};

export const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bd-navbar shadow position-sticky top-0"
      style={{
        height: '65px',
        paddingLeft: '12px',
        fontSize: '17px',
        background: 'linear-gradient(82deg, #211b44, #151e35), rgb(11,11,11)',
        zIndex: 1120
      }}
    >
      <div className="container-xxl" style={{ maxWidth: '1140px' }}>
        <Link className="navbar-brand" href="/">
          <img className="my-1" src={Logo.src} style={{ width: '132.828px' }} />
        </Link>
        <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
          <span className="sr-only">Toggle navigation</span>
          <span
            className="navbar-toggler-icon text-white"
            style={{ filter: 'brightness(200%) contrast(200%) invert(100%)' }}
          ></span>
        </button>
        <div
          className="collapse navbar-collapse text-center"
          id="navcol-1"
          style={{
            opacity: '0.98',
            width: '109%',
            background: 'linear-gradient(90deg, #201c42, #151e36), rgb(11,11,11)',
            borderRadius: '10px',
            marginTop: '-7px',
            paddingTop: '6px'
          }}
        >
          <Menu />
          <SocialButton link="https://www.linkedin.com/company/tum-ai/" backgroundImage={LinkedIn.src} filter={true} />
          <SocialButton link="https://www.instagram.com/tum.ai_official/" backgroundImage={Instagram.src} />
          <SocialButton
            link="https://join.slack.com/t/tumaipublic/shared_invite/zt-10kg0t1f9-JLRXDxY_d_vprKWgab0cVw"
            backgroundImage={Slack.src}
            filter={true}
            border={true}
          />
          <ContactButton />
        </div>
      </div>
    </nav>
  );
};
