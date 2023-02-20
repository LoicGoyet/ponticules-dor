const pr = new Intl.PluralRules('fr-FR', {type: 'ordinal'});

const suffixes = new Map([
  ['one', 'ère'],
  ['two', 'ème'],
  ['few', 'ème'],
  ['other', 'ème'],
]);

export const formatOrdinals = (n: number) => {
  const rule = pr.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};
