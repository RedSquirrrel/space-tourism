import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      Challenge by
      <a
        className="footer__link"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer noopener"
      >
        {' '}
        Frontend Mentor
      </a>{' '}
      Coded by
      <a
        className="footer__link"
        href="https://github.com/RedSquirrrel/space-tourism"
        target="_blank"
        rel="noreferrer noopener"
      >
        {' '}
        @RedSquirrel
      </a>
    </div>
  );
};

export default Footer;
