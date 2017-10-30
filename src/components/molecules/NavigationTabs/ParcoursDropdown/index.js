import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import MEDIA_QUERIES from 'constants/media-queries';
import NavigationTab from 'components/atoms/NavigationTab';
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

  onSelect({ value }){
    const { router } = this.context;
    router.history.push(`/parcours/${value}`);
  }

  render(){
    const { match } = this.props;
    const slug = match.params.slug;
    const selected = getOptions().find(({ value }) => value === slug);
    const options = getOptions().filter(({ value }) => value !== slug);
    return (
      <MediaQuery query={MEDIA_QUERIES.mobile}>
        {(matches)=> {
          if (matches) {
            /*
            return list().map(({ slug, title }) => (
              <NavigationTab key={`parcour-${slug}`} to={`/parcours/${slug}`}>Le parcours de { title }</NavigationTab>
            ));
            */
            return null;
          } else {
            return (
              <Dropdown
                className='navigation-tab parcours-dropdown'
                options={options}
                onChange={(value) => this.onSelect(value)}
                value={selected}
              />
            );
          }
        }}
      </MediaQuery>
    );
  }
}

export default ParcoursDropdown;
