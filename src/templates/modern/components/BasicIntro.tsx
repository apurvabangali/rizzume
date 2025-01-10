import { ProfileContact } from '../atoms/ProfileContact';
import { ProfileName } from '../atoms/ProfileName';
import { SectionSubtitle } from '../atoms/SectionSubtitle';

export const BasicIntro = ({
  name,
  label,
  url,
  email,
  phone,
  city,
}: {
  name: string;
  label: string;
  url: string;
  email: string;
  phone: string;
  city: string;
}) => {
  return (
    <div className="flex justify-center items-center p-2">
      <div className='flex flex-col items-center '>
        <ProfileName name={name} />
        <SectionSubtitle label={label} />
        <div className="flex gap-3">
          <ProfileContact text={phone} />
          <ProfileContact text={email} />
          <ProfileContact text={city} />
          {url && (
            <div className="flex gap-2 ml-2 items-center">
              <ProfileContact text={url} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};