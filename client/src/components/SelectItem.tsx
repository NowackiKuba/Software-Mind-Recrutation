const SelectItem = ({ value, label }: { value: string; label: string }) => {
  return <option value={value}>{label}</option>;
};

export default SelectItem;
