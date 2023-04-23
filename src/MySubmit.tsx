import { Button } from '@fluentui/react-components';

// type ButtonShape = "rounded" | "circular" | "square" | undefined;

type MySubmitProps = {
    buttonText: string,
    buttonShape: "rounded" | "circular" | "square" | undefined
}

function MySubmit({ buttonText, buttonShape}: MySubmitProps): JSX.Element { 
    return (<><Button appearance="primary" shape={buttonShape}>{buttonText}</Button></>) 
}

export default MySubmit;