import {
    EmailShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailIcon,
    LinkedinIcon,
    TwitterIcon
} from 'react-share';

const Share = (props) => {
    console.log('SHARE PROPS:', props)
    const url = props.article.url;
    return (
        <>
            <EmailShareButton url={url}>
                <EmailIcon />
            </EmailShareButton>
            <LinkedinShareButton url={url}>
                <LinkedinIcon />
            </LinkedinShareButton>
            <TwitterShareButton url={url}>
                <TwitterIcon />
            </TwitterShareButton>
        </>
    );
}

export default Share;
