import Link from "next/link";
import Logo from "../logo/logo";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import classes from "./footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={classes.footer}>
      <div className={classes.footer__logo}>
        <Logo footer={true} />
      </div>
      <div className={classes.footer__info}>
        <div
          className={`${classes.footer__info_company} flex flex-center flex-vertical`}
        >
          <div>
            <h3 className={classes.footer__info_title}>Company</h3>
            <ul className={classes.footer__info_list}>
              <li className={classes.footer__info_item}>
                <Link href="#" className={classes.footer__link}>
                  About
                </Link>
              </li>
              <li className={classes.footer__info_item}>
                <Link href="#" className={classes.footer__link}>
                  Careers
                </Link>
              </li>
              <li className={classes.footer__info_item}>
                <Link href="#" className={classes.footer__link}>
                  Mobile
                </Link>
              </li>
              <li className={classes.footer__info_item}>
                <Link href="#" className={classes.footer__link}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`${classes.footer__info_contact} flex flex-center flex-vertical`}
        >
          <div>
            <h3 className={classes.footer__info_title}>Contact</h3>
            <ul className={classes.footer__info_list}>
              <li className={classes.footer__info_item}>
                <Link href="#" className={classes.footer__link}>
                  Help/FAQ
                </Link>
              </li>
              <li className={classes.footer__info_item}>
                <Link href="#" className={classes.footer__link}>
                  Press
                </Link>
              </li>
              <li className={classes.footer__info_item}>
                <Link href="#" className={classes.footer__link}>
                  Affiliates
                </Link>
              </li>
              <li className={classes.footer__info_item}>
                <Link href="#" className={classes.footer__link}>
                  Hotel owners
                </Link>
              </li>
              <li className={classes.footer__info_item}>
                <Link href="#" className={classes.footer__link}>
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`${classes.footer__info_more} flex flex-center flex-vertical`}
        >
          <div>
            <h3 className={classes.footer__info_title}>More</h3>
            <ul className={classes.footer__info_list}>
              <li className={classes.footer__info_item}>
                <Link href="#" className={classes.footer__link}>
                  Airlines
                </Link>
              </li>
              <li className={classes.footer__info_item}>
                <Link href="#" className={classes.footer__link}>
                  Low fair trip
                </Link>
              </li>
              <li className={classes.footer__info_item}>
                <Link href="#" className={classes.footer__link}>
                  Badge & certificates
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.footer_bottom}>
        <div>
          <div className={classes.footer__copyright}>
            <Link href="#" className={classes.footer__link}>
              Privacy
            </Link>
            <Link href="#" className={classes.footer__link}>
              Terms & conditions
            </Link>
            <Link href="#" className={classes.footer__link}>
              &#169;{year} skytra
            </Link>
          </div>

          <div className={classes.footer__social}>
            <Link href="#" passHref legacyBehavior>
              <a><FaFacebook className={classes.footer__social_icon} /></a>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <a><FaInstagram className={classes.footer__social_icon} /></a>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <a><FaTwitter className={classes.footer__social_icon} /></a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
