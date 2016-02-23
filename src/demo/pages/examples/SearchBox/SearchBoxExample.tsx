import * as React from 'react';
import SearchBox from '../../../../components/SearchBox/index';
import Link from '../../../../components/Link/index';
import ExampleCard from '../../../components/ExampleCard/index';
import PropertiesTable from '../../../components/PropertiesTable/index';

export default class SearchBoxExample extends React.Component<any, any> {
  public render() {
    return (
      <div className='SearchBoxExample'>
        <h1 className='ms-font-xxl'>SearchBox</h1>
        <div><Link target='_blank' text='SearchBoxes' url='http://dev.office.com/fabric/components/SearchBox' /> provide a box for searching, complete with auto complete callbacks and suggestions.</div>

        <PropertiesTable properties={ [] } />

        <h2 className='ms-font-xl'>Examples</h2>

        <ExampleCard title='SearchBox'>
          <SearchBox />
        </ExampleCard>
      </div>
    );
  }

}