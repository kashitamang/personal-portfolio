import avatar from '../../assets/avatar.jpg';
import { fairyDustCursor } from 'cursor-effects';

export default function Avatar() {
  fairyDustCursor({ colors: ['#ebfae0'] });

  return (
    <img
      src={avatar}
      alt="apple memoji of a person with a medium skintone and shoulder length brown hair smiling"
    />
  );
}
