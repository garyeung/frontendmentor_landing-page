import "./Caption.less"

interface Props {
    text: string
}

const Caption = (props: Props) => {
   return (  
    <h1 className="caption">
        {props.text}
    </h1>
   )
}

export default Caption;