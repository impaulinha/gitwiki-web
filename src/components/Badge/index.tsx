import { BadgeContent } from './styles';

export function Badge({ label }: { label: string }) {
  return <BadgeContent>{label}</BadgeContent>;
}
