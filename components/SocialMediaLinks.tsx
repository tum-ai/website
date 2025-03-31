import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { SocialMedia } from "data/e-lab";

function SocialMediaLinks(props: {
  socialMedia: SocialMedia;
  iconClassNames: string;
}) {
  return (
    <div className="flex items-center space-x-4">
      {props.socialMedia?.linkedin && (
        <Link
          key="linkedin"
          href={props.socialMedia.linkedin}
          target="_blank"
          rel="me"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className={`${props.iconClassNames} h-4 w-4`}
            title="LinkedIn Profile"
          />
        </Link>
      )}
      {props.socialMedia?.x && (
        <Link key="x" href={props.socialMedia.x} target="_blank" rel="me">
          <FontAwesomeIcon
            icon={faXTwitter}
            className={`${props.iconClassNames} h-4 w-4`}
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
            className={`${props.iconClassNames} h-4 w-4`}
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
            className={`${props.iconClassNames} h-4 w-4`}
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
            className={`${props.iconClassNames} h-4 w-4`}
            title="Website"
          />
        </Link>
      )}
      {props.socialMedia?.email && (
        <Link key="email" href={`mailto:${props.socialMedia.email}`} rel="me">
          <FontAwesomeIcon
            icon={faEnvelope}
            className={`${props.iconClassNames} h-4 w-4`}
            title="Send E-Mail"
          />
        </Link>
      )}
    </div>
  );
}

export default SocialMediaLinks;
