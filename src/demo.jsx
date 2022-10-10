import React, { useState } from 'react';

import { Select, Space } from 'tdesign-react';

const FilterableSelect = () => {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState(['1']);

  const onChange = (value) => {
    setValue(value);
  };

  const options = [
    { label: "选项1", value: "1" },
    { label: "选项2", value: "2" },
    { label: "选项3", value: "3" },
    { label: "选项4", value: "4" },
    { label: "选项5", value: "5" },
    { label: "选项6", value: "6" },
    { label: "选项7", value: "7" },
    { label: "选项8", value: "8" },
    { label: "选项9", value: "9" },
    { label: "选项10", value: "10" },
    { label: "选项11", value: "11" },
    { label: "选项12", value: "12" }
  ];

  const filterMethod = (search, option) => {
    console.log('search:', search, ', option:', option);
    return option.label.indexOf(search) !== -1;
  };

  const handleBlur = (value, e) => {
    console.log('handleBlur: ', value, e);
  };

  const handleFocus = (value, e) => {
    console.log('handleFocus: ', value, e);
  };

  return (
    <Space breakLine style={{ width: '100%' }}>
      <Select
        value={value}
        onChange={onChange}
        placeholder="-请选择-"
        options={options}
        filterable
        style={{ width: '400px', display: 'inline-block' }}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <Select
        value={value2}
        onChange={setValue2}
        multiple
        placeholder="-请选择-"
        options={options}
        filterable
        filter={filterMethod}
        style={{ width: '400px', display: 'inline-block' }}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </Space>
  );
};

export default FilterableSelect;
