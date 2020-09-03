import CreatableSelect from 'react-select/creatable';
import React from 'react';

const options = [
  { id: '123', label: 'chocolate', value: 'chocolate' },
  { label: 'strawberry', value: 'strawberry' },
  { label: 'vanilla', value: 'vanilla' },
];

export const BlogPostTagsCreatableSelect = (
  { onChange, selectedOption }
) => (
  <CreatableSelect
    aria-label="Tags"
    name="tags"
    placeholder="Tags"
    value={selectedOption}
    options={options}
    onChange={onChange}
    isMulti={true}
  />
);
