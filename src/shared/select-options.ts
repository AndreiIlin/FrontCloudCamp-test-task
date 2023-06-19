import { type SelectOption } from 'components/select';

const enum SelectOptions {
  'MAN' = 'man',
  'WOMAN' = 'woman',
}

export const selectOptions: SelectOption[] = [
  {
    id: 'field-sex-option-man',
    value: SelectOptions.MAN,
    name: 'man',
  },
  {
    id: 'field-sex-option-woman',
    value: SelectOptions.WOMAN,
    name: 'woman',
  },
];
