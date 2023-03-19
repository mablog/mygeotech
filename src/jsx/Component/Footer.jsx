import ContactUs from "./ContactUs";

const Footer = ({ anchorNousContacterRef }) => {
  return (
    <footer className="site-footer">
      <p className="company-name">MY GeoTech</p>
      <div className="highlighted-line"></div>
      <div id="contact-us" ref={anchorNousContacterRef} className="contact-us">
        <ContactUs />
      </div>
      <p className="copyright">Copyright © 2023 MY GeoTech</p>
    </footer>
  );
};
export default Footer;
