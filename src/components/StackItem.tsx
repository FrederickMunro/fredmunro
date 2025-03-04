interface Props {
  name: string;
  icon: JSX.Element;
}

const StackItem = ({ name, icon }: Props) => {
  return(
    <div className='stack-item'>
      {icon}
      <h4 className='stack-item-name'>{name}</h4>
    </div>
  );
}

export default StackItem;