import React from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';

const App = () => {
  return (
    <section className="container">
      <ReactiveBase
        app="YOUR_APP_NAME"
        url="YOUR_ELASTICSEARCH_URL"
        credentials="YOUR_APP_ID:YOUR_API_KEY"
        type="listing"
      >
        {/* Your components */}
      </ReactiveBase>
    </section>
  );
};

export default App;
