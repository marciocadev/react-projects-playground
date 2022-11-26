import aurora from '../../../images/Arch_Amazon-Aurora_64.svg';
import comprehend from '../../../images/Arch_Amazon-Comprehend_64.svg';
import appconfig from '../../../images/Arch_AWS-AppConfig_64.svg';

export const IconsFloating = () => {
  return (
    <>
      <button className='btn btn-square mt-10 ml-10'>
        <img src={aurora} alt='aurora' />
      </button>

      <button className='btn btn-square mt-10 ml-2'>
        <img src={appconfig} alt='appconfig' />
      </button>

      <button className='btn btn-square mt-10 ml-2'>
        <img src={comprehend} alt='comprehend' />
      </button>
    </>
  );
}