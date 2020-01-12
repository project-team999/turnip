import styled from 'styled-components'

export const Wrapper = styled.div`
        width: ${props => props.w || '100%'};
        height:${props => props.h || '100%'};
        background:${props => props.bg || '#ffffff'};
        `


export const Container = styled.div`
        width: ${props => props.width || '100%'};
        height:${props => props.width || '100%'};
        background:${props => props.bg || '#fafafa'};
        position: relative;
        `
export const CenterBox = styled.div`
        width:430px ;
        height: 570px;
        background:#ffffff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        border-radius: 5px;
        border:1px solid #e9e9e9;
        `
export const Img = styled.img`
        width: ${props => props.width || '100%'};
        height: ${props => props.width || '100%'};
        `
export const AHref = styled.a`
        width: ${props => props.width || '100%'};
        height: ${props => props.width || '100%'};
        `
export const TextBox = styled.div`
        font-size: ${props => props.size || '15px'};
        line-height: ${props => props.lh || '0'};
        color: ${props => props.color || '#000000'};
        text-align: ${props => props.align || 'center'};
        margin-top: ${props => props.mt || '0'};
        font-weight: ${props => props.fw || ''};
        `  