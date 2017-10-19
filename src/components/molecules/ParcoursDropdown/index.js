import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown';

import { list } from 'utils/parcours';
import './styles.css';

const getOptions = () => list()
  .map(({ slug, title }) => ({ value: slug, label: title }));

class ParcoursDropdown extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props){
    super(props);
    this.state = {
      selected: null
    };
  }
  onSelect({ value }){
    const { router } = this.context;
    console.log('onSelect', value);
    router.history.push(`/parcours/${value}`);
  }
  render(){
    const { match } = this.props;
    const slug = match.params.slug;
    const selected = getOptions().find(({ value }) => value === slug);
    const options = getOptions().filter(({ value }) => value !== slug);
    return (
      <Dropdown
        className='navigation-tab parcours-dropdown'
        options={options}
        onChange={(value) => this.onSelect(value)}
        value={selected}
      />
    );
  }
}

export default ParcoursDropdown;
