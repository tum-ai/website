import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { SocialMedia } from "@data/e-lab";

function SocialMediaLinks(props: {
  socialMedia: SocialMedia;
  iconClassNames: string;
}) {
  return (
    <>
      {props.socialMedia?.linkedin && (
        <Link
          key="linkedin"
          href={props.socialMedia.linkedin}
          target="_blank"
          rel="me"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="lg"
            className={props.iconClassNames}
            title="LinkedIn Profile"
          />
        </Link>
      )}
      {props.socialMedia?.x && (
        <Link key="x" href={props.socialMedia.x} target="_blank" rel="me">
          <FontAwesomeIcon
            icon={faXTwitter}
            size="lg"
            className={props.iconClassNames}
            title="X (former Twitter) Account"
          />
        </Link>
      )}
      {props.socialMedia?.instagram && (
        <Link
          key="instagram"
          href={props.socialMedia.instagram}
          target="_blank"
          rel="me"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="lg"
            className={props.iconClassNames}
            title="Instagram Page"
          />
        </Link>
      )}
      {props.socialMedia?.youtube && (
        <Link
          key="youtube"
          href={props.socialMedia.youtube}
          target="_blank"
          rel="me"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            size="lg"
            className={props.iconClassNames}
            title="YouTube Channel"
          />
        </Link>
      )}
      {props.socialMedia?.website && (
        <Link
          key="website"
          href={props.socialMedia.website}
          target="_blank"
          rel="me"
        >
          <FontAwesomeIcon
            icon={faLink}
            size="lg"
            className={props.iconClassNames}
            title="Website"
          />
        </Link>
      )}
      {props.socialMedia?.email && (
        <Link key="email" href={`mailto:${props.socialMedia.email}`} rel="me">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            className={props.iconClassNames}
            title="Send E-Mail"
          />
        </Link>
      )}
    </>
  );
}

export default SocialMediaLinks;
