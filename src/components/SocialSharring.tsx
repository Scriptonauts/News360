import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const SocialSharing = (props: any) => {
  return (
    <div className={"d-flex justify-content-" + props.position + " gap-1 my-3"}>
      <TwitterShareButton url={props.data.link}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <FacebookShareButton url={props.data.link}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <LinkedinShareButton url={props.data.link}>
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
      <WhatsappShareButton url={props.data.link}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </div>
  );
};

SocialSharing.defaultProps = {
  position: "start",
};

export default SocialSharing;
