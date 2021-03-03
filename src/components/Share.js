import {
    EmailShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailIcon,
    LinkedinIcon,
    TwitterIcon
} from 'react-share';

const Share = (props) => {
    const url = props.article.url;
    const size = "2.5rem";
    return (
        <>
            <EmailShareButton url={url}>
                <EmailIcon size={size}/>
            </EmailShareButton>
            <LinkedinShareButton url={url}>
                <LinkedinIcon size={size}/>
            </LinkedinShareButton>
            <TwitterShareButton url={url}>
                <TwitterIcon size={size}/>
            </TwitterShareButton>
        </>
    );
}

export default Share;
