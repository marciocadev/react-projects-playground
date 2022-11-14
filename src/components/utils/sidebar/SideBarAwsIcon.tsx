interface SideBarAwsIconProps {
  svg: any;
  tooltip: string;
}

export const SideBarAwsIcon = (props: SideBarAwsIconProps) => {
  return (
    <div className="sidebar-aws-icon-div group">
      <img src={props.svg} alt={props.tooltip} className='sidebar-aws-icon-img' />
      <span className="sidebar-tooltip group-hover:scale-100 group-hover:block">
        {props.tooltip}
      </span>
    </div>
  );
}