import { styled } from "styled-components"

/**
 * 
 * @param {{
 * title: string;
 * subTitle: string;
 * subTitleEnphasisWord: string;
 * }} param0 
 */
export default function TitleCardMatch({title, subTitle, subTitleEnphasisWord}) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{subTitle} <StyledSpan>{subTitleEnphasisWord}</StyledSpan>!</p>
        </div>
    )
}

const StyledSpan = styled.span`
color: #FF8200;
`