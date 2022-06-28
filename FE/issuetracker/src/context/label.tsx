import { atom } from 'recoil';

export type LabelType = {
  id: number;
  title: string;
  color: string;
  description: string;
};
type LabelStateType = {
  key: string;
  default: LabelType;
};
export const initialLabelState = {
  id: 1,
  title: '라벨 이름',
  color: '#007AFF',
  description: '설명',
};
const initialState: LabelStateType = {
  key: 'labelState',
  default: initialLabelState,
};
export const labelState = atom(initialState);
