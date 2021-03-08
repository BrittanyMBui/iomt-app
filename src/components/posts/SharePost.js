import {
    EmailShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailIcon,
    LinkedinIcon,
    TwitterIcon
} from 'react-share';

const SharePost = (props) => {
    const url = props.posts.url;
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

export default SharePost;
