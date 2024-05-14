import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export const UserAvatar = () => {
  return (
    <Avatar>
      <AvatarImage src='https://gravatar.com/avatar/f9319dcc2c789cf57e255caa4334977f?s=200&d=mp&r=pg' />
      <AvatarFallback>GH</AvatarFallback>
    </Avatar>
  );
};
