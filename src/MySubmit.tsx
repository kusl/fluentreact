import { Button } from '@fluentui/react-components';

// type ButtonShape = "rounded" | "circular" | "square" | undefined;

type MySubmitProps = {
    buttonText: string,
    buttonShape: "rounded" | "circular" | "square" | undefined,
    onClickEvent: () => void,
}

function MySubmit({ buttonText, buttonShape, onClickEvent}: MySubmitProps): JSX.Element { 
    return (<><Button appearance="primary" shape={buttonShape} onClick={onClickEvent}>{buttonText}</Button></>) 
}

export default MySubmit;