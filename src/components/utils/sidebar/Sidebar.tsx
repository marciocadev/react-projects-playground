import { AuroraSvgIcon } from "./aws/AuroraSvgIcon";
import { SecretsManagerSvgIcon } from "./aws/SecretsManagerSvgIcon";
import { SystemsManagerSvgIcon } from "./aws/SystemsManagerSvgIcon";
import { ComprehendSVGIcon } from './aws/ComprehendSvgIcon';
import { Divider } from "./Divider";
import { DividerTheme } from "./DividerTheme";
import { ThemeIcon } from "./ThemeIcon";
import { AppConfigSvgIcon } from "./aws/AppConfigSvgIcon";
import { S3SvgIcon } from "./aws/S3SvgIcon";

import { SideBarAwsIcon } from "./SideBarAwsIcon";
import a from '../../../images/Arch_Amazon-Aurora_64.svg';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='theme-icon-box'>
        <ThemeIcon />
      </div>
      <DividerTheme />

      <AuroraSvgIcon />
      <Divider />

      <AppConfigSvgIcon />
      <Divider />

      <ComprehendSVGIcon />
      <Divider />

      <SecretsManagerSvgIcon />
      <Divider />
      
      <SystemsManagerSvgIcon />
      <Divider />

      <S3SvgIcon />
      <Divider />

      <SideBarAwsIcon svg={a} tooltip={'teste'} />
    </div>
  );
}